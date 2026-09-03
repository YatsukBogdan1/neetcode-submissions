class Solution {
  /**
   * @param {number} n
   * @return {number}
   */
  climbStairs(n) {
    const factorialsCache = {};
    const getFactorialWithCache = (n) => {
      if (factorialsCache[n] != null) {
        return factorialsCache[n];
      }
      if (n === 0) return 1;
      factorialsCache[n] = getFactorialWithCache(n - 1) * n;
      return factorialsCache[n];
    };
    const choose = (n, r) => {
      const nF = getFactorialWithCache(n);
      const rF = getFactorialWithCache(r);
      const diff = getFactorialWithCache(n - r);
      return nF / (rF * diff);
    };
    let ones = n;
    let twos = 0;
    let ways = 0;
    while (ones >= 0) {
      ways += choose(ones + twos, twos);
      ones -= 2;
      twos++;
    }
    return ways;
  }
}