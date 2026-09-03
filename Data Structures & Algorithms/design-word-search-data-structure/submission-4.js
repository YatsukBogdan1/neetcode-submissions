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

class WordDictionary {
  constructor() {
    this.root = new Tree();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
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
    let nodes = [this.root];
    for (const ch of word) {
      if (ch === ".") {
        nodes = nodes.reduce((acc, n) => [...acc, ...n.childs.values()], []);
        continue;
      }
      // console.log(nodes);

      const filteredNodes = nodes.filter((n) => n.hasChild(ch));
      // console.log("filteredNodes", filteredNodes);
      if (filteredNodes.length === 0) {
        return false;
      }
      // console.log("ch", ch);
      // console.log(nodes);
      // console.log(nodes.map((n) => n.getChild(ch)));
      nodes = filteredNodes.map((n) => n.getChild(ch));
    }
    return nodes.filter((n) => n.finish).length > 0;
  }
}