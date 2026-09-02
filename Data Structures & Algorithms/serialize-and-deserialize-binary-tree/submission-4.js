class Codec {
  /**
   * @param {TreeNode|null} root
   * @return {string}
   */
  serialize(root, level = 0) {
    if (root == null) return "";
    let str = `${level === 0 ? "l|" : ""}${level}|${root.val}`;
    if (root.left != null) {
      str += ` l|${this.serialize(root.left, level + 1)}`;
    }
    if (root.right != null) {
      str += ` r|${this.serialize(root.right, level + 1)}`;
    }
    return str;
  }

  /**
   * @param {string} data
   * @return {TreeNode|null}
   */
  deserialize(data) {
    // console.log(data);
    if (data === "") return null;
    const tokens = data.split(" ");
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
      const [side, levelStr, valueStr] = tokens[i].split("|");
      const level = Number(levelStr);
      // console.log(levelStr);
      const value = Number(valueStr);
      const newNode = new TreeNode(value);
      if (stack.length === 0) {
        stack.push([level, newNode]);
      } else {
        // console.log(stack, level);
        while (level <= stack.at(-1)[0]) {
          // console.log(stack);
          stack.pop();
        }
        const [_, parentNode] = stack.at(-1);
        if (side === "l") {
          parentNode.left = newNode;
        } else {
          parentNode.right = newNode;
        }
        stack.push([level, newNode]);
      }
    }
    while (stack.length > 1) {
      stack.pop();
    }
    return stack.at(-1)[1];
  }
}