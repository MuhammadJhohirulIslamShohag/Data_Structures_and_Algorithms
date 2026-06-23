/*
  Union of Two Sorted Arrays
*/

// Better
const unionSortedArrayBetter = (arr, arr1) => {
    let unionArr = new Set();

    // Collect elements from the first array
    for(let i = 0; i < arr.length; i++){
        unionArr.add(arr[i]);
    }
    // Collect elements from the second array
    for(let j = 0; j < arr1.length; j++){
        unionArr.add(arr1[j]);
    }

    // Convert back to array and sort it out
    return [...unionArr].sort((a, b) => a - b);
}

console.log(unionSortedArray([2, 3, 4, 4, 5, 11, 12],[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// Optimal 
const unionSortedArrayOptimal = (arr, arr1) => {
    let n1 = arr.length, n2 = arr1.length;
    let i = 0, j = 0;
    let result = [];

    // Helper function to prevent inserting consecutive duplicates
    const addIfUnique = (value) => {
        if(result.length === 0 || result[result.length - 1] !== value) {
            result.push(value);
        }
    }

    // Phase 1: Walk through both arrays simultaneously
    while(i < n1 && j < n2){
        if(arr[i] <= arr1[j]){
            addIfUnique(arr[i]);
            i++;
        } else {
            addIfUnique(arr1[j]);
            j++;
        }
    }

    // Phase 2: If elements are left over in arr, clean them up
    while(i < n1) addIfUnique(arr[i++]);

    // Phase 3: If elements are left over in arr1, clean them up
    while(j < n2) addIfUnique(arr1[j++]);

    return result;
}

console.log(unionSortedArrayOptimal([2, 3, 4, 4, 5, 11, 12], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13]));

/*

# Mastering Set Theory in Code: Union of Two Sorted Arrays in JavaScript

When dealing with multiple data sources—like merging user records from two databases or combining product catalogs—you often need to find their **union**. A union means merging both collections while keeping only *unique* values.

If the incoming arrays are **already sorted**, we can leverage that structure to build an ultra-efficient merge algorithm. Today, we'll journey from a readable, Set-based shortcut to an elegant, interview-perfect **Two-Pointer** solution.

## The Goal

Given two sorted arrays, combine them into a single sorted array that contains all unique elements from both.

 * **Array 1:** [2, 3, 4, 4, 5, 11, 12]
 * **Array 2:** [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13]
 * **Expected Output:** [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

## Approach 1: The Intuitive Way (Using Set + Sort)

The quickest mental model says: *"Dump everything from both arrays into a JavaScript Set to naturally eliminate duplicates, spread it back into an array, and sort it."*

```javascript
const unionSortedArrayBetter = (arr, arr1) => {
    let unionArr = new Set();

    // Collect elements from the first array
    for(let i = 0; i < arr.length; i++){
        unionArr.add(arr[i]);
    }
    // Collect elements from the second array
    for(let j = 0; j < arr1.length; j++){
        unionArr.add(arr1[j]);
    }

    // Convert back to array and sort it out
    return [...unionArr].sort((a, b) => a - b);
}

```
### Why this misses out on full optimization:

 * **Time Complexity:** **O((n1 + n2) \log(n1 + n2))**. Because we run a .sort() operation at the end, we throw away the advantage that our input arrays were *already* sorted!

 * **Space Complexity:** **O(n1 + n2)** to hold the elements inside the Set.

## Approach 2: The Optimal Solution (Two-Pointer Merge)

To achieve peak efficiency, we can treat this like a race. We place a pointer at the beginning of each array (i and j). We compare the values at both pointers, pick the smaller one, push it to our results (if it's not a duplicate), and step that pointer forward.
Because both arrays are sorted, we never need to sort anything at the end!

```javascript

const unionSortedArrayOptimal = (arr, arr1) => {
    let n1 = arr.length, n2 = arr1.length;
    let i = 0, j = 0;
    let result = [];

    // Helper function to prevent inserting consecutive duplicates
    const addIfUnique = (value) => {
        if(result.length === 0 || result[result.length - 1] !== value) {
            result.push(value);
        }
    }

    // Phase 1: Walk through both arrays simultaneously
    while(i < n1 && j < n2){
        if(arr[i] <= arr1[j]){
            addIfUnique(arr[i]);
            i++;
        } else {
            addIfUnique(arr1[j]);
            j++;
        }
    }

    // Phase 2: If elements are left over in arr, clean them up
    while(i < n1) addIfUnique(arr[i++]);

    // Phase 3: If elements are left over in arr1, clean them up
    while(j < n2) addIfUnique(arr1[j++]);

    return result;
}

console.log(unionSortedArrayOptimal([2, 3, 4, 4, 5, 11, 12], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13]));

```

## Tracing the Two-Pointer Magic

Imagine we are starting with arr = [2, ...] and arr1 = [1, ...].

 1. arr[i] (2) vs arr1[j] (1): 1 is smaller. 1 gets added to result. Pointer j increments.

 2. arr[i] (2) vs arr1[j] (2): They are equal! The code picks arr[i] (2), inserts it, and increments i.

 3. Next step, arr1[j] is also 2. When it tries to pass through addIfUnique(2), the helper checks result[result.length - 1] !== value. Since 2 is already at the tail of our result array, it gets skipped entirely. Duplicate eliminated dynamically!

## Complexity Breakdown

 * **Time Complexity:** **O(n1 + n2)** (Linear Time). We traverse both arrays exactly once. In a single pass, the combined union array is constructed fully sorted.

 * **Space Complexity:** **O(n1 + n2)** in the worst case to return the output array. No auxiliary data structures (like a Set) are utilized to manage the elements.

## Summary Comparison

| Strategy | Time Complexity | Extra Collections Used | Leverages Pre-Sorted Inputs? |
|---|---|---|---|
| **Set + Sort** | O((n1 + n2) \log(n1 + n2)) | Yes (new Set()) | No |
| **Two-Pointer Merge** | **O(n1 + n2)** | **No** | **Yes** |
*This dynamic twin-pointer strategy is exactly the foundation behind more complex algorithms like Merge Sort. If this line-by-line breakdown added a new tool to your algorithmic toolkit, show some love with a few **claps 👏**! Got questions on the remainder loops? Let's chat in the comments below!*


*/