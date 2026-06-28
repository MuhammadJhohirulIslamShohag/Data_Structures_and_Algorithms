// Brute Force 
const upperBoundBrute = (arr, target) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] > target) {
            return i;
        }
    }
    return n;
};

// Optimal 
const upperBoundOptimal = (arr, target) => {
    let n = arr.length;
    let high = n - 1;
    let low = 0;
    let result = n;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        
        // Check if value is strictly greater than target
        if (arr[mid] > target) {
            result = mid;     // Potential answer found
            high = mid - 1;   // Keep searching left for a smaller index
        } else {
            low = mid + 1;    // Value is too small, look right
        }
    }
    return result;
};

/*
## Mastering Upper Bound: Searching Smarter in Sorted Arrays

If you’ve already mastered the Lower Bound algorithm, you’re halfway to fully conquering search algorithms! Today, we’re looking at its sibling: the **Upper Bound**.

While the Lower Bound finds the first element *greater than or equal* to your target, the **Upper Bound** finds the first element that is **strictly greater** than your target.

### The Concept: Lower vs. Upper

 * **Lower Bound:** arr[i] >= target (Find the first index where the value is at least the target).

 * **Upper Bound:** arr[i] > target (Find the first index where the value is larger than the target).

If you are looking for 6 in the array [3, 4, 6, 12]:

 * **Lower Bound** returns index 2 (the value 6).

 * **Upper Bound** returns index 3 (the value 12).

### The Implementation

#### 1. The Brute Force Approach

This simple approach scans the array until it hits a value larger than our target.

```javascript
const upperBoundBrute = (arr, target) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] > target) {
            return i;
        }
    }
    return n;
};

```

#### 2. The Optimal Approach (O(\log n))

By using Binary Search, we eliminate half the search space with every iteration.

```javascript
const upperBoundOptimal = (arr, target) => {
    let n = arr.length;
    let high = n - 1;
    let low = 0;
    let result = n;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        
        // Check if value is strictly greater than target
        if (arr[mid] > target) {
            result = mid;     // Potential answer found
            high = mid - 1;   // Keep searching left for a smaller index
        } else {
            low = mid + 1;    // Value is too small, look right
        }
    }
    return result;
};

```
### Visualizing the Logic

Let’s trace upperBoundOptimal with the array [3, 4, 6, 12, 13, 14, 16, 17] and target 6.

| Iteration | Low | High | Mid | Mid Value (arr[mid]) | Is arr[mid] > 6? | Action |
|---|---|---|---|---|---|---|
| **1** | 0 | 7 | 3 | 12 | Yes | result=3, high=2 |
| **2** | 0 | 2 | 1 | 4 | No | low=2 |
| **3** | 2 | 2 | 2 | 6 | No | low=3 |

*After Iteration 3, low (3) becomes greater than high (2), loop ends, and we return result (3).*

### Why this is a "Must-Know"

 1. **Precision:** Many real-world applications (like finding insertion points or range queries) require this exact distinction between "greater than" and "greater than or equal to."

 2. **Scalability:** In an array with 1,000,000 items, the brute force approach could take a million steps. The optimal approach will find your answer in roughly **20 steps**.

 3. **Interview Readiness:** Questions involving "bounds" are staples in technical interviews. Being able to explain the difference and implement the O(\log n) solution shows strong algorithmic foundations.

### Pro-Tip for your Code

Notice the condition low <= high in the binary search loop. It ensures that even when the search space is down to a single element, the algorithm checks it before finishing.
**Have you ever used these bound functions to optimize a search feature in your own applications? Share your experiences below!**
*Happy coding!* 🚀


*/