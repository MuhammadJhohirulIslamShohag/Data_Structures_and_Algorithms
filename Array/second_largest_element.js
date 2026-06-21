/*
  Second Largest Element 
*/

// Brute Force — O(n log n)

const findSecondLargestElement = (arr) => {
    arr.sort((a, b) => a - b);
    let firstLargest = arr[arr.length - 1];
    for(let i = arr.length - 2; i >= 0; i--){
        if(arr[i] !== firstLargest){
            return arr[i];
        }
    }
    return -1; // no second distinct largest exists
}

// Better — O(n), two passes
const findSecondLargestElement = (arr) => {
    let firstLargest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstLargest) firstLargest = arr[i];
    }
    let secondLargest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > secondLargest && arr[i] < firstLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}


// Optimal — O(n), single pass

const findSecondLargestElement = (arr) => {
    let firstLargest = -Infinity, secondLargest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] < firstLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}


# Cracking the "Second Largest Element" Interview Question: From Brute Force to Optimal

If you are preparing for technical interviews at top-tier companies, you will quickly realize that solving a problem isn't just about getting the right answer. It’s about **efficiency**.
A classic question that interviewers love to throw at beginners and intermediate developers alike is: **"How do you find the second largest element in an array?"**

While it sounds deceptively simple, this question is a fantastic way to showcase your understanding of time complexity (O(n)) and space complexity (O(1)). Today, we’ll walk through the evolutionary journey of solving this problem—moving from a naive approach to the highly optimized, single-pass solution.
## The Goal

Given an array of integers, find the second largest *distinct* element.

 * **Input:** [12, 35, 1, 10, 34, 1]
 * **Output:** 34

Let’s look at the three ways to solve this.

## Approach 1: The Brute Force (Sorting)

The most intuitive thought is often: *"Why not just sort the array?"* If we sort it in ascending order, the largest number will be at the very end, and the second largest should be right next to it.

```javascript
const findSecondLargestBrute = (arr) => {
    // Sort ascending
    arr.sort((a, b) => a - b);
    
    let firstLargest = arr[arr.length - 1];
    
    // Walk backward to find the first distinct smaller element
    for(let i = arr.length - 2; i >= 0; i--){
        if(arr[i] !== firstLargest){
            return arr[i];
        }
    }
    return -1; // Case where no distinct second largest exists (e.g., [10, 10, 10])
}

```

### Why this isn't ideal:

 * **Time Complexity:** **O(n \log n)** because of the sorting operation.

 * **The Verdict:** It works, but sorting the entire array just to find one number is an overkill. We can do much better.

## Approach 2: The "Better" Way (Two-Pass Scan)
Instead of rearranging the entire array, we can just look through it twice.

 1. In the **first pass**, we find the absolute largest number.

 2. In the **second pass**, we find the largest number that *isn't* equal to our absolute largest.

```javascript
const findSecondLargestBetter = (arr) => {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    
    // Pass 1: Find the absolute maximum
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstLargest) firstLargest = arr[i];
    }
    
    // Pass 2: Find the highest element strictly less than firstLargest
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > secondLargest && arr[i] < firstLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

```

### Why this is a massive upgrade:

 * **Time Complexity:** **O(n)**. We loop through the array twice (2n operations), which simplifies to linear time.

 * **The Verdict:** This is a great, highly readable solution. But an interviewer will immediately ask: *"Can you do it in a single pass?"*

## Approach 3: The Optimal Solution (Single-Pass Magic)

To solve this in one go, we can think like a sports tournament tracker. We maintain a leaderboard with two slots: firstLargest and secondLargest.

As we look at each number, there are two crucial scenarios:

 1. **The number beats the current champion:** The old champion gets demoted to 2nd place, and the new number takes 1st place.

 2. **The number doesn't beat the champion, but beats 2nd place:** It quietly takes over 2nd place.

```javascript
const findSecondLargestOptimal = (arr) => {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstLargest){
            // Demote current leader to second place
            secondLargest = firstLargest;
            // Crowning the new leader
            firstLargest = arr[i];
        } 
        // If it's smaller than 1st but bigger than 2nd, update 2nd
        else if(arr[i] > secondLargest && arr[i] < firstLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

```

### Why this is the gold standard:

 * **Time Complexity:** **O(n)** (We visit each element exactly once).

 * **Space Complexity:** **O(1)** (Constant auxiliary space).

 * **The Verdict:** This is the exact code that gets you a thumbs-up in a technical interview. It is clean, efficient, and shows a deep understanding of loop mechanics.

## Summary Comparison

| Approach | Time Complexity | Space Complexity | Iterations |
|---|---|---|---|
| **Brute Force** | O(n \log n) | O(1) (or O(n) depending on sort) | Multiple |
| **Better Approach** | O(n) | O(1) | 2 Passes |
| **Optimal Approach** | **O(n)** | **O(1)** | **1 Pass** |

## Conclusion

Coding is rarely about just finding a working solution; it's about refining your thought process. By moving away from costly built-in operations like .sort() and learning how to track data dynamically inside a single loop, you become a much stronger engineer.

*If you found this step-by-step optimization helpful, hit that **Clap button 👏** and bookmark this for your next interview prep session! Have a cleaner way to handle edge cases? Let's discuss in the comments below!*
