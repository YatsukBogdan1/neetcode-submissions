class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const visited = new Set([n])
        let currNum = n
        while(true) {
            const digits = String(currNum).split('').map(d => Number(d))
            const sum = digits.reduce((s, d) => s + d*d, 0)
            if (sum === 1) {
                return true
            }
            if (visited.has(sum)) {
                return false
            }
            visited.add(sum)
            currNum = sum
        }
    }
}
