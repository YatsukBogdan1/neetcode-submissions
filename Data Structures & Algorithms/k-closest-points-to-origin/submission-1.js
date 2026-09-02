class MinHeap {
  constructor() {
    this.heap = [];
  }

  top() {
    return this.heap[0];
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(p) {
    const d = Math.sqrt(Math.pow(p[0], 2) + Math.pow(p[1], 2));
    this.heap.push([d, p]);
    let i = this.heap.length - 1;
    while (this.heap[i]?.[0] < this.heap[Math.floor((i - 1) / 2)]?.[0]) {
      const parent = Math.floor((i - 1) / 2);
      const tmp = this.heap[parent];
      this.heap[parent] = this.heap[i];
      this.heap[i] = tmp;
      i = parent;
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
      if (this.heap[leftChild]?.[0] < this.heap[indexToSwap]?.[0]) {
        indexToSwap = leftChild;
      }
      if (this.heap[rightChild]?.[0] < this.heap[indexToSwap]?.[0]) {
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

class Solution {
  /**
   * @param {number[][]} points
   * @param {number} k
   * @return {number[][]}
   */
  kClosest(points, k) {
    const minHeap = new MinHeap(k);
    for (const point of points) {
      minHeap.add(point);
    }
    const res = []
    for (let i = 0; i < k; i++) {
        res.push(minHeap.popTop()[1])
    }
    return res;
  }
}