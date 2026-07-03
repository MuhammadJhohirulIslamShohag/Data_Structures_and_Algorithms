// ==========================================================
// Find the Number of Rotations in a Rotated Sorted Array
// ==========================================================
//
// Problem:
// Given a sorted array that has been rotated,
// return the number of times it has been rotated.
//
// Observation:
// The rotation count is equal to the index of the
// minimum element.
//
// Example:
// Input : [4, 5, 6, 7, 0, 1, 2, 3]
// Output: 4
// ==========================================================



// ----------------------------------------------------------
// Approach 1: Brute Force
//
// Time Complexity : O(n)
// Space Complexity: O(1)
//
// Traverse the entire array to find the minimum element.
// The index of the minimum element represents the
// rotation count.
// ----------------------------------------------------------

const findRotationCountBrute = (arr) => {

    const n = arr.length;

    // Assume the first element is the minimum.
    let minValue = arr[0];
    let minIdx = 0;

    // Check every element in the array.
    for (let i = 0; i < n; i++) {

        // Update minimum value and its index.
        if (arr[i] < minValue) {
            minValue = arr[i];
            minIdx = i;
        }
    }

    return minIdx;
};

console.log(findRotationCountBrute([4, 5, 6, 7, 0, 1, 2, 3]));




// ----------------------------------------------------------
// Approach 2: Binary Search (Optimal)
//
// Time Complexity : O(log n)
// Space Complexity: O(1)
//
// Observation:
// The index of the minimum element equals the
// number of rotations.
//
// If arr[mid] > arr[high]:
//    -> Minimum lies in the right half.
//
// Otherwise:
//    -> Minimum lies in the left half (including mid).
// ----------------------------------------------------------

const findRotationCountOptimal = (arr) => {

    let low = 0;
    let high = arr.length - 1;

    while (low < high) {

        // Find the middle index.
        let mid = Math.floor((low + high) / 2);

        // Minimum is in the right half.
        if (arr[mid] > arr[high]) {
            low = mid + 1;
        }

        // Minimum is at mid or in the left half.
        else {
            high = mid;
        }
    }

    // 'low' points to the minimum element,
    // which is also the rotation count.
    return low;
};

console.log(findRotationCountOptimal([4, 5, 6, 7, 0, 1, 2, 3]));