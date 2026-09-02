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
  maxDiameter = 0;
  dfs(root) {
    if (!root) return 0;
    let diamterLeft = 0;
    let diameterRight = 0;
    if (root.left) {
      diamterLeft += this.dfs(root.left) + 1;
    }
    if (root.right) {
      diameterRight += this.dfs(root.right) + 1;
    }
    let currMaxDiameter = diamterLeft + diameterRight;
    if (this.maxDiameter < currMaxDiameter) {
      this.maxDiameter = currMaxDiameter;
    }
    return Math.max(diamterLeft, diameterRight);
  }
  /**
   * @param {TreeNode|null} root
   * @return {number}
   */
  diameterOfBinaryTree(root) {
    this.dfs(root);
    return this.maxDiameter;
  }
}
