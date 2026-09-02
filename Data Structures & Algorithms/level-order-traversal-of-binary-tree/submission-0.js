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
  dfs(root, arr = [], level = 0) {
    if (root == null) return;
    this.dfs(root.left, arr, level + 1);
    if (arr[level] == null) {
      arr[level] = [];
    }
    arr[level].push(root.val);
    this.dfs(root.right, arr, level + 1);
  }
  /**
   * @param {TreeNode|null} root
   * @return {number[][]}
   */
  levelOrder(root) {
    const arrs = [];
    this.dfs(root, arrs, 0);
    return arrs;
  }
}
