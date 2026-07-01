
/* First and Last Occurrence in a Sorted Array 
  
  Note: Optimal solutions use Binary Search to achieve O(log n) time complexity, 
  which is significantly faster than the O(n) linear search approach for large datasets.
*/

// --- Brute Force Approaches: O(n) Time Complexity ---

/**
 * Iterates backwards through the array to find the last index of the target.
 */
function lastOccurrenceBrute(arr, target) {
    let n = arr.length;
    let lastIndex = -1;

    for(let i = n - 1; i >= 0; i--){
        if(arr[i] == target){
            // Record the index when found
            lastIndex = i;
            /* Optimization: Since we are iterating backwards, the first 
               match we encounter is guaranteed to be the last occurrence. */
            break; 
        }
    }
    return lastIndex;
}

console.log(lastOccurrenceBrute([3, 4, 13, 13, 13, 20, 40], 13)); // Output: 4

/**
 * Iterates forwards through the array to find the first index of the target.
 */
function firstOccurrenceBrute(arr, target) {
    let n = arr.length;
    let firstIndex = -1;

    for(let i = 0; i < n; i++){
        if(arr[i] == target){
            // Record the index when found
            firstIndex = i;
            /* Optimization: Since we are iterating forwards, the first 
               match we encounter is the very first occurrence. */
            break; 
        }
    }
    return firstIndex;
}

console.log(firstOccurrenceBrute([3, 4, 13, 13, 13, 20, 40], 13)); // Output: 2

// --- Optimal Approaches: O(log n) Time Complexity ---

/**
 * Finds the last occurrence by continuing to search the right half 
 * even after finding the target.
 */
function lastOccurrenceOptimal(arr, target) {
    let n = arr.length;
    let lastIndex = -1;
    let high = n - 1;
    let low = 0;

    while (low <= high){
        const mid = Math.floor((low + high) / 2);
        
        if(arr[mid] === target){
            // Store the index, but don't stop here
            lastIndex = mid;
            /* To find the *last* occurrence, we shrink our search space 
               to the right side of the current middle index. */
            low = mid + 1; 
        } else if (arr[mid] > target){
            // Target must be in the left half
            high = mid - 1;
        } else {
            // Target must be in the right half
            low = mid + 1;
        }
    }

    return lastIndex;
}

console.log(lastOccurrenceOptimal([3, 4, 13, 13, 13, 20, 40], 13)); // Output: 4

/**
 * Finds the first occurrence by continuing to search the left half 
 * even after finding the target.
 */
function firstOccurrenceOptimal(arr, target) {
    let n = arr.length;
    let firstIndex = -1;
    let high = n - 1;
    let low = 0;

    while (low <= high){
        const mid = Math.floor((low + high) / 2);
        
        if(arr[mid] === target){
            // Store the index, but don't stop here
            firstIndex = mid;
            /* To find the *first* occurrence, we shrink our search space 
               to the left side of the current middle index. */
            high = mid - 1;
        } else if(arr[mid] > target){
            // Target must be in the left half
            high = mid - 1;
        } else {
            // Target must be in the right half
            low = mid + 1;
        }
    }

    return firstIndex;
}

console.log(firstOccurrenceOptimal([3, 4, 13, 13, 13, 20, 40], 13)); // Output: 2

