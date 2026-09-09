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
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    preorderPointer = 0;
  rebuild(preorder, inorder, lo, hi) {
    if (this.preorderPointer > preorder.length) {
      return;
    }
    const node = new TreeNode(preorder[this.preorderPointer]);
    const index = inorder.indexOf(preorder[this.preorderPointer]);
    this.preorderPointer++;
    if (index > lo) {
      node.left = this.rebuild(preorder, inorder, lo, index);
    }
    if (index + 1 < hi) {
      node.right = this.rebuild(preorder, inorder, index + 1, hi);
    }
    return node;
  }
  /**
   * @param {number[]} preorder
   * @param {number[]} inorder
   * @return {TreeNode|null}
   */
  buildTree(preorder, inorder) {
    const root = this.rebuild(preorder, inorder, 0, inorder.length);
    return root;
  }
}
