class Solution {
  /**
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    let virtualHead = { next: head };
    let target = virtualHead;
    let advanced = virtualHead;
    for (let i = 0; i < n; i++) {
      advanced = advanced.next;
    }
    while (advanced.next) {
      target = target.next;
      advanced = advanced.next;
    }
    target.next = target.next?.next;
    return virtualHead.next;
  }
}