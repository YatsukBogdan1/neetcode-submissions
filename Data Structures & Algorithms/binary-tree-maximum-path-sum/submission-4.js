/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  maxSum = -Infinity;
  dfs(root) {
    let lSum = 0,
      rSum = 0;
    if (root.left != null) {
      lSum = this.dfs(root.left);
    }
    if (root.right != null) {
      rSum = this.dfs(root.right);
    }
    const currMaxSum = Math.max(
        root.val,
      lSum + root.val,
      rSum + root.val,
      rSum + lSum + root.val,
    );
    if (currMaxSum > this.maxSum) {
      this.maxSum = currMaxSum;
    }
    return Math.max(lSum + root.val, rSum + root.val, root.val);
  }
  /**
   * @param {TreeNode|null} root
   * @return {number}
   */
  maxPathSum(root) {
    this.dfs(root);
    return this.maxSum;
  }
}
