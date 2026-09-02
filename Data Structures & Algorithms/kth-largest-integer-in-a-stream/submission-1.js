class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.heap = [];
    this.k = k;
    for (const num of nums) {
      this.add(num);
    }
  }

  top() {
    return this.heap[0];
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (this.heap[i] < this.heap[Math.floor((i - 1) / 2)]) {
      const parent = Math.floor((i - 1) / 2);
      const tmp = this.heap[parent];
      this.heap[parent] = this.heap[i];
      this.heap[i] = tmp;
      i = parent;
    }
    if (this.heap.length - 1 === this.k) {
      this.popTop();
    }
    return this.top();
  }

  popTop() {
    if (this.heap.length === 0) {
      return this.heap.pop();
    }
    const top = this.top();
    this.heap[0] = this.heap.pop();
    let i = 0;
    while (true) {
      let leftChild = i * 2 + 1;
      let rightChild = i * 2 + 2;
      let indexToSwap = i;
      if (this.heap[leftChild] < this.heap[indexToSwap]) {
        indexToSwap = leftChild;
      }
      if (this.heap[rightChild] < this.heap[indexToSwap]) {
        indexToSwap = rightChild;
      }
      if (indexToSwap === i) {
        break;
      }
      const tmp = this.heap[indexToSwap];
      this.heap[indexToSwap] = this.heap[i];
      this.heap[i] = tmp;
      i = indexToSwap;
    }
    return top;
  }
}