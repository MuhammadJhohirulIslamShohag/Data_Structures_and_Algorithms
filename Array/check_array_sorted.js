/*
   Check Array Sorted 
*/

// Brute Force — O(n²)
const checkArraySorted = (arr) => {
    let n = arr.length;
    for(let i = 0; i < n; i++){
        for(let j = i+1; j < n; j++){
            if(arr[i] > arr[j]){
                return false;
            }
        }
    }
    return true;
}

// Optimal — O(n)
const checkArraySorted = (arr) => {
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}
checkArraySorted([5,1,6,4,9]); // false

# Checking If an Array Is Sorted in JavaScript

When you are first starting out with data structures and algorithms, one of the most rewarding milestones is learning how to optimize your code. A classic problem that perfectly illustrates this transition is checking whether an array is sorted in ascending order.

Today, we will look at two ways to solve this problem: a **Brute Force** approach that works but drags under heavy data, and an **Optimal** approach that runs at lightning speed.

## The Goal

We want to write a function that takes an array of numbers and returns true if the numbers are sorted from smallest to largest, and false otherwise.

 * **Input:** [1, 2, 4, 6, 9] \rightarrow **Output:** true
 * **Input:** [5, 1, 6, 4, 9] \rightarrow **Output:** false

## Approach 1: The Brute Force (O(n^2))

The brute force mindset says: *"Let's take every single element and compare it with every single element that comes after it."* To do this, we nest two loops. The outer loop picks a number, and the inner loop checks all subsequent numbers to ensure none of them are smaller.

```javascript
const checkArraySortedBrute = (arr) => {
    let n = arr.length;
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            // If an earlier element is greater than a later element, it's not sorted!
            if(arr[i] > arr[j]){
                return false;
            }
        }
    }
    return true;
}

console.log(checkArraySortedBrute([5, 1, 6, 4, 9])); // Output: false

```

### Why this is inefficient:

 * **The Problem:** It does a lot of redundant work. If you have an array of 1,000 items, this code will make nearly 500,000 comparisons!

 * **Time Complexity:** **O(n^2)** (Quadratic Time). This means if the array size doubles, the execution time quadruples.

## Approach 2: The Optimal Solution (O(n))

Do we really need to compare every number to *every other* number? No!

If an array is sorted, any given element must be less than or equal to the element **directly next to it**. If arr[0] <= arr[1] and arr[1] <= arr[2], it naturally follows that arr[0] <= arr[2].

By leveraging this logic, we only need a single loop to look at adjacent pairs:

```javascript
const checkArraySortedOptimal = (arr) => {
    let n = arr.length;
    
    // We stop at n - 1 because the last element doesn't have a next neighbor
    for(let i = 0; i < n - 1; i++){
        if(arr[i] > arr[i + 1]){
            return false; // Found a pair out of order!
        }
    }
    return true; // Checked every pair successfully
}

console.log(checkArraySortedOptimal([5, 1, 6, 4, 9])); // Output: false

```

### Why this is the gold standard:

 * **The Improvement:** For 1,000 items, this code makes at most 999 comparisons. It instantly exits the moment it finds a single violation (like 5 > 1 at the very start of our test array).

 * **Time Complexity:** **O(n)** (Linear Time). The execution time grows perfectly in step with the size of your array.

 * **Space Complexity:** **O(1)** (Constant Space). No extra memory is used.

## Summary

| Metric | Brute Force Approach | Optimal Approach |
|---|---|---|
| **Time Complexity** | O(n^2) | **O(n)** |
| **Space Complexity** | O(1) | **O(1)** |
| **Core Mechanism** | Nested comparison loops | Single-pass neighbor check |

The next time you are writing a loop inside a loop, take a step back and ask yourself: *"Am I doing redundant work, or can I solve this by just checking adjacent items?"* Happy coding!

*Did this breakdown help clarify linear vs. quadratic time complexity? Hit that **Clap button 👏** and drop a comment below if you have any questions!*
