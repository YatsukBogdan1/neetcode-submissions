class Solution {
  mergeTwoLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    let head = null;
    let curr = null;
    const pointers = [list1, list2];
    while (true) {
      if (pointers[0] == null) {
        curr.next = pointers[1];
        break;
      }
      if (pointers[1] == null) {
        curr.next = pointers[0];
        break;
      }
      const mpI = pointers[0].val < pointers[1].val ? 0 : 1;
      if (curr == null && head == null) {
        head = pointers[mpI];
        curr = pointers[mpI];
      } else {
        curr.next = pointers[mpI];
        curr = pointers[mpI];
      }
      pointers[mpI] = pointers[mpI].next;
    }
    return head;
  }
  /**
   * @param {Array<ListNode>} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {
    if (lists.length === 0) {
      return null;
    }
    if (lists.length === 1) {
      return lists[0];
    }
    let lastHead = this.mergeTwoLists(lists[0], lists[1]);
    if (lists.length === 2) {
      return lastHead;
    }
    for (let i = 2; i < lists.length; i++) {
      const newHead = this.mergeTwoLists(lastHead, lists[i]);
      lastHead = newHead;
    }
    return lastHead;
  }
}