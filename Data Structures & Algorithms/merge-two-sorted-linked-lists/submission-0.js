class Solution {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    let head = null;
    let curr = null;
    const pointers = [list1, list2];
    // let list1Pointer = list1;
    // let list2Pointer = list2;
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
}