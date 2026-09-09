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
  stack = [];
  goodNodesFound = 0;
  top() {
    return this.stack.at(-1);
  }
  push(v) {
    if (this.stack.length === 0) {
      this.stack.push(v);
      return;
    }
    if (this.top() > v) {
      return;
    }
    this.stack.push(v);
  }
  pop() {
    this.stack.pop();
  }
  dfs(root) {
    if (!root) {
      return;
    }
    if (root.val >= this.stack.at(-1) || this.stack.length === 0) {
      this.stack.push(root.val);
      this.goodNodesFound++;
    }
    if (root.left) {
      this.dfs(root.left);
    }
    if (root.right) {
      this.dfs(root.right);
    }
    if (this.stack.at(-1) === root.val) {
      this.stack.pop();
    }
  }
  /**
   * @param {TreeNode|null} root
   * @return {number}
   */
  goodNodes(root) {
    this.dfs(root);
    return this.goodNodesFound;
  }
}
