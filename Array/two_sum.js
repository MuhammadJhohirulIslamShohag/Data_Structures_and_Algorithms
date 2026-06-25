/*
  Two Sum
*/

// brute force 
const twoSumBrute = (arr, target) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        // Start j from i + 1 to avoid checking the same element twice
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
};
console.log(twoSumBrute([2, 6, 5, 8, 11], 14)); // Output: [1, 3] (6 + 8 = 14)


// better 
const twoSumBetter = (arr, target) => {
    let n = arr.length;
    let hashMap = new Map(); // Stores: key = element value, value = element index
    
    for (let i = 0; i < n; i++) {
        let currentNum = arr[i];
        let rem = target - currentNum;
        
        // Check if the complement exists in our map
        if (hashMap.has(rem)) {
            return [hashMap.get(rem), i];
        }
        
        // Otherwise, store the current number and its index
        hashMap.set(currentNum, i);
    }
    return [-1, -1];
};
console.log(twoSumBetter([2, 6, 5, 8, 11], 14)); // Output: [1, 3]

// optimal 
const twoSumOptimal = (arr, target) => {
    // We sort the array first. (Note: This ruins original indices!)
    arr.sort((a, b) => a - b); 
    
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let sum = arr[left] + arr[right];
        
        if (sum === target) {
            return true; // Or return the sorted values [arr[left], arr[right]]
        } else if (sum < target) {
            left++; // Need a larger sum, move left pointer right
        } else {
            right--; // Need a smaller sum, move right pointer left
        }
    }
    return false;
};
console.log(twoSumOptimal([2, 6, 5, 8, 11], 14)); // Output: true

/*

# Master the "Two Sum" Problem: The Ultimate Interview Guide

If you have ever prepared for a software engineering interview, you have almost certainly crossed paths with **Two Sum**. It is the absolute gateway drug of data structure and algorithm problems.

While it feels simple, it perfectly highlights the trade-offs between **time complexity** and **space complexity**. Today, we'll walk through the three ways to conquer this classic question, from a brute-force double loop to a high-speed HashMap lookup, and finally, a Two-Pointer variant.

## The Goal

Given an array of integers and a target number, find two numbers in that array that add up exactly to the target. Depending on the interview constraints, you'll either return their **indices** or simply a **boolean (true/false)** indicating if such a pair exists.

 * **Input Array:** [2, 6, 5, 8, 11]
 * **Target:** 14
 * **Expected Output (Indices):** [1, 3] (Because 6 + 8 = 14)

## Approach 1: The Brute Force (Nested Loops)

The intuitive approach is to try every single combination. We pick a number with our outer loop (i) and pair it up with every subsequent number using our inner loop (j). If they equal the target, we have a winner.

```javascript
const twoSumBrute = (arr, target) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        // Start j from i + 1 to avoid pairing an element with itself
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
};

```
### The Complexity:

 * **Time Complexity:** **O(n^2)** (Quadratic Time). If your array grows to 10,000 items, your engine might perform up to 100 million comparisons.

 * **Space Complexity:** **O(1)** (Constant Space). No extra memory is allocated.

## Approach 2: The Better Way (The HashMap Lookup)

Can we solve this by looking at each number exactly once? Yes—by using a Map to remember what numbers we have seen in the past.
Instead of hunting forward for a matching pair, we look *backward*. As we visit each number (currentNum), we calculate its missing complement: rem = target - currentNum. If that exact complement is already sitting in our HashMap, it means we found its perfect match!

```javascript
const twoSumBetter = (arr, target) => {
    let n = arr.length;
    let hashMap = new Map(); // Stores: key = element value, value = element index

    for (let i = 0; i < n; i++) {
        let currentNum = arr[i];
        let rem = target - currentNum;

        // Check if the complement exists in our map
        if (hashMap.has(rem)) {
            return [hashMap.get(rem), i];
        }

        // Otherwise, store the current number and its index for future matches
        hashMap.set(currentNum, i);
    }
    return [-1, -1];
};

```
### Why this is a massive upgrade:

 * **Time Complexity:** **O(n)** (Linear Time). Map lookups (.has() and .get()) run in a lightning-fast O(1) on average. We only loop through the array once!
 * **Space Complexity:** **O(n)**. In the worst case, we might store almost every element inside our map before finding a match. We are trading memory for pure speed.

## Approach 3: The Two-Pointer Variation (Sorted Array)

What if the interviewer adds a catch: *"I want O(1) auxiliary space, but I still want it faster than O(n^2)"*?
If the array is already sorted (or if you don't mind sorting it first and sacrificing the original index positions), you can use the **Two-Pointer technique**. Place one pointer at the start (left) and one at the end (right).

 * If their sum is **too small**, move the left pointer inward to get a bigger number.

 * If their sum is **too big**, move the right pointer inward to get a smaller number.

```javascript
const twoSumOptimal = (arr, target) => {
    // Note: Sorting alters the original positions, so this returns a boolean
    arr.sort((a, b) => a - b); 

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) {
            return true; // Match found!
        } else if (sum < target) {
            left++; // Sum too low, move left to pick a larger value
        } else {
            right--; // Sum too high, move right to pick a smaller value
        }
    }
    return false;
};

```
### The Complexity:

 * **Time Complexity:** **O(n \log n)** due to the initial array sorting step. The subsequent two-pointer search takes a mere O(n).

 * **Space Complexity:** **O(1)** if sorting in-place (depending on the JS engine's sorting implementation), saving you from map allocation overhead.

## Summary Cheat Sheet
| Approach | Time Complexity | Space Complexity | Returns Indices Successfully? | Best Used When... |
|---|---|---|---|---|
| **Brute Force** | O(n^2) | O(1) | Yes | Only when dataset size is microscopic. |
| **HashMap (Better)** | **O(n)** | **O(n)** | **Yes** | You need maximum lookup speed and original array indices. |
| **Two-Pointer** | O(n \log n) | O(1) | No (Unless tracked) | Memory is highly restricted, and you only need a yes/no answer. |

*There is a reason Two Sum is asked in almost every interview loop—it perfectly maps out your ability to analyze tradeoffs. If this step-by-step breakdown helped solidify your interview prep, slam that **Clap button 👏**! Got questions on the HashMap complement logic? Let's drop a comment below!*

*/

