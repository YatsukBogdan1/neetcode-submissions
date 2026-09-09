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
  sameTreeConfirmed = false;
  isSameTree(p, q) {
    if (p == null && q == null) return true;
    if (
      (p == null && q != null) ||
      (p != null && q == null) ||
      p?.val !== q?.val
    )
      return false;
    return (
      true &&
      this.isSameTree(p?.left, q?.left) &&
      this.isSameTree(p?.right, q?.right)
    );
  }
  dfs(r1, r2) {
    if (r1.val === r2.val) {
      const sameTree = this.isSameTree(r1, r2);
      if (sameTree) {
        this.sameTreeConfirmed = true;
        return;
      }
    }
    if (r1.left) {
      this.dfs(r1.left, r2);
    }
    if (r1.right) {
      this.dfs(r1.right, r2);
    }
  }
  /**
   * @param {TreeNode|null} root
   * @param {TreeNode|null} subRoot
   * @return {boolean}
   */
  isSubtree(root, subRoot) {
    this.dfs(root, subRoot);
    return this.sameTreeConfirmed;
  }
}