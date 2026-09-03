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
  kValue = -1;
  found = false;
  visited = 0;
  k = -1;
  dfs(root) {
    if (!root) return -1;
    if (root.left && !this.found) {
      this.dfs(root.left);
    }
    this.visited++;
    if (this.visited === this.k) {
      this.found = true;
      this.kValue = root.val;
    }
    if (root.right && !this.found) {
      this.dfs(root.right);
    }
  }
  /**
   * @param {TreeNode|null} root
   * @param {number} k
   * @return {number}
   */
  kthSmallest(root, k) {
    this.k = k;
    this.dfs(root);
    return this.kValue;
  }
}