class Tree {
  constructor(key = null) {
    this.key = key;
    this.childs = new Map();
    this.finish = false;
  }

  getChild(key) {
    return this.childs.get(key);
  }

  hasChild(key) {
    return this.childs.has(key);
  }

  setChild(key) {
    this.childs.set(key, new Tree(key));
  }
}

class PrefixTree {
  constructor() {
    this.root = new Tree();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.hasChild(ch)) {
        node.setChild(ch);
      }
      node = node.getChild(ch);
    }
    node.finish = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.root;
    for (const ch of word) {
      console.log(ch);
      if (!node.hasChild(ch)) {
        return false;
      }
      node = node.getChild(ch);
    }
    return node.finish;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.hasChild(ch)) {
        return false;
      }
      node = node.getChild(ch);
    }
    return true;
  }
}