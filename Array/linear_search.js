/*
  Linear Search 
*/

/*

const linearSearch = (arr, number) => {
    let n = arr.length;
    
    // Scan the array from left to right, one element at a time
    for(let i = 0; i < n; i++){
        // Check if the current element matches our target
        if(arr[i] === number){
            return i; // Target found! Return the index immediately
        }
    }
    
    return -1; // Scanned the entire array and found no match
}

console.log(linearSearch([1, 2, 3, 4, 5], 4)); // Output: 3

# The Foundation of Algorithm Design: Understanding Linear Search in JavaScript
When entering the world of data structures and algorithms, searching is one of the first core concepts you will encounter. Before diving into complex dividing algorithms, you must first master the baseline of all search mechanics: **Linear Search**.
Whether you are scanning an array for a target ID or looking for a specific value in an unsorted list, linear search provides a reliable, straightforward solution. Let's look at how it works and break down its efficiency.

## The Goal

The objective of a linear search is to look through an array one element at a time from start to finish to find a target value. If the value is found, the function returns its index; if the array doesn't contain the value, it returns -1.

 * **Input Array:** [1, 2, 3, 4, 5]

 * **Target Number:** 4

 * **Expected Output:** 3 (since 4 is at index 3)

## The Solution: Code Implementation

Here is the clean, modern JavaScript implementation of a linear search algorithm:

```javascript
const linearSearch = (arr, number) => {
    let n = arr.length;
    
    // Scan the array from left to right, one element at a time
    for(let i = 0; i < n; i++){
        // Check if the current element matches our target
        if(arr[i] === number){
            return i; // Target found! Return the index immediately
        }
    }
    
    return -1; // Scanned the entire array and found no match
}

console.log(linearSearch([1, 2, 3, 4, 5], 4)); // Output: 3

```

## How It Works Step-by-Step

Imagine you are looking for a specific folder in a filing cabinet, but the folders aren't organized alphabetically or numerically. Your only logical choice is to check the first folder, then the second, then the third, until you find the right one.

Let's trace how the code evaluates linearSearch([1, 2, 3, 4, 5], 4):

 * **Iteration 1 (i = 0):** Checks arr[0] which is 1. Is 1 === 4? No. The loop moves forward.
 * **Iteration 2 (i = 1):** Checks arr[1] which is 2. Is 2 === 4? No. The loop moves forward.
 * **Iteration 3 (i = 2):** Checks arr[2] which is 3. Is 3 === 4? No. The loop moves forward.
 * **Iteration 4 (i = 3):** Checks arr[3] which is 4. Is 4 === 4? **Yes!** The condition matches, the function instantly executes return 3, and the loop breaks early.

## Complexity Analysis

Understanding when to use linear search comes down to evaluating its performance metrics:

### 1. Time Complexity

 * **Best-Case Scenario (O(1)):** The item you are looking for happens to be at the very beginning of the array (Index 0). The loop runs exactly once and exits.

 * **Worst-Case Scenario (O(n)):** The item is at the very end of the array, or it isn’t in the array at all. The loop must inspect all n elements.

 * **Average Case (O(n)):** On average, you'll find the element somewhere in the middle of the dataset, requiring \frac{n}{2} comparisons. Mathematically, constants are dropped, simplifying to linear time complexity.

### 2. Space Complexity

 * **O(1) (Constant Space):** No extra arrays or data structures are created. The algorithm utilizes a minimal, fixed memory footprint to track the index variables.

## When Should You Use Linear Search?

While more advanced algorithms like Binary Search run significantly faster (O(\log n)), they come with a strict catch: the data *must* be sorted beforehand.

**Use Linear Search when:**

 1. The dataset is completely **unsorted**.

 2. The dataset is small, making the overhead of sorting it first inefficient.

 3. You are building simple, quick lookup filters in a production environment.

## Summary

Linear search represents code logic at its purest: simple, intuitive, and highly dependable. It is the perfect springboard for diving deeper into complex search optimizations down the line!

*Did this step-by-step breakdown make linear search intuition click for you? Drop some **claps 👏** and let me know in the comments below if you're ready to tackle Binary Search next!*


*/