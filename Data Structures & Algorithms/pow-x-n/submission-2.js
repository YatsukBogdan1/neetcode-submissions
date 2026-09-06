class Solution {
  /**
   * @param {number} x
   * @param {number} n
   * @return {number}
   */
  myPow(x, n) {
    let leftN = Math.abs(n);
    let res = 1;
    while (leftN > 0) {
      let tmpRes = x;
      let power = 1;
      while (true) {
        const newPower = power * 2;
        if (newPower > leftN) {
          leftN -= power;
          break;
        }
        power = newPower;
        tmpRes *= tmpRes;
      }
      res *= tmpRes;
    }
    return n > 0 ? res : 1 / res;
  }
}
