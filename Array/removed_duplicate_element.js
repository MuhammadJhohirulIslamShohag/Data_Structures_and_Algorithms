/*
  Removed Duplicate Element From Array
*/

// Brute Force --- Time: O(n log n) (Set internally), Space: O(n) extra
// if it is unsorted array 

const removeArrayDuplicateSet = (arr) => {
    let set = new Set();
    let n = arr.length;
    
    // Add all elements to the set (duplicates are automatically ignored)
    for(let i = 0; i < n; i++){
        set.add(arr[i]);
    }
    
    // Convert the unique set back into a normal array
    return [...set];
}


// Optimal (Two Pointer — sorted array, in-place)

const removeArrayDuplicateOptimal = (arr) => {
    if (arr.length === 0) return [];
    
    let i = 0; // Points to the last unique element found
    let n = arr.length;
    
    // j scans through the rest of the array
    for(let j = 1; j < n; j++){
        // If we find a completely new element...
        if(arr[i] !== arr[j]){
            i++;             // Move our unique marker forward
            // arr[++i]=arr[j]
            arr[i] = arr[j]; // Overwrite the duplicate with the new unique value
        }
    }
    
    // Extract the portion of the array containing the unique elements
    // return arr.slice(0, i + 1);
    // arr.length = i+1;-> return arr;

    let result = [];
    for(let k = 0; k <= i; k++){
       result[k] = arr[k]
    }
      
    return result;
    
}

console.log(removeArrayDuplicateOptimal([1, 1, 2, 2, 3])); // Output: [1, 2, 3]

# How to Remove Duplicates from an Array in JavaScript

Removing duplicates from an array is one of those tasks you will encounter constantly in real-world applications—whether you're cleaning up API data, filtering user inputs, or sitting in a technical interview.

As with most algorithmic problems, there isn’t just one way to solve it. Today, we’ll contrast a highly popular **Set-based** approach with an elegant, interview-friendly **Two-Pointer** technique designed for sorted arrays.

## The Goal

We want to take an array containing duplicate values and return a clean array containing only unique elements.
 * **Input:** [1, 1, 2, 2, 3]
 * **Output:** [1, 2, 3]

## Approach 1: The Modern JavaScript Way (Using Sets)

If you need a quick, highly readable solution in a production codebase, JavaScript’s built-in Set object is your best friend. A Set is a collection of values where each value **must be unique**.

By passing our array into a Set and converting it back into an array using the spread operator (...), we can strip out duplicates in a single line of logic:

```javascript
const removeArrayDuplicateSet = (arr) => {
    let set = new Set();
    let n = arr.length;
    
    // Add all elements to the set (duplicates are automatically ignored)
    for(let i = 0; i < n; i++){
        set.add(arr[i]);
    }
    
    // Convert the unique set back into a normal array
    return [...set];
}

console.log(removeArrayDuplicateSet([1, 1, 2, 2, 3])); // Output: [1, 2, 3]

```
### The Complexity:

 * **Time Complexity:** **O(n)** on average. We iterate through the array once to insert elements into the Set, and Set lookups/insertions take O(1) constant time.

 * **Space Complexity:** **O(n)**. In the worst-case scenario (where all elements are already unique), the Set will store a duplicate copy of the entire array, using extra memory.

## Approach 2: The Interview Gold Standard (Two-Pointer Technique)

What if your interviewer adds a constraint? *"You must modify the array **in-place** without allocating extra memory for another data structure like a Set."*
If the input array is **already sorted**, we can solve this optimally using the **Two-Pointer technique**. We maintain a slow pointer (i) to keep track of the last known unique element, and a fast pointer (j) to scan ahead for new numbers.

```javascript
const removeArrayDuplicateOptimal = (arr) => {
    if (arr.length === 0) return [];
    
    let i = 0; // Points to the last unique element found
    let n = arr.length;
    
    // j scans through the rest of the array
    for(let j = 1; j < n; j++){
        // If we find a completely new element...
        if(arr[i] !== arr[j]){
            i++;             // Move our unique marker forward
            arr[i] = arr[j]; // Overwrite the duplicate with the new unique value
        }
    }
    
    // Extract the portion of the array containing the unique elements
    return arr.slice(0, i + 1);
}

console.log(removeArrayDuplicateOptimal([1, 1, 2, 2, 3])); // Output: [1, 2, 3]

```
### How the In-Place Swap Works:

Imagine the loop running step-by-step on [1, 1, 2, 2, 3]:

 1. i = 0 (value 1), j = 1 (value 1). They match. j skips ahead.

 2. j = 2 (value 2). They don't match! i moves to index 1, and we copy 2 there. The array looks like [1, 2, 2, 2, 3].

 3. j continues scanning until it hits 3, shifting 3 right next to our 2.

Finally, arr.slice(0, i + 1) chops off the trailing leftovers, leaving us with a perfectly unique array.

### The Complexity:

 * **Time Complexity:** **O(n)** (Linear Time). We walk through the array exactly once with our j pointer.

 * **Space Complexity:** **O(1)** (Constant Space). Aside from the slicing output, the algorithm mutates the original array in-place without needing any extra collections.

## Summary Comparison

| Strategy | Time Complexity | Space Complexity | Best Used When... |
|---|---|---|---|
| **Set Collection** | O(n) | O(n) | You want clean, highly readable production code and have memory to spare. |
| **Two-Pointer** | **O(n)** | **O(1)** | The array is sorted, and you need maximum memory efficiency during a technical interview. |

*Which approach do you find yourself writing more often in your day-to-day work? Let's talk about it in the comments! If this breakdown made the two-pointer pattern clearer, show some love with a few **claps 👏**!*
 



