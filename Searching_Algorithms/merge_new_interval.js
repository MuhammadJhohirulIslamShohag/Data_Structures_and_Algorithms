/*
  Merge New Interval
*/

/**
 * Inserts a new interval into a list of sorted, non-overlapping intervals
 * and merges any overlapping intervals.
 * 
 * @param {number[][]} intervals - Array of sorted non-overlapping intervals [start, end]
 * @param {number[]} newInterval - The new interval [start, end] to insert
 * @returns {number[][]} - Updated list of intervals after insertion and merging
 * 
 * @timeComplexity O(n) - Single pass through the array of length n
 * @spaceComplexity O(n) - Output array stores at most n + 1 intervals
 */
const mergeNewInterval = (intervals, newInterval) => {
    let result = [];
    let i = 0;
    let nl = intervals.length;
    
    // Step 1: Add all intervals that end BEFORE the new interval starts.
    // Since these appear entirely to the left, there is no overlap.
    while (i < nl && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    } 
    
    // Step 2: Merge all overlapping intervals with the new interval.
    // An overlap occurs as long as the current interval starts BEFORE or ON the new interval's end.
    while (i < nl && intervals[i][0] <= newInterval[1]) {
        // Expand the new interval to cover the range of both overlapping intervals
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    
    // Push the newly merged interval into the result
    result.push(newInterval);
    
    // Step 3: Add all remaining intervals that start AFTER the merged interval ends.
    // Since these appear entirely to the right, there is no overlap.
    while (i < nl) {
        result.push(intervals[i]);
        i++;
    } 
    
    return result;
};

// Test example
// Expected Output: [ [ 1, 2 ], [ 3, 5 ], [ 6, 16 ] ]
console.log(mergeNewInterval([[1, 2], [3, 5], [6, 10], [11, 12], [13, 16]], [8, 15]));


