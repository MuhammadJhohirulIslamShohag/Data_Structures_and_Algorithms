/*
  Count Occurrences in Sorted Array
*/

// --- Brute Force Approach: O(n) Time Complexity ---

/**
 * Iterates through the entire array to count how many times the target appears.
 */
function countOccurrenceBrute(arr, target) {
    let count = 0; // Initialize counter to zero

    // Traverse every element in the array
    for(let i = 0; i < arr.length; i++){
        // Check if current element matches the target
        if(arr[i] === target){
            count++; // Increment count when a match is found
        }
    }
    return count; // Return total tally
}

console.log(countOccurrenceBrute([3, 4, 13, 13, 13, 20, 40], 13)); // Output: 3

// --- Optimal Approaches: O(log n) Time Complexity ---

/**
 * Uses Binary Search to find the rightmost index of the target.
 */
function lastOccurrenceOptimal(arr, target) {
    let lastIndex = -1; // Default to -1 if target is not found
    let low = 0;
    let high = arr.length - 1;

    while (low <= high){
        const mid = Math.floor((low + high) / 2); // Calculate middle index

        if(arr[mid] === target){
            lastIndex = mid; // Potential match found; record it
            low = mid + 1;   // Shift 'low' right to see if there's a later occurrence
        } else if (arr[mid] > target){
            high = mid - 1;  // Target is in the left half
        } else {
            low = mid + 1;   // Target is in the right half
        }
    }
    return lastIndex;
}

/**
 * Uses Binary Search to find the leftmost index of the target.
 */
function firstOccurrenceOptimal(arr, target) {
    let firstIndex = -1; // Default to -1 if target is not found
    let low = 0;
    let high = arr.length - 1;

    while (low <= high){
        const mid = Math.floor((low + high) / 2); // Calculate middle index

        if(arr[mid] === target){
            firstIndex = mid; // Potential match found; record it
            high = mid - 1;   // Shift 'high' left to see if there's an earlier occurrence
        } else if(arr[mid] > target){
            high = mid - 1;   // Target is in the left half
        } else {
            low = mid + 1;    // Target is in the right half
        }
    }
    return firstIndex;
}

/**
 * Calculates total occurrences by finding the boundaries of the target range.
 * Formula: (Last Index - First Index) + 1
 */
function countOccurrenceOptimal(arr, target) {
   const first = firstOccurrenceOptimal(arr, target);
   
   // If the target doesn't exist, we can return 0 immediately
   if(first === -1) return 0;
   
   const last = lastOccurrenceOptimal(arr, target);
   
   // The number of elements in a range [first, last] is (last - first + 1)
   return last - first + 1;
}

console.log(countOccurrenceOptimal([3, 4, 13, 13, 13, 20, 40], 13)); // Output: 3
