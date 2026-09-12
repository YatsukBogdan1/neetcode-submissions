/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    sumWithLeftover(l1, l2, l = 0) {
    if (l1 == null && l2 == null) {
      return [l, 0];
    }
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + l;
    return sum >= 10 ? [sum - 10, 1] : [sum, 0];
  }
  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    if (l1.val === 0) {
      return l2
    }
    if (l2.val === 0) {
      return l1
    }
    let currL1 = l1;
    let currL2 = l2;
    let [sum, leftover] = this.sumWithLeftover(currL1, currL2, 0);
    const headPointer = { next: null };
    let curr = null;
    while (sum + leftover > 0) {
      if (headPointer.next == null) {
        headPointer.next = new ListNode(sum);
        curr = headPointer.next;
      } else {
        curr.next = new ListNode(sum);
        curr = curr.next;
      }
      currL1 = currL1?.next;
      currL2 = currL2?.next;
      [sum, leftover] = this.sumWithLeftover(currL1, currL2, leftover);
    }
    return headPointer.next;
  }
}
