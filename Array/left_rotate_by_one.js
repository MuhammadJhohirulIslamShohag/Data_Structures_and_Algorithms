/*
    Left Rotate Array  by One
*/

// Brute Force 
const leftRotateArrayByOneBrute = (arr) => {
    let n = arr.length;
    let temp = new Array(n); // Allocating a new array in memory

    // Shift elements from index 1 onwards to the left
    for(let i = 1; i < n; i++){
        temp[i - 1] = arr[i];
    }

    // Place the first element at the last index
    temp[n - 1] = arr[0];

    return temp;
}

console.log(leftRotateArrayByOneBrute([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5, 1]

// Better 
const leftRotateArrayByOneBetter = (arr) => {
    let first = arr[0];
    
    // Create a shallow copy of the array (excluding the first element)
    let rest = arr.slice(1); 
    
    // Push the first element to the end of our new array
    rest.push(first);

    return rest;
}

leftRotateArrayByOneBetter([1, 2, 3, 4, 5])

// optimal 
const leftRotateArrayByOneOptimal = (arr) => {
    let n = arr.length;
    if (n <= 1) return arr; // Edge case safety
    
    let first = arr[0]; // Step 1: Save the champion

    // Step 2: Shift everything to the left
    for(let i = 1; i < n; i++){
        arr[i - 1] = arr[i];
    }

    // Step 3: Put the first element at the end
    arr[n - 1] = first;
    
    return arr;
}

leftRotateArrayByOneOptimal([1, 2, 3, 4, 5])

/*
# Array Manipulation: Mastering "Left Rotate an Array by One" in JavaScript

Array rotation is a foundational coding problem that regularly pops up in coding bootcamps and technical interviews. It is a brilliant way to test your understanding of array indexing, memory reference, and in-place mutation.
Today, we are going to look at three ways to left-rotate an array by exactly one position—moving from an approach that uses extra memory to a highly optimized, in-place solution.

## The Goal

To "left rotate by one" means to shift every element in the array one position to the left, while the very first element moves all the way to the end of the line.

 * **Input:** [1, 2, 3, 4, 5]
 * **Output:** [2, 3, 4, 5, 1]

## Approach 1: The Brute Force (Extra Array Allocation)

The most straightforward way to solve this is to create a brand-new array of the same size. We then copy every element (starting from index 1) into its new, shifted position in the new array, and finally manually place the original first element at the very end.

```javascript
const leftRotateArrayByOneBrute = (arr) => {
    let n = arr.length;
    let temp = new Array(n); // Allocating a new array in memory

    // Shift elements from index 1 onwards to the left
    for(let i = 1; i < n; i++){
        temp[i - 1] = arr[i];
    }

    // Place the first element at the last index
    temp[n - 1] = arr[0];

    return temp;
}

console.log(leftRotateArrayByOneBrute([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5, 1]

```
### The Complexity:

 * **Time Complexity:** **O(n)** (Linear time) because we loop through the array elements once.

 * **Space Complexity:** **O(n)** (Linear space) because we are creating a duplicate temp array of size n.
## Approach 2: The "Slick" JavaScript Native Way

If you are writing production code where readability trumps strict memory constraints, you can leverage native array methods like .slice() to accomplish this task with minimal boilerplate.

```javascript
const leftRotateArrayByOneBetter = (arr) => {
    let first = arr[0];
    
    // Create a shallow copy of the array (excluding the first element)
    let rest = arr.slice(1); 
    
    // Push the first element to the end of our new array
    rest.push(first);

    return rest;
}

console.log(leftRotateArrayByOneBetter([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5, 1]

```

*(Note: Your original draft used arr.slice(0), which copies the entire array. Slicing from index 1 makes it even cleaner!)*

### The Complexity:

 * **Time Complexity:** **O(n)** because .slice() has to traverse and copy the array elements under the hood.

 * **Space Complexity:** **O(n)** because a new array (rest) is created in memory.

## Approach 3: The Optimal Solution (In-Place Mutation)

Interviewers love resource optimization. If they say, *"Do this with O(1) auxiliary space,"* you cannot create a new array. Instead, you must shift the numbers inside the **original** array.

To do this:

 1. Save the very first element in a temporary variable so it doesn't get overwritten.

 2. Run a loop shifting each element to its left neighbor (arr[i - 1] = arr[i]).

 3. Drop the saved first element into the final slot (arr[n - 1]).

```javascript
const leftRotateArrayByOneOptimal = (arr) => {
    let n = arr.length;
    if (n <= 1) return arr; // Edge case safety
    
    let first = arr[0]; // Step 1: Save the champion

    // Step 2: Shift everything to the left
    for(let i = 1; i < n; i++){
        arr[i - 1] = arr[i];
    }

    // Step 3: Put the first element at the end
    arr[n - 1] = first;
    
    return arr;
}

console.log(leftRotateArrayByOneOptimal([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5, 1]

```
### Why this is the interview winner:

 * **Time Complexity:** **O(n)**. We traverse the array exactly once.

 * **Space Complexity:** **O(1)** (Constant Space). We only allocated a single primitive variable (first), modifying the original array completely in-place.

## Summary Comparison

| Strategy | Time Complexity | Space Complexity | Modifies Original Array? |
|---|---|---|---|
| **Brute Force** | O(n) | O(n) | No |
| **Native Methods** | O(n) | O(n) | No |
| **Optimal In-Place** | **O(n)** | **O(1)** | **Yes** |

Understanding how to manipulate indices without throwing extra memory at the problem is what separates junior developers from mid-level engineers.

*If you found this breakdown intuitive, make sure to drop some **claps 👏** and follow along for more JavaScript optimization tips. How would you modify this to rotate an array by 'k' spaces? Let's discuss in the comments below!*

*/