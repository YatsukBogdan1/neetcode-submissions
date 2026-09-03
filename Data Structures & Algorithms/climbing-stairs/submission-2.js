class Solution {
  /**
   * @param {number} n
   * @return {number}
   */
  climbStairs(n) {
    const choose = (t, r) => {
      let res = 1;
      for (let i = res; i <= r; i++) {
        res *= (t - i + 1) / i;
      }
      return res;
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