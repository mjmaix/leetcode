type RomanSymbol = "I" | "V" | "X" | "L" | "C" | "D" | "M";

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const SUB_MAP: { [key in RomanSymbol]: RomanSymbol[] | null } = {
  C: ["D", "M"],
  D: null,
  I: ["V", "X"],
  L: null,
  M: null,
  V: null,
  X: ["L", "C"],
};

const getSubtractors = (key: RomanSymbol) => SUB_MAP[key];

const getNumeralValue = (s: RomanSymbol) => {
  let val = 0;
  if (s === "I") {
    val = 1;
  } else if (s === "V") {
    val = 5;
  } else if (s === "X") {
    val = 10;
  } else if (s === "L") {
    val = 50;
  } else if (s === "C") {
    val = 100;
  } else if (s === "D") {
    val = 500;
  } else if (s === "M") {
    val = 1000;
  }
  return val;
};

const getAdvanceIndexGroup = (s: RomanSymbol[], index: number) => {
  const firstSym = s[index];
  const secondSym = s[index + 1];
  const thirdSym = s[index + 2];
  const subtractors = getSubtractors(firstSym);
  let incIndexBy = 0;
  if (subtractors && subtractors.indexOf(secondSym) > -1) {
    if (subtractors.indexOf(thirdSym) > -1) {
      incIndexBy = 2;
    } else {
      incIndexBy = 1;
    }
  }
  return incIndexBy;
};

const calculateGroup = (
  romanArray: RomanSymbol[],
  index: number,
  indexGroup: number,
) => {
  let startingIndex = index;
  let groupValue = 0;
  let subtractorValue = 0;
  for (let i = 0; i < indexGroup; i++) {
    const shifted = romanArray[startingIndex++];
    subtractorValue += getNumeralValue(shifted);
  }
  const shiftedWholeNumber = romanArray[startingIndex++];
  if (shiftedWholeNumber) {
    groupValue += getNumeralValue(shiftedWholeNumber) - subtractorValue;
  }
  return groupValue;
};

const romanToInt = (s: string) => {
  const romans: RomanSymbol[] = s.split("") as RomanSymbol[];
  let total = 0;
  let index = 0;
  while (index < romans.length) {
    const groupCount = getAdvanceIndexGroup(romans, index);
    const groupValue = calculateGroup(romans, index, groupCount);
    index += groupCount; // subtractors
    index += 1; // whole
    total += groupValue;
  }
  return total;
};
export { romanToInt };
