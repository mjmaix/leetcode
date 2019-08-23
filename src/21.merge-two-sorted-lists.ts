export interface ListNode {
  val?: number | null;
  next?: ListNode | null;
}

export class ListNodeHelper {
  public static mergeTwo = (l1: ListNode, l2: ListNode) => {
    let vals: number[] = [];
    vals = [...vals, ...ListNodeHelper.toArray(l1)];
    vals = [...vals, ...ListNodeHelper.toArray(l2)];

    vals.sort((a: number, b: number) => a - b);

    return ListNodeHelper.toListNode(vals);
  }

  private static toListNode = (arrOrig: number[]) => {
    const arr = [...arrOrig];
    let last = arr.pop();
    if (typeof last !== "number") {
      return { val: null, next: null };
    }

    let listNode: ListNode = { val: last, next: null };
    while (arr.length > 0) {
      last = arr.pop();
      if (typeof last === "number") {
        listNode = { val: last, next: listNode };
      }
    }

    return listNode;
  }

  private static toArray = (l: ListNode) => {
    const vals: number[] = [];
    let nl: ListNode | null = l;
    while (nl) {
      if (typeof nl.val === "number") {
        vals.push(nl.val);
      }
      if (nl.next) {
        nl = nl.next;
      } else {
        break;
      }
    }

    return vals;
  }
}

const mergeTwoLists = (l1: ListNode, l2: ListNode) => {
  return ListNodeHelper.mergeTwo(l1, l2) as ListNode;
};
export { mergeTwoLists };
