// ==========================================================
// Find Minimum in a Rotated Sorted Array
// ==========================================================
//
// Problem:
// Given a sorted array that has been rotated, return the
// smallest element.
//
// Example:
// Input:  [4, 5, 6, 7, 0, 1, 2]
// Output: 0
//
// Below are two approaches:
// 1. Brute Force  -> O(n) Time
// 2. Binary Search (Optimal) -> O(log n) Time
// ==========================================================



// ----------------------------------------------------------
// Approach 1: Brute Force
// Time Complexity : O(n)
// Space Complexity: O(1)
//
// Traverse the entire array while keeping track of the
// smallest element seen so far.
// ----------------------------------------------------------

const findMinBrute = (arr) => {

    // Assume the first element is the minimum.
    let min = arr[0];

    // Check every element in the array.
    for (let i = 0; i < arr.length; i++) {

        // Update minimum whenever a smaller value is found.
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    // Return the smallest element.
    return min;
};

console.log(findMinBrute([4, 5, 6, 7, 0, 1, 2]));



// ----------------------------------------------------------
// Approach 2: Binary Search (Optimal)
//
// Time Complexity : O(log n)
// Space Complexity: O(1)
//
// Observation:
// In a rotated sorted array, one half is always sorted.
//
// If arr[mid] > arr[high]:
//    -> Minimum lies in the right half.
//
// Otherwise:
//    -> Minimum lies in the left half (including mid).
// ----------------------------------------------------------

const findMinOptimal = (arr) => {

    // Initialize binary search boundaries.
    let low = 0;
    let high = arr.length - 1;

    // Continue until both pointers meet.
    while (low < high) {

        // Calculate the middle index.
        let mid = Math.floor((low + high) / 2);

        // If middle element is greater than the last element,
        // the minimum must be in the right half.
        if (arr[mid] > arr[high]) {
            low = mid + 1;
        }

        // Otherwise, the minimum is at mid or to its left.
        else {
            high = mid;
        }
    }

    // low and high converge at the minimum element.
    return arr[low];
};

console.log(findMinOptimal([4, 5, 6, 7, 0, 1, 2]));