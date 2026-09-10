class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        return nums.sort((a,b) => b-a)[k -1]
    }
}
