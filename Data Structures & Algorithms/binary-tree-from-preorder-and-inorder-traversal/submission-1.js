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
  preorderPointer = 0;
  inOrderIndeciesMap = new Map();
  rebuild(preorder, inorder, lo, hi) {
    if (this.preorderPointer > preorder.length) {
      return;
    }
    const node = new TreeNode(preorder[this.preorderPointer]);
    const index = this.inOrderIndeciesMap.get(preorder[this.preorderPointer]);
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
    for (let i = 0; i < inorder.length; i++) {
      this.inOrderIndeciesMap.set(inorder[i], i);
    }
    const root = this.rebuild(preorder, inorder, 0, inorder.length);
    return root;
  }
}
