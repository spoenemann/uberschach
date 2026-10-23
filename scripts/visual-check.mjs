#!/usr/bin/env node
// Visual check: renders the built app (dist/) in headless system Chrome at
// the GitHub Pages project path, applies the universal invariants, and writes
// screenshots at a desktop and a phone width. Rules, rationale and the
// ad-hoc check pattern: docs/visual-verification.md.
// Usage:
//   npm run check:visual                     # every screen (ROUTES below)
//   npm run check:visual -- / '#/openings'   # the given routes, relative to the base
//   npm run check:visual -- /tmp/check.mjs   # plus a disposable ad-hoc check module
// An argument ending in .mjs is loaded as an ad-hoc module; its default export
// (async ({ page, route, viewport, origin, shotDir, fail }) => { ... }) runs
// after every visit. Route- or feature-specific assertions never go in this
// file: they are what ad-hoc modules are for, and those are never committed.

import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright-core";
import { preview } from "vite";

/* global document -- browser code inside page.evaluate() runs in the page, not in Node */

const ROOT = path.resolve(import.meta.dirname, "..");
// The GitHub Pages project path. The server below serves dist/ under it no
// matter what vite.config.ts says: a wrong `base` there builds fine, and the
// deployed page then requests its script from a path that does not exist.
// Here that shows up as broken-resources.
const PAGES_BASE = "/uberschach/";
// The app's screens, visited when no route is given: the entry page and the
// opening explorer at the initial position. A new screen is a line here.
const ROUTES = ["/", "#/openings"];
const SHOT_DIR = path.join(tmpdir(), "uberschach-visual-check");
const VIEWPORTS = [
  { name: "desktop", width: 1280, height: 900 },
  { name: "phone", width: 390, height: 844 },
];

// Console errors that are expected on a route, as { route, pattern, reason }.
// An entry is a reviewable suppression; never silence an error by removing
// the console check itself.
const EXPECTED_CONSOLE = [];

const failures = [];
function fail(rule, where, message) {
  failures.push(`✖ ${rule} on ${where}:\n${message}`);
}

function indent(lines) {
  return `      ${[...new Set(lines)].slice(0, 8).join("\n      ")}\n`;
}

