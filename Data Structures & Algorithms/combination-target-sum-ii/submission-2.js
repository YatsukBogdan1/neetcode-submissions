class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
    const res = [];
    const stack = [];
    const sorted = candidates.sort((a, b) => a - b);
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
        if (num === nums[i - 1] && i !== lo) {
          continue;
        }
        stack.push(num);
        backtrack(nums, target - num, i + 1);
        stack.pop();
      }
    };
    backtrack(sorted, target, 0);
    return res;
  }
}
