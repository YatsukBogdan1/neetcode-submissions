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
  dfs(root, p, queue) {
    queue.push(root);
    if (root === p) {
      return true;
    }
    if (root.left) {
      const found = this.dfs(root.left, p, queue);
      if (found) {
        return true;
      }
    }
    if (root.right) {
      const found = this.dfs(root.right, p, queue);
      if (found) {
        return true;
      }
    }
    queue.pop();
    return false;
  }
  /**
   * @param {TreeNode|null} root
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {TreeNode|null}
   */
  lowestCommonAncestor(root, p, q) {
    const pQueue = [];
    const qQueue = [];
    this.dfs(root, p, pQueue);
    this.dfs(root, q, qQueue);
    let lastLowestAncestorNode = null;
    let i = 0;
    while (pQueue[i] && qQueue[i]) {
      if (pQueue[i] === qQueue[i]) {
        lastLowestAncestorNode = pQueue[i];
        i++;
      } else {
        break;
      }
    }
    return lastLowestAncestorNode;
  }
}