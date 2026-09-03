class Heap {
  constructor(shouldBeAbove) {
    this.data = [];
    this.above = shouldBeAbove; // true if a belongs above b
  }
  size() { return this.data.length; }
  peek() { return this.data[0]; }

  push(val) {
    this.data.push(val);
    this._siftUp(this.data.length - 1);
  }

  pop() {
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = last;
      this._siftDown(0);
    }
    return top;
  }

  _siftUp(i) {
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.above(this.data[i], this.data[parent])) {
        [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
        i = parent;
      } else break;
    }
  }

  _siftDown(i) {
    const n = this.data.length;
    while (true) {
      let best = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < n && this.above(this.data[l], this.data[best])) best = l;
      if (r < n && this.above(this.data[r], this.data[best])) best = r;
      if (best === i) break;
      [this.data[i], this.data[best]] = [this.data[best], this.data[i]];
      i = best;
    }
  }
}

class MedianFinder {
  constructor() {
    this.small = new Heap((a, b) => a > b); // max-heap: lower half
    this.large = new Heap((a, b) => a < b); // min-heap: upper half
  }

  addNum(num) {
    this.small.push(num);                 // 1. add to lower half
    this.large.push(this.small.pop());    // 2. launder top over to upper half
    if (this.large.size() > this.small.size()) {
      this.small.push(this.large.pop());  // 3. rebalance so small >= large
    }
  }

  findMedian() {
    if (this.small.size() > this.large.size()) {
      return this.small.peek();           // odd count → the extra element
    }
    return (this.small.peek() + this.large.peek()) / 2; // even → average of tops
  }
}