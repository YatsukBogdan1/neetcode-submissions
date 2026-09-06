class Solution {
  /**
   * @param {number} n
   * @return {number}
   */
  reverseBits(n) {
    let res = 0;
    for (let i = 31; i >= 0; i--) {
      if (((n >>> i) & 1) === 1) {
        res |= 1 << (31 - i);
      }
    }
    return res >>> 0;
  }
}