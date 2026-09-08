class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[][]}
   */
  combinationSum(nums, target) {
    const res = [];
    const stack = [];
    const backtrack = (nums, target, lo) => {
      if (target === 0) {
        res.push([...stack]);
        return;
      }
      for (let i = lo; i < nums.length; i++) {
        const num = nums[i];
        if (target - num < 0) {
          continue;
        }
        stack.push(num);
        backtrack(nums, target - num, i);
        stack.pop();
      }
    };
    backtrack(nums, target, 0);
    return res;
  }
}