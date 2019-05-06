const isPalindrome = (x: number) => {
  if (x < 0) {
    return false;
  }
  const strX = x.toString();
  const mid = strX.length / 2;
  const half1 = strX.substring(0, Math.ceil(mid));
  const half2 = strX
    .substring(Math.floor(mid), strX.length)
    .split("")
    .reverse()
    .join("");

  return half1 === half2;
};
export { isPalindrome };
