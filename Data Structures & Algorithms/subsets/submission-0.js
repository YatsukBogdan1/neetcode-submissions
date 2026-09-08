class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
    const res = [];
    const stack = [];
    const backtrack = (nums, lo) => {
      if (lo === nums.length + 1) {
        res.push([]);
        return;
      }
      res.push([...stack]);
      for (let i = lo; i < nums.length; i++) {
        stack.push(nums[i]);
        backtrack(nums, i + 1);
        stack.pop();
      }
    };
    backtrack(nums, 0);
    return res;
  }
}
