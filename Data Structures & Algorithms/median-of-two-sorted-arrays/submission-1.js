class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  findMedianSortedArrays(nums1, nums2) {
    const [small, big] =
      nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];
    const fullLength = nums1.length + nums2.length;
    const half = Math.floor(fullLength / 2);
    let i = Math.floor(big.length / 2);
    let j = half - i;
    const leftOf = (arr, cut) => (cut <= 0 ? -Infinity : arr[cut - 1]);
    const rightOf = (arr, cut) => (cut >= arr.length ? Infinity : arr[cut]);
    while (true) {
      let smallLo = leftOf(small, j);
      let bigLo = leftOf(big, i);
      let smallHi = rightOf(small, j);
      let bigHi = rightOf(big, i);
      // console.log(smallLo, bigLo, smallHi, bigHi);
      if (smallLo <= bigHi && bigLo <= smallHi) {
        break;
      }
      if (smallLo > bigHi) {
        i++;
      }
      if (bigLo > smallHi) {
        i--;
      }
      j = half - i;
    }
    let minRight = Math.min(rightOf(small, j), rightOf(big, i));
    let maxLeft = Math.max(leftOf(small, j), leftOf(big, i));
    if (fullLength % 2 === 0) {
      return (minRight + maxLeft) / 2;
    }
    return minRight;
  }
}
