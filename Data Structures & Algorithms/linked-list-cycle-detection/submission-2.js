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
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head?.next
        let fast = head?.next?.next
        while(slow && fast) {
            if (slow === fast) {
                return true
            }
            slow = slow?.next
            fast = fast?.next?.next
        }
        return false
    }
}
