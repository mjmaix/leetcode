/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
const MAX_32_BIT_VAL = 2147483647;
const reverse = function(x: number) {
  const isNegative = x < 0;

  const absXStr = Math.abs(x).toString();
  const absXRev = absXStr
    .split("")
    .reverse()
    .join("");
  const reversedAbs = Number(absXRev);
  let reversed32Max = 0;
  if (reversedAbs <= MAX_32_BIT_VAL) {
    const reversedVal = isNegative ? reversedAbs * -1 : reversedAbs;
    reversed32Max = reversedVal;
  }
  return reversed32Max;
};
export { reverse };
