/*
    Rotate Array By K Elements
*/
const leftRotateArrayByK = (arr, k) => {
    let n = arr.length;
    k = k % n; // Step 1: Normalize k

    // Step 2: Store the first 'k' elements in a temporary array
    const temp = arr.slice(0, k);

    // Step 3: Shift the remaining elements to the front
    for(let i = k; i < n; i++){
        arr[i - k] = arr[i];
    }

    // Step 4: Paste the temporary elements back at the end
    for(let i = 0; i < k; i++){
        arr[n - k + i] = temp[i];
    }
    
    return arr;
}

leftRotateArrayByK([1, 2, 3, 4, 5, 6], 2)

/*

 # Moving Beyond One: How to Rotate an Array by K Elements in JavaScript

In our previous post, we looked at how to left-rotate an array by exactly one position. It’s a great warm-up, but interviewers rarely stop there. The natural follow-up question is:

 **"How do you left-rotate an array by k elements?"**

Suddenly, shifting things one by one isn't efficient enough. Today, we'll explore how to take your array rotation skills to the next level by handling any shift value (k) gracefully using an optimized tracking array.

## The Problem

Given an array and an integer k, rotate the array to the left by k steps.

 * **Input Array:** [1, 2, 3, 4, 5, 6]

 * **Rotation Factor (k):** 2

 * **Expected Output:** [3, 4, 5, 6, 1, 2]

## The Core Logic: Handling Edge Cases

Before looking at the code, there is a crucial mathematical trick you must know. What happens if the array has a length of 6, and an interviewer asks you to rotate it 8 times?
Rotating a 6-element array 6 times brings it right back to its original state. Therefore, rotating it 8 times is exactly the same as rotating it 8 \pmod 6 = 2 times.

We handle this using the remainder operator:

```javascript
k = k % n;

```

This single line prevents unnecessary iterations and keeps our code bulletproof against massive values of k.

## The Solution: Split, Shift, and Paste

Here is the clean, efficient algorithm that handles the rotation by caching the elements that are about to be overridden:

```javascript
const leftRotateArrayByK = (arr, k) => {
    let n = arr.length;
    k = k % n; // Step 1: Normalize k

    // Step 2: Store the first 'k' elements in a temporary array
    const temp = arr.slice(0, k);

    // Step 3: Shift the remaining elements to the front
    for(let i = k; i < n; i++){
        arr[i - k] = arr[i];
    }

    // Step 4: Paste the temporary elements back at the end
    for(let i = 0; i < k; i++){
        arr[n - k + i] = temp[i];
    }
    
    return arr;
}

console.log(leftRotateArrayByK([1, 2, 3, 4, 5, 6], 2)); 
// Output: [3, 4, 5, 6, 1, 2]

```

## Breaking Down the Steps

Let's visualize exactly what happens when we pass [1, 2, 3, 4, 5, 6] with k = 2.

### 1. The Cache Phase

```javascript
const temp = arr.slice(0, k); // temp becomes [1, 2]

```

Because the first k elements will be overwritten during the shift, we safeguard them inside a temporary array temp.

### 2. The Shift Phase

```javascript
for(let i = k; i < n; i++){
    arr[i - k] = arr[i];
}

```

We loop through the rest of the array (starting from index 2), shifting each element k spaces to the left.

 * Index 2 (3) moves to Index 0.

 * Index 3 (4) moves to Index 1... and so on.

 * At the end of this loop, our original array looks like this: [3, 4, 5, 6, 5, 6]. Notice the duplicate leftovers at the end!

### 3. The Paste Phase

```javascript
for(let i = 0; i < k; i++){
    arr[n - k + i] = temp[i];
}

```

Finally, we loop through our temp array ([1, 2]) and overwrite those trailing leftovers at the back of the original array. The array is transformed into its final shape: [3, 4, 5, 6, 1, 2].

## Performance Metrics

 * **Time Complexity:** **O(n)** (Linear Time). Slicing takes O(k) time, shifting takes O(n - k) time, and pasting takes O(k) time. Combined, this scales linearly with the size of the array.

 * **Space Complexity:** **O(k)** (Auxiliary Space). We only allocate memory for the k elements we temporarily store. In the worst case where k = n - 1, this approaches O(n).

## Conclusion

This algorithm is highly favored in interviews because it splits a complex problem into distinct, readable phases: **Normalize, Cache, Shift, and Merge**.
> **Challenge for the comments:** While O(k) space is great, it is actually possible to solve this problem in **O(1) constant space** by reversing distinct parts of the array. Do you know how the array reversal trick works? Let me know below!
> 
*Found this algorithmic breakdown useful? Don't forget to leave some **claps 👏** and bookmark it for your upcoming code challenges!*

*/
