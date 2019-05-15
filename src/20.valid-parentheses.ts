type OpenParenSymbols = "(" | "[" | "{";
type CloseParenSymbols = ")" | "]" | "}";
type ParenSymbols = OpenParenSymbols & CloseParenSymbols;

const OPEN: { [key in OpenParenSymbols]: CloseParenSymbols } = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const CLOSE: { [key in CloseParenSymbols]: OpenParenSymbols } = {
  ")": "(",
  "]": "[",
  "}": "{",
};

const isValid = (s: string) => {
  const sArray = s.split("") as ParenSymbols[];
  const process: ParenSymbols[] = [];
  let i = 0;
  while (sArray.length > i) {
    const lastVal: ParenSymbols = process[process.length - 1];
    const currentElem = sArray[i++];

    if (lastVal && OPEN[lastVal] === currentElem) {
      process.pop();
    } else if (currentElem) {
      process.push(currentElem);
      if (CLOSE[currentElem]) {
        break; // Closing not intended to be here
      }
    }
  }
  return process.length === 0;
};

export { isValid };
