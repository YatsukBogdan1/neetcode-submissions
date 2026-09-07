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
  mergeKListsRecursively(lists, lo, hi) {
    let slice = hi - lo;
    if (slice === 0) {
      return null;
    }
    if (slice === 1) {
      return lists[lo];
    }
    if (slice === 2) {
      return this.mergeTwoLists(lists[lo], lists[lo + 1]);
    }
    let mi = Math.floor((hi - lo) / 2) + lo;
    return this.mergeTwoLists(
      this.mergeKListsRecursively(lists, lo, mi),
      this.mergeKListsRecursively(lists, mi, hi),
    );
  }
  /**
   * @param {Array<ListNode>} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {
    return this.mergeKListsRecursively(lists, 0, lists.length);
  }
}