function slug(route) {
  return route === "/"
    ? "root"
    : route.replaceAll(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
}

// Vite's preview server serves dist/ exactly as GitHub Pages does: under the
// project path, index.html for a directory, 404 for anything else. appType
// "mpa" turns off the SPA fallback to index.html, which Pages does not have.
async function serveDist() {
  if (!existsSync(path.join(ROOT, "dist", "index.html"))) {
    console.error(
      "✖ visual-check: dist/index.html is missing; there is nothing to render.\n" +
        "  This check renders the production build, because the build is what\n" +
        "  GitHub Pages deploys.\n" +
        "  → Run `npm run build` first (`npm run check` does both in order).",
    );
    process.exit(1);
  }
  const server = await preview({
    root: ROOT,
    base: PAGES_BASE,
    appType: "mpa",
    logLevel: "silent",
    preview: { port: 0, host: "127.0.0.1", open: false },
  });
  const { port } = server.httpServer.address();
  return { server, origin: `http://127.0.0.1:${port}` };
}

// The locally installed Google Chrome; nothing is downloaded. GitHub's
// ubuntu-latest runners ship Chrome, so CI needs no extra step.
async function launchChrome() {
  const executablePath = process.env.CHROME_PATH;
  try {
    return await chromium.launch({
      channel: executablePath ? undefined : "chrome",
      executablePath,
      headless: true,
    });
  } catch (error) {
    console.error(
      `✖ visual-check: could not launch Chrome.\n      ${error.message.split("\n")[0]}\n` +
        "  This check renders the built app in a locally installed Google Chrome and\n" +
        "  deliberately downloads no browser (docs/visual-verification.md).\n" +
        "  → Install Google Chrome, or point CHROME_PATH at a Chrome or Chromium binary:\n" +
        "      CHROME_PATH=/path/to/chrome npm run check:visual",
    );
    return process.exit(1);
  }
}

function watch(page, origin, route) {
  const seen = { console: [], exceptions: [], failed: [], external: [] };
  const handlers = {
    console: (msg) => {
      if (msg.type() !== "error") return;
      const from = msg.location()?.url ?? "";
      if (from && !from.startsWith(origin)) return; // reported as third-party-request
      if (EXPECTED_CONSOLE.some((e) => e.route === route && e.pattern.test(msg.text()))) return;
      seen.console.push(msg.text());
    },
    pageerror: (error) => seen.exceptions.push(error.message),
    request: (req) => {
      if (!req.url().startsWith(origin)) seen.external.push(req.url());
    },
    requestfailed: (req) => {
      if (req.url().startsWith(origin)) {
        seen.failed.push(`${req.url()} :: ${req.failure()?.errorText ?? "failed"}`);
      }
    },
    response: (res) => {
      if (res.url().startsWith(origin) && res.status() >= 400) {
        seen.failed.push(`${res.url()} :: HTTP ${res.status()}`);
      }
    },
  };
  for (const [event, handler] of Object.entries(handlers)) page.on(event, handler);
  return {
    seen,
    stop() {
      for (const [event, handler] of Object.entries(handlers)) page.off(event, handler);
    },
  };
}

function report(where, seen, mounted, images) {
  if (seen.console.length > 0) {
    fail("console-errors", where, indent(seen.console) +
      "  The app must load without console errors; one here usually means a\n" +
      "  render error or a missing asset that every code-level check stays green on.\n" +
      "  → Fix the cause. If an error is genuinely expected on this route, add it to\n" +
      "    EXPECTED_CONSOLE (top of scripts/visual-check.mjs) with a reason.");
  }
  if (seen.exceptions.length > 0) {
    fail("uncaught-exception", where, indent(seen.exceptions) +
      "  The page threw outside any handler, so React most likely did not render.\n" +
      "  → Fix the throw; the message above is the browser's, so a stack is one\n" +
      "    `npm run dev` away.");
  }
  if (seen.failed.length > 0) {
    fail("broken-resources", where, indent(seen.failed) +
      "  A same-origin request failed: the page references something the build does\n" +
      "  not contain at that path. The app is served under the GitHub Pages project\n" +
      "  path, /uberschach/, so `base` in vite.config.ts must be exactly that, and a\n" +
      "  route must exist as a file in dist/ (Pages has no SPA fallback).\n" +
      "  → Check the referenced path, the route, or `base` in vite.config.ts.");
  }
  if (seen.external.length > 0) {
    fail("third-party-request", where, indent(seen.external) +
      "  The app makes no third-party request: no web fonts, no CDN, no analytics\n" +
      "  (docs/design-docs/design-system.md, Cross-cutting concerns). The request\n" +
      "  was blocked, so it also failed in the page.\n" +
      "  → Bundle the resource through an import, or serve it from public/.");
  }
  if (!mounted) {
    fail("not-mounted", where,
      "      #root has no rendered children.\n" +
      "  React did not mount: the page is blank, which no other check sees.\n" +
      "  → The cause is usually one of the failures above; with none, run\n" +
      "    `npm run dev` and look at the browser console.");
  }
  if (images.broken.length > 0 || images.noAlt.length > 0) {
    fail("images", where, indent([
      ...images.broken.map((src) => `failed to load: ${src}`),
      ...images.noAlt.map((src) => `missing alt attribute: ${src}`),
    ]) +
      "  Every rendered image must load and carry an alt attribute (empty for a\n" +
      "  decorative one).\n" +
      "  → Failed load: check the path. Missing alt: add it where the image is emitted.");
  }
}

// What the loaded page looks like to the invariants: did React mount, and do
// the images load and carry alt.
async function inspect(page) {
  const mounted = await page
    .waitForSelector("#root > *", { state: "attached", timeout: 5000 })
    .then(() => true, () => false);
  await page.evaluate(() => document.fonts.ready);
  const images = await page.evaluate(() => {
    const all = [...document.querySelectorAll("img")];
    return {
      broken: all.filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src),
      noAlt: all.filter((i) => !i.hasAttribute("alt")).map((i) => i.src),
    };
  });
  return { mounted, images };
}

