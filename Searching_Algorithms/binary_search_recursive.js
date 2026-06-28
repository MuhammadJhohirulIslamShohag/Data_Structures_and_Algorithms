
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

/*

## Searching Smarter: Implementing Binary Search Recursively in JavaScript

When dealing with large, sorted datasets, searching for an item one-by-one is inefficient. Enter **Binary Search**—a classic algorithm that cuts your search space in half with every single step.

While iterative versions are common, implementing Binary Search **recursively** is a fantastic way to deepen your understanding of base cases and call stacks. Let’s break down how to implement this cleanly in JavaScript.

### The Strategy: "Divide and Conquer"

Binary search works on the principle of elimination. Because the array is sorted, we can look at the middle element:

 1. If the middle element matches our target, we're done!

 2. If the target is smaller, we know it *must* be in the left half, so we ignore everything to the right.

 3. If the target is larger, we look exclusively in the right half.
We repeat this process until we find the item or exhaust the search space.

### The Recursive Implementation

```javascript
/**
 * Binary Search Algorithm - Recursive Implementation
 */
const binarySearch = (arr, target) => {
    
    const recursiveBinarySearch = (high, low) => {
        // Base Case: If the search space is exhausted, the target isn't there
        if (low > high) {
            return -1;
        }
        
        // Calculate the middle index
        const mid = Math.floor((high + low) / 2);
        
        // Success: Found it!
        if (arr[mid] === target) {
            return mid;
        } 
        // Search Left: Target is smaller than the mid-point
        else if (arr[mid] > target) {
            return recursiveBinarySearch(mid - 1, low);
        } 
        // Search Right: Target is larger than the mid-point
        else {
            return recursiveBinarySearch(high, mid + 1);
        }
    };
    
    // Kick off the search across the entire array
    return recursiveBinarySearch(arr.length - 1, 0);
};

// Example usage:
const nums = [3, 4, 6, 12, 13, 14, 16, 17];
console.log(binarySearch(nums, 6)); // Output: 2

```

### Why Use Recursion Here?

 * **Cleanliness:** Recursive code often maps more directly to the mathematical definition of the search problem.

 * **Performance:**

   * **Time Complexity:** O(\log n). Because we divide the search space by two in each step, this is exponentially faster than a linear search (O(n)) for large arrays.

   * **Space Complexity:** O(\log n) due to the recursion call stack. While this uses slightly more memory than an iterative approach, the code remains highly readable and modular.

### Key Takeaways for Your Code

 * **The Base Case:** Always define your "exit strategy." In this case, low > high signals that we've searched everywhere without success.

 * **Divide:** Use Math.floor() to ensure your middle index is always an integer.

 * **Conquer:** Passing mid - 1 or mid + 1 into the next recursive call is what effectively "shrinks" the search area, ensuring the algorithm stays fast.

### Final Thoughts

Binary search is a cornerstone of efficient programming. Mastering the recursive version not only prepares you for common interview questions but also builds a stronger intuition for recursive thinking in general.

**Do you prefer the recursive style for its readability, or do you stick to iterative loops for performance-critical code? Share your thoughts below!**


*/