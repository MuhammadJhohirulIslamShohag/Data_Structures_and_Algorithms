/* Search Insert Position */

// Without Recursive Way
const binarySearchInsert = (arr, insertVal) => {
    let low = 0;
    let high = arr.length - 1;
    let result = arr.length; // Default to end of array
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] >= insertVal) {
            result = mid;      // Record potential index
            high = mid - 1;    // Keep looking left
        } else {
            low = mid + 1;     // Too small, look right
        }
    }
    return result;
};

// Recursive Way 

const binarySearchInsertRecursive = (arr, insertVal) => {
    let result = arr.length;
    
    const recursive = (high, low) => {
        if (low > high) return result;
        
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] >= insertVal) {
            result = mid; 
            return recursive(mid - 1, low);
        } else {
            return recursive(high, mid + 1);
        }
    };
    
    return recursive(arr.length - 1, 0);
};

/*

## Beyond Searching: Finding the Perfect Insertion Point

We’ve covered how to find specific elements and how to determine boundaries. Now, let’s combine that knowledge to solve a very practical problem: **"If I want to insert a new number into a sorted array, where should it go to keep the array sorted?"**

This is known as finding the **Insertion Point**. By using Binary Search, we can find this index in O(\log n) time, which is significantly faster than manually looping through the array.

### The Goal

Given a sorted array [1, 2, 4, 7] and a value 2, the insertion point should be index 1 (since 2 already exists, we place the new element to maintain order).

### 1. Iterative Approach

The iterative version is usually preferred in production for its memory efficiency (avoiding extra call stacks).

```javascript
const binarySearchInsert = (arr, insertVal) => {
    let low = 0;
    let high = arr.length - 1;
    let result = arr.length; // Default to end of array
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] >= insertVal) {
            result = mid;      // Record potential index
            high = mid - 1;    // Keep looking left
        } else {
            low = mid + 1;     // Too small, look right
        }
    }
    return result;
};

```

### 2. Recursive Approach

Recursion is an elegant way to express the same "divide and conquer" logic.

```javascript
const binarySearchInsertRecursive = (arr, insertVal) => {
    let result = arr.length;
    
    const recursive = (high, low) => {
        if (low > high) return result;
        
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] >= insertVal) {
            result = mid; 
            return recursive(mid - 1, low);
        } else {
            return recursive(high, mid + 1);
        }
    };
    
    return recursive(arr.length - 1, 0);
};

```

### Step-by-Step Visualization

Let's trace binarySearchInsert with arr = [1, 2, 4, 7] and insertVal = 2.
| Iteration | Low | High | Mid | arr[mid] | arr[mid] >= 2? | Result | Action |
|---|---|---|---|---|---|---|---|
| **1** | 0 | 3 | 1 | 2 | **Yes** | 1 | high = 0 |
| **2** | 0 | 0 | 0 | 1 | **No** | 1 | low = 1 |

*After Iteration 2, low (1) is greater than high (0), the loop ends, and we return the result of 1.*

### Why this is a powerful pattern

 * **Maintains Order:** This is the foundation of many data structures, such as sorted lists, priority queues, and even binary search trees.

 * **Memory vs. Readability:** While the recursive version is clean and "mathematical," the iterative version is generally safer for very large arrays in JavaScript to avoid stack overflow risks.

 * **Flexible:** By changing the >= to a >, you can easily switch between finding the first insertion point for duplicates (as shown here) versus finding the index after all existing occurrences.

### Final Thoughts

Understanding how to find an insertion point using binary search is a "Level Up" moment for any developer. It moves you away from simple "find the element" logic into "data structure manipulation," which is where the real power of algorithmic thinking lies.
**Are there other algorithmic patterns you’d like to see visualized? Let me know in the comments below!**
*Happy coding!* 🚀

*One quick note for your code:* In your binarySearchInsertRecursive function, ensure you call the helper with arr.length - 1 rather than arr.length to avoid an "out of bounds" error on the initial mid-point calculation!

*/