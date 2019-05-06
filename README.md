# My LeetCode solutions written in TS + Mocha

## How to use

1. Checkout the `package.json` scripts section for various commands.

1. Generated files would be on `dist` folder.

1. Test files should be have `.test.ts` extensions

1. (Optional) Use extension [LeetCode by ShengChen](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-leetcode)

1. Included are debug run configurations for TS file `Current TS File` or Mocha Test file `Current TS Mocha File`

## Why

Practice TS skills and write in a TDD manner.

## Would it optimize the runtime performance of the code

It will not. The `build` would compile the file to es6. There will be also additional code that will be generated due to the way TS transpiles the code to JS.