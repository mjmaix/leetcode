const numJewelsInStones = (jewels: string, stones: string) => {
  const jewelTypesArr = new Set(jewels.split(""));

  let counter = 0;

  for (const stone of stones) {
    if (jewelTypesArr.has(stone)) {
      counter++;
    }
  }

  return counter;
};

export { numJewelsInStones };
