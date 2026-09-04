class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let leading = 1
        for (let i = digits.length - 1; i>=0; i--) {
            const num = digits[i] + leading
            if (num === digits[i]) {
                break
            }
            if (num === 10) {
                digits[i] = 0
                if (i === 0) {
                    digits.unshift(1)
                    break
                }
                leading = 1
            } else {
                digits[i] = num
                leading = 0
            }
        }
        return digits
    }
}
