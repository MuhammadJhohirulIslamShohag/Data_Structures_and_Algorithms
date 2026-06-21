/*
    Right Rotate By K
*/
const rightRotateArrayByK = (arr, k) => {
    let n = arr.length;
    k = k % n;

    let temp = arr.slice(n - k);

    for(let i = n - k - 1; i >= 0; i--){
        arr[i+k] = arr[i]
    }
    console.log(arr, 'arr')

    for(let j = 0; j < k; j++){
        arr[j] = temp[j]
    }
    console.log(arr, 'arr')
}

rightRotateArrayByK([1, 2, 3, 4, 5, 6], 2)

/*
 
# Shifting Gears: How to Right-Rotate an Array by K Elements in JavaScript

Now that we have mastered shifting elements to the left, it’s time to look at its mirror twin: **Right Rotation**. While the fundamental concept feels similar, changing the direction means we have to flip our indexing strategy and loop directions upside down.

If you are prepping for technical interviews, being able to seamlessly switch between left and right rotation shows interviewers that you don't just memorize algorithms—you actually understand index manipulation.

## The Problem

Given an array and an integer k, rotate the array to the right by k steps. Shifting right means elements fall off the end of the array and wrap around to the front.

 * **Input Array:** [1, 2, 3, 4, 5, 6]

 * **Rotation Factor (k):** 2

 * **Expected Output:** [5, 6, 1, 2, 3, 4]

## The Strategy: Slice, Shift Backwards, and Unshift

Just like left rotation, we start by normalizing k using k = k % n to handle cases where k is larger than the array length. From there, the process splits into three clear steps:

```javascript
const rightRotateArrayByK = (arr, k) => {
    let n = arr.length;
    k = k % n; // Step 1: Normalize k

    // Step 2: Slice the last 'k' elements into a temporary cache
    let temp = arr.slice(n - k);

    // Step 3: Shift the remaining elements forward (from right to left)
    for(let i = n - k - 1; i >= 0; i--){
        arr[i + k] = arr[i];
    }

    // Step 4: Paste the cached elements to the front of the array
    for(let j = 0; j < k; j++){
        arr[j] = temp[j];
    }
    
    return arr;
}

console.log(rightRotateArrayByK([1, 2, 3, 4, 5, 6], 2));
// Output: [5, 6, 1, 2, 3, 4]

```

## Why the Details Matter (Step-by-Step)

Let's trace this code with our example [1, 2, 3, 4, 5, 6] and k = 2 to see why the loops are structured this way.

### 1. The Tail Cache

```javascript
let temp = arr.slice(n - k); // n-k is 4. temp becomes [5, 6]

```

Since we are shifting elements to the right, the numbers at the tail end of the array are the ones that will get overwritten first. We isolate and preserve them inside temp.

### 2. The Backwards Shift Loop

Notice that this loop runs **backward** (i--), starting from the end of the unshifted elements (n - k - 1) down to 0:

```javascript
for(let i = n - k - 1; i >= 0; i--){
    arr[i + k] = arr[i];
}

```

> **Crucial Interview Point:** Why loop backward? If you loop forward here, you would overwrite elements before you have a chance to move them! Moving backward ensures we safely shift elements into empty or already-cached slots.
> 

 * Index 3 (4) moves to Index 5.

 * Index 2 (3) moves to Index 4... and so on.

 * After this loop finishes, the array looks like this: [1, 2, 1, 2, 3, 4].

### 3. Overwriting the Front

```javascript
for(let j = 0; j < k; j++){
    arr[j] = temp[j];
}

```

Finally, we take our cached elements [5, 6] and write them straight over the stale duplicates at indices 0 and 1. The array becomes [5, 6, 1, 2, 3, 4].

## Complexity Analysis

 * **Time Complexity:** **O(n)** (Linear Time). Slicing takes O(k) steps, the main loop processes n - k elements, and the restoration loop takes O(k) steps. Total operations perfectly scale with array length.

 * **Space Complexity:** **O(k)** (Auxiliary Space) to store the k elements that wrap around.

## Summary: Left vs. Right Rotation

| Rotation Type | Cache Extraction | Main Shift Loop Direction | Overwrite Target |
|---|---|---|---|
| **Left Rotate** | Front of array (0 to k) | **Forward** (i++) | End of array |
| **Right Rotate** | Back of array (n - k to n) | **Backward** (i--) | Front of array |

*And that completes the array rotation matrix! If this backward-loop breakdown saved you from a potential index-overwriting bug, smash that **Clap button 👏**! Have a question about handling edge cases like empty arrays? Let's drop a comment below!*


*/