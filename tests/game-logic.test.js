import { describe, expect, it, vi } from "vitest";
import {
  computeLean,
  iconsMatch,
  resolveSnowballHit,
} from "../scripts/game-logic.js";

describe("resolveSnowballHit", () => {
  it("awards points and streak when collision occurs", () => {
    const targets = [{ x: 10, y: 10, r: 6 }];
    const spawnTarget = vi.fn().mockReturnValue({ x: 1, y: 1, r: 5 });

    const result = resolveSnowballHit(targets, 0, 0, 10, 10, spawnTarget);

    expect(result.hit).toBe(true);
    expect(result.score).toBe(11);
    expect(result.streak).toBe(1);
    expect(result.targets[0]).toEqual({ x: 1, y: 1, r: 5 });
    expect(spawnTarget).toHaveBeenCalledTimes(1);
  });

  it("resets streak when no targets are hit", () => {
    const targets = [{ x: 40, y: 40, r: 6 }];

    const result = resolveSnowballHit(targets, 25, 3, 5, 5);

    expect(result.hit).toBe(false);
    expect(result.score).toBe(25);
    expect(result.streak).toBe(0);
    expect(result.targets).toEqual(targets);
  });
});

describe("computeLean", () => {
  it("returns the lean between base and top ornaments", () => {
    const ornaments = [
      { x: 50, y: 180, r: 12 },
      { x: 54, y: 140, r: 10 },
      { x: 62, y: 100, r: 8 },
    ];

    expect(computeLean(ornaments)).toBe(12);
  });

  it("returns 0 for an empty stack", () => {
    expect(computeLean([])).toBe(0);
  });
});

describe("iconsMatch", () => {
  it("recognizes matching icons for the gift matcher game", () => {
    expect(iconsMatch("🎁", "🎁")).toBe(true);
    expect(iconsMatch("🎁", "🧣")).toBe(false);
  });
});