async function visit(page, { origin, route, viewport }) {
  const where = `${route} @ ${viewport.name}`;
  const { seen, stop } = watch(page, origin, route);
  await page.setViewportSize({ width: viewport.width, height: viewport.height });
  const loaded = await page
    .goto(origin + PAGES_BASE + route.replace(/^\//, ""), { waitUntil: "load" })
    .then(
      () => true,
      (error) => {
        // Chrome fails a navigation to an empty 404 outright; the listeners
        // above usually saw the response already.
        if (seen.failed.length === 0) seen.failed.push(`${route} :: ${error.message.split("\n")[0]}`);
        return false;
      },
    );
  // On a failed navigation Chrome shows its own error page, which has no
  // page context to inspect.
  const { mounted, images } = loaded
    ? await inspect(page)
    : { mounted: false, images: { broken: [], noAlt: [] } };
  stop();
  report(where, seen, mounted, images);
  await page.screenshot({
    path: path.join(SHOT_DIR, `${slug(route)}-${viewport.name}.png`),
    fullPage: true,
  });
}

async function loadAdHocChecks(files) {
  const checks = [];
  for (const arg of files) {
    const file = path.resolve(arg);
    let mod;
    try {
      mod = await import(pathToFileURL(file));
    } catch (error) {
      console.error(
        `✖ visual-check: ad-hoc check module failed to load: ${arg}\n      ${error.message}\n` +
          "  → Arguments ending in .mjs are loaded as check modules; everything else is\n" +
          "    a route. The module must be plain ESM JavaScript at a path that exists.",
      );
      process.exit(1);
    }
    if (typeof mod.default !== "function") {
      console.error(
        `✖ visual-check: ad-hoc check module has no default export function: ${arg}\n` +
          "  → Export the check as the default:\n" +
          "      export default async ({ page, route, viewport, origin, shotDir, fail }) => { ... }\n" +
          "    It runs after every visit; filter on `route` and `viewport.name` inside.",
      );
      process.exit(1);
    }
    checks.push({ name: path.basename(file), run: mod.default });
  }
  return checks;
}

async function runAdHocChecks(checks, context) {
  const where = `${context.route} @ ${context.viewport.name}`;
  for (const check of checks) {
    try {
      await check.run({
        ...context,
        fail: (rule, message) => fail(`${rule} [${check.name}]`, where, message),
      });
    } catch (error) {
      fail(`ad-hoc-check-crashed [${check.name}]`, where, `      ${error.message}\n` +
        "  The module threw instead of reporting a finding.\n" +
        "  → Fix the module; report findings through the provided fail(rule, message).");
    }
  }
}

const args = process.argv.slice(2);
const checks = await loadAdHocChecks(args.filter((a) => a.endsWith(".mjs")));
const routes = args.filter((a) => !a.endsWith(".mjs"));
if (routes.length === 0) routes.push(...ROUTES);

await mkdir(SHOT_DIR, { recursive: true });
const { server, origin } = await serveDist();
const browser = await launchChrome();
try {
  const context = await browser.newContext();
  // Requests off the origin are blocked, so the run is deterministic and works
  // offline; each one is also reported, see third-party-request above.
  await context.route("**/*", (r) =>
    r.request().url().startsWith(origin) ? r.continue() : r.abort(),
  );
  const page = await context.newPage();
  for (const route of routes) {
    for (const viewport of VIEWPORTS) {
      console.log(`· ${route} @ ${viewport.name}`);
      await visit(page, { origin, route, viewport });
      await runAdHocChecks(checks, { page, route, viewport, origin, shotDir: SHOT_DIR });
    }
  }
} finally {
  await browser.close();
  await server.close();
}

if (failures.length > 0) {
  console.error(failures.join("\n\n"));
  console.error(
    `\n${failures.length} visual check(s) failed. Rules: docs/visual-verification.md`,
  );
  process.exit(1);
}
const adHocNote = checks.length > 0 ? ` + ${checks.map((c) => c.name).join(", ")}` : "";
console.log(
  `✔ visual-check: ${routes.length} route(s) × ${VIEWPORTS.length} viewports green ` +
    `(console, exceptions, resources, third-party, mount, images${adHocNote}).`,
);
console.log(`  Screenshots: ${SHOT_DIR}`);
console.log("  These are universal invariants only. For a change to anything rendered,");
console.log("  now LOOK at the screenshots (open the PNG files) and verify the specifics");
console.log("  of your change with a disposable ad-hoc module if looking is not enough");
console.log("  (docs/visual-verification.md). A blank or broken frame is a");
console.log("  failure even when every check above is green.");
