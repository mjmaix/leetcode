const longestCommonPrefix = (strs: string[]) => {
  let common = "";

  const sorted = strs.sort((a, b) => a.length - b.length);
  const maxLength = sorted.length > 0 ? sorted[0].length : 0;
  let charIndex = 0;
  while (charIndex < maxLength) {
    let same = true;
    let iterChar = "";
    for (let wordIndex = 0; wordIndex < strs.length && same; wordIndex++) {
      if (wordIndex === 0) {
        iterChar = strs[wordIndex][charIndex];
      } else {
        same = strs[wordIndex][charIndex] === iterChar;
      }
    }

    if (!same) {
      break;
    }
    common += iterChar;
    charIndex++;
  }

  return common;
};

export { longestCommonPrefix };
