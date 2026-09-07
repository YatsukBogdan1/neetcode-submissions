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
    let lo = 0,
      hi = small.length;
    let i = Math.floor((hi - lo) / 2) + lo;
    let j = half - i;
    const leftOf = (arr, cut) => (cut <= 0 ? -Infinity : arr[cut - 1]);
    const rightOf = (arr, cut) => (cut >= arr.length ? Infinity : arr[cut]);
    while (true) {
      i = Math.floor((hi - lo) / 2) + lo;
      j = half - i;
      let smallLo = leftOf(small, i);
      let bigLo = leftOf(big, j);
      let smallHi = rightOf(small, i);
      let bigHi = rightOf(big, j);
      if (smallLo <= bigHi && bigLo <= smallHi) {
        break;
      }
      if (smallLo > bigHi) {
        hi = i;
      }
      if (bigLo > smallHi) {
        lo = i + 1;
      }
    }
    let minRight = Math.min(rightOf(small, i), rightOf(big, j));
    let maxLeft = Math.max(leftOf(small, i), leftOf(big, j));
    if (fullLength % 2 === 0) {
      return (minRight + maxLeft) / 2;
    }
    return minRight;
  }
}