/**
 * Calculate snowball collisions and scoring.
 * @param {Array<{x:number,y:number,r:number}>} targets
 * @param {number} score
 * @param {number} streak
 * @param {number} x
 * @param {number} y
 * @param {() => {x:number,y:number,r:number}|null} spawnTarget
 * @returns {{targets: Array, score: number, streak: number, hit: boolean}}
 */
export function resolveSnowballHit(
  targets,
  score,
  streak,
  x,
  y,
  spawnTarget = () => null,
) {
  let hit = false;
  const updatedTargets = targets.map((target) => {
    const distance = Math.hypot(target.x - x, target.y - y);
    if (distance <= target.r) {
      hit = true;
      const bonus = Math.max(1, Math.floor(streak / 3));
      score += 10 + bonus;
      streak += 1;
      return spawnTarget() ?? target;
    }
    return target;
  });

  if (!hit) {
    streak = 0;
  }

  return { targets: updatedTargets, score, streak, hit };
}

export function computeLean(ornaments) {
  if (!ornaments.length) return 0;
  const base = ornaments[0].x;
  const top = ornaments[ornaments.length - 1].x;
  return top - base;
}

export const iconsMatch = (first, second) => first === second;
