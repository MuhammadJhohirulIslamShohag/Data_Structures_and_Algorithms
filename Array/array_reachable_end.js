// Greedy Approach
// Time Complexity: O(n)
// Space Complexity: O(1)
//
// Keep track of the farthest index that can be reached.
// If the current index is beyond the farthest reachable index,
// the end of the array cannot be reached.

const arrayReachableEnd = (numbers) => {

    const n = numbers.length;

    // Farthest index we can reach so far
    let maxReach = 0;

    // Traverse the array
    for (let i = 0; i < n; i++) {

        // If the current index is unreachable,
        // we cannot move any further.
        if (i > maxReach) {
            return false;
        }

        // Update the farthest reachable index
        maxReach = Math.max(maxReach, i + numbers[i]);

        // If we can reach or pass the last index,
        // return true immediately.
        if (maxReach >= n - 1) {
            return true;
        }
    }

    // If the loop finishes without reaching the end,
    // the last index is unreachable.
    return false;
};

console.log(arrayReachableEnd([4, 1, 0, 0, 2, 3])); // true
console.log(arrayReachableEnd([1, 0, 0, 0])); // false