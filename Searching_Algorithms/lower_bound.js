/*
  Implement Lower Bound
*/

// Brute Force 
const lowerBoundBrute = (arr, target) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] >= target) {
            return i; // Found it!
        }
    }
    return n; // Target is greater than all elements
};

// Optimal 
const lowerBoundOptimal = (arr, target) => {
    let n = arr.length;
    let high = n - 1;
    let low = 0;
    let result = n; // Default to n (as if not found)

    while (high >= low) {
        let mid = Math.floor((high + low) / 2);

        if (arr[mid] >= target) {
            result = mid;      // Record potential answer
            high = mid - 1;    // Try to find a smaller index
        } else {
            low = mid + 1;     // Too small, look in the right half
        }
    }
    return result;
};

/*

## From Brute Force to Binary Search: Optimizing the Lower Bound Algorithm

When you are tasked with finding the "lower bound" of a value—the first index where an element is greater than or equal to a target—it’s easy to start with a simple loop. However, as your datasets grow, the difference between a brute-force approach and an optimized one becomes massive.

Let's explore how to transition from an O(n) search to an O(\log n) powerhouse.

### What is the Lower Bound?

The "lower bound" of a target in a sorted array is the smallest index i such that arr[i] >= target. If no such element exists, it typically returns the length of the array.

### 1. The Brute Force Approach

The intuitive way to solve this is to iterate through the array from start to finish and return the first index that meets our condition.

```javascript
const lowerBoundBrute = (arr, target) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] >= target) {
            return i; // Found it!
        }
    }
    return n; // Target is greater than all elements
};

```

 * **Time Complexity:** O(n) — In the worst case, we check every single element.

### 2. The Optimal Approach (Binary Search)
Since the array is sorted, we don't need to check every element. We can use binary search to narrow down the range exponentially.

The trick here is to keep track of a result variable. Every time we find an element greater than or equal to our target, we record that index and then **keep searching to the left** to see if an even earlier index exists.

```javascript
const lowerBoundOptimal = (arr, target) => {
    let n = arr.length;
    let high = n - 1;
    let low = 0;
    let result = n; // Default to n (as if not found)

    while (high >= low) {
        let mid = Math.floor((high + low) / 2);

        if (arr[mid] >= target) {
            result = mid;      // Record potential answer
            high = mid - 1;    // Try to find a smaller index
        } else {
            low = mid + 1;     // Too small, look in the right half
        }
    }
    return result;
};

```

 * **Time Complexity:** O(\log n) — By halving the search space every iteration, this becomes incredibly efficient even for arrays with millions of entries.

### Why the Optimal Approach Wins

| Feature | Brute Force | Optimal (Binary Search) |
|---|---|---|
| **Complexity** | O(n) | O(\log n) |
| **Performance** | Slows down as array grows | Stays fast regardless of size |
| **Best For** | Small, unsorted arrays | Large, sorted datasets |

### Key Takeaway

Whenever you see a sorted array in a coding challenge or real-world application, **binary search** should be the first tool you reach for. By simply adjusting how you handle the high and low pointers, you can adapt binary search to find exact matches, lower bounds, or upper bounds with minimal effort.

**Have you ever had to refactor a slow loop in your own projects? I'd love to hear how shifting to binary search impacted your performance!**

*/