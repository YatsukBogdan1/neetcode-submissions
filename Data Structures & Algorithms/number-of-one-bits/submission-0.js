class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count = 0
        for (let i =0;i < 32; i++) {
            const mask = 1 << i
            if ((n & mask) !== 0) {
        count++
      }
        }
        return count
    }
}
