/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  const strX = x.toString();
  let mid = strX.length / 2;
  half1 = strX.substring(0, Math.ceil(mid));
  const half2 = strX
    .substring(Math.floor(mid), strX.length)
    .split("")
    .reverse()
    .join("");

  return half1 === half2;
};
