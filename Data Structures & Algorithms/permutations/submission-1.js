class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
    const res = [];
    let curr = [];
    const path = nums.map((_) => false);
    const backtrack = (nums) => {
      if (curr.length === nums.length) {
        res.push([...curr]);
        return;
      }
      for (let i = 0; i < nums.length; i++) {
        if (path[i] === true) {
          continue;
        }
        path[i] = true;
        curr.push(nums[i]);
        backtrack(nums);
        path[i] = false;
        curr.pop();
      }
    };
    backtrack(nums, 0);
    return res;
  }
}
