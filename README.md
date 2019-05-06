# My LeetCode solutions written in TS + Mocha

## How to use

1. Checkout the `package.json` scripts section for various commands.

1. Generated files would be on `dist` folder. This are the files to be submitted to LeetCode

1. Test files should be have `.test.ts` extensions


## Tools

1. (Optional) Use extension [LeetCode by ShengChen](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-leetcode)

   * You'll be able to test or submit directly. Use the build files inside `dist`

1. Included are debug run configurations for TS file `Current TS File` or Mocha Test file `Current TS Mocha File`

   * You'll probably use `Current TS Mocha File` run more if you write the test scripts first.
   * LeetCode already have the test scripts on the problem description anyway

## Why

Practice TS skills and write in a TDD manner.

## Would it optimize the runtime performance of the code

It will not. The `build` would compile the file to es6. There will be also additional code that will be generated due to the way TS transpiles the code to JS.