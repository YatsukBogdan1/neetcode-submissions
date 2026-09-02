class Solution {
  balanced = true;
  dfs(root) {
    let depthLeft = 0;
    let depthRight = 0;
    if (root?.left != null) {
      depthLeft += this.dfs(root.left) + 1;
    }
    if (root?.right != null) {
      depthRight += this.dfs(root.right) + 1;
    }
    const balanced = Math.abs(depthLeft - depthRight) <= 1;
    if (!balanced) {
      this.balanced = false;
    }
    return Math.max(depthLeft, depthRight);
  }
  /**
   * @param {TreeNode|null} root
   * @return {boolean}
   */
  isBalanced(root) {
    this.dfs(root);
    return this.balanced;
  }
}