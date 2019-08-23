import assert from "assert";
import { mergeTwoLists } from "./21.merge-two-sorted-lists";

describe("Merge Two Lists", () => {
  it("Input: 1->2->4, 1->3->4, Output: 1->1->2->3->4->4", () => {
    const expected: any = {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 4,
                next: null,
              },
            },
          },
        },
      },
    };
    const input1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
    const input2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
    const actual = mergeTwoLists(input1, input2);
    assert.deepStrictEqual(actual, expected);
  });

  it("Input: [], [], Output: []", () => {
    const expected = { val: null, next: null };
    const input1 = { val: null, next: null };
    const input2 = { val: null, next: null };
    const actual = mergeTwoLists(input1, input2);
    assert.deepStrictEqual(actual, expected);
  });

  it("Input: [], [], Output: []", () => {
    const expected = {};
    const input1 = {};
    const input2 = {};
    const actual = mergeTwoLists(input1, input2);
    assert.deepStrictEqual(actual, expected);
  });

  it("Input: [], [0], Output: [0]", () => {
    const expected = { val: 0, next: null };
    const input1 = { val: null, next: null };
    const input2 = { val: 0, next: null };
    const actual = mergeTwoLists(input1, input2);
    assert.deepStrictEqual(actual, expected);
  });
});
