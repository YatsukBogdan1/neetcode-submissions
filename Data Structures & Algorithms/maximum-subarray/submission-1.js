class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let sum = nums[0]
        let maxSum=sum
        for (let i=1; i<nums.length;i++){
    sum=Math.max(sum+nums[i], nums[i])
if (sum>maxSum){
    maxSum=sum
}
        }
        return maxSum
    }

}
