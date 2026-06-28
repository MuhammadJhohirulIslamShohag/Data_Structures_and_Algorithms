
/**
 * Binary Search Algorithm - Recursive Implementation
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(log n) due to recursion call stack
 * 
 * @param {Array} arr - Sorted array to search in
 * @param {*} target - Element to find
 * @returns {number} - Index of target if found, otherwise -1
 */

const binarySearch = (arr, target) => {
    /**
     * Inner recursive function to perform binary search
     * 
     * @param {number} high - Upper bound index
     * @param {number} low - Lower bound index
     * @returns {number} - Found index or -1
     */
    const recursiveBinarySearch = (high, low) => {
        // Base Case: If search space is empty, element doesn't exist

        if (low > high) {
            return -1; // Element not found
        }
        
        // Calculate middle index to divide search space
        const mid = Math.floor((high + low) / 2);
        
        // Case 1: Target found at middle position
        if (arr[mid] === target) {
            return mid; // Return the index
        } 
        // Case 2: Target is smaller than middle element
        else if (arr[mid] > target) {
            // Search in the LEFT half 
            // Because array is sorted, all elements on left are smaller
            return recursiveBinarySearch(mid - 1, low);
        } 
        // Case 3: Target is larger than middle element
        else {
            // Search in the RIGHT half
            // Because array is sorted, all elements on right are larger
            return recursiveBinarySearch(high, mid + 1);
        }
    };
    
    // Start the search with full array range
    // Initial high = last index, low = first index
    return recursiveBinarySearch(arr.length - 1, 0);
};


const a = [3, 4, 6, 12, 13, 14, 16, 17];

console.log(binarySearch(a, 6)); 
// Output: 2 (index of 6 in array)