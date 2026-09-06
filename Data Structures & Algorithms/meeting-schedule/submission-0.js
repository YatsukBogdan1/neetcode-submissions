/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if (intervals.length <= 1) return true;
        const sortedIntervals = intervals.sort((iA, iB) => iA.start - iB.start);
        for (let i = 0; i < sortedIntervals.length - 1; i++) {
        if (sortedIntervals[i].end > sortedIntervals[i + 1].start) {
            return false;
        }
        }
        return true;
    }
}
