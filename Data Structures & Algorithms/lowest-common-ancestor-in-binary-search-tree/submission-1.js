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
  lowestCommonAncestor(root, p, q) {
    let lca = root;
    const [minNode, maxNode] = p.val < q.val ? [p, q] : [q, p];
    while (true) {
      if (lca === p) {
        return p;
      }
      if (lca === q) {
        return q;
      }
      if (lca.val > maxNode.val) {
        lca = lca.left;
      } else if (lca.val < minNode.val) {
        lca = lca.right;
      } else {
        return lca;
      }
    }
  }
}