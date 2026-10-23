import { describe, expect, test } from "vitest";
import { formatRoute, HOME, parseRoute } from "./route.ts";

/** The explorer route the hash names; fails for any other screen. */
function explorer(hash: string) {
  const route = parseRoute(hash);
  if (route.screen !== "openings") throw new Error(`${hash} is not the explorer`);
  return route;
}

describe("parseRoute", () => {
  test("the entry page for an empty, root or unknown hash", () => {
    expect(parseRoute("")).toEqual(HOME);
    expect(parseRoute("#/")).toEqual(HOME);
    expect(parseRoute("#")).toEqual(HOME);
    expect(parseRoute("#/elsewhere")).toEqual(HOME);
    expect(parseRoute("#/openings/extra")).toEqual(HOME);
  });

  test("the explorer at its address, at the initial position by default", () => {
    expect(parseRoute("#/openings")).toEqual({ screen: "openings", line: "", ply: null, side: "white" });
  });

  test("the line, the move shown and the side from the parameters", () => {
    expect(parseRoute("#/openings?line=1.e4+e5+2.Nf3&ply=2&side=black")).toEqual({
      screen: "openings",
      line: "1.e4 e5 2.Nf3",
      ply: 2,
      side: "black",
    });
    expect(explorer("#/openings?line=1.e4%20e5").line).toBe("1.e4 e5");
  });

  test("a ply that is not a whole non-negative number means the end of the line", () => {
    expect(explorer("#/openings?ply=x").ply).toBeNull();
    expect(explorer("#/openings?ply=-1").ply).toBeNull();
    expect(explorer("#/openings?ply=1.5").ply).toBeNull();
    expect(explorer("#/openings?ply=").ply).toBeNull();
    expect(explorer("#/openings?ply=0").ply).toBe(0);
  });

  test("any side but black is white", () => {
    expect(explorer("#/openings?side=white").side).toBe("white");
    expect(explorer("#/openings?side=green").side).toBe("white");
  });
});

describe("formatRoute", () => {
  test("writes the entry page and the explorer without parameters at its defaults", () => {
    expect(formatRoute(HOME)).toBe("#/");
    expect(formatRoute({ screen: "openings", line: "", ply: null, side: "white" })).toBe("#/openings");
  });

  test("writes the line with + for spaces, the ply and the side only when set", () => {
    expect(formatRoute({ screen: "openings", line: "1.e4 e5 2.Nf3", ply: null, side: "white" })).toBe(
      "#/openings?line=1.e4+e5+2.Nf3",
    );
    expect(formatRoute({ screen: "openings", line: "1.e4 e5", ply: 1, side: "black" })).toBe(
      "#/openings?line=1.e4+e5&ply=1&side=black",
    );
  });

  test("reads back what it wrote, a promotion included", () => {
    const route = { screen: "openings", line: "1.a4 b5 2.axb5 a6 3.bxa6 Nc6 4.axb7 Rb8 5.bxc8=Q", ply: 3, side: "black" } as const;
    expect(parseRoute(formatRoute(route))).toEqual(route);
  });
});
