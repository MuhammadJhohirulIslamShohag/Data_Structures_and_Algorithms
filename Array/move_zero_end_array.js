/*
  Move All Zeros to The End of the Array
*/


// Brute Force 
const moveZeroEnd_Brute = (arr) => {
    let tempArr = [];      
    let tempArrZero = [];

    // Separate zeros and non-zeros
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            tempArr.push(arr[i]);
        } else {
            tempArrZero.push(arr[i]);
        }
    }

    // Combine them back together
    for (let z = 0; z < tempArrZero.length; z++) {
        tempArr.push(tempArrZero[z]);
    }

    console.log(tempArr); // Output: [1, 2, 1, 4, 0, 0, 0]
};

moveZeroEnd_Brute([1, 2, 0, 1, 0, 4, 0]);

// Better 
const moveZeroEnd_Better = (arr) => {
    // Extract only the non-zero values
    let nonZeros = arr.filter(x => x !== 0);

    // Calculate how many zeros were left behind
    let zeroCount = arr.length - nonZeros.length;

    // Create a new array filled with that many zeros
    let zeros = new Array(zeroCount).fill(0);

    // Merge them using the spread operator
    let result = [...nonZeros, ...zeros];
    console.log(result); // Output: [1, 2, 1, 4, 0, 0, 0]
};

moveZeroEnd_Better([1, 2, 0, 1, 0, 4, 0]);

// Optimal 
const moveZeroEnd_Optimal = (arr) => {
    let n = arr.length;
    let j = -1;

    // Step 1: Find the index of the very first zero
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            j = i;
            break;
        }
    }

    // Edge Case: If there are no zeros at all, we are done!
    if (j === -1) return arr;

    // Step 2: Look for non-zero elements to swap with our zero pointer
    for (let p = j + 1; p < n; p++) {
        if (arr[p] !== 0) {
            // Modern ES6 Destructuring Swap
            [arr[p], arr[j]] = [arr[j], arr[p]]; 
            j++; // Move the zero pointer forward to the next zero placeholder
        }
    }

    console.log(arr); // Output: [1, 2, 1, 4, 0, 0, 0]
};

moveZeroEnd_Optimal([1, 2, 0, 1, 0, 4, 0]);

/*

# Optimization Journey: Moving All Zeros to the End of an Array in JavaScript

When cleaning data or optimizing algorithms, you often need to reposition elements within a dataset without altering their relative order. A classic problem that showcases this perfectly is **moving all zeros to the end of an array**.
Whether you're prepping for a coding round or just trying to write cleaner logic, seeing how this problem scales from standard helper arrays to a **Two-Pointer in-place swap** is a fantastic study in resource optimization.

## The Goal

Given an array of integers, push all the zeros to the back of the line while keeping the non-zero elements in their exact relative positions.

 * **Input Array:** [1, 2, 0, 1, 0, 4, 0]

 * **Expected Output:** [1, 2, 1, 4, 0, 0, 0]

## Approach 1: The Brute Force (Double Cache)

The most natural intuition is to split the numbers up into separate boxes. We can create one temporary array for normal numbers and another temporary array just for zeros, then stitch them together at the end.

```javascript
const moveZeroEnd_Brute = (arr) => {
    let tempArr = [];      
    let tempArrZero = [];

    // Separate zeros and non-zeros
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            tempArr.push(arr[i]);
        } else {
            tempArrZero.push(arr[i]);
        }
    }

    // Combine them back together
    for (let z = 0; z < tempArrZero.length; z++) {
        tempArr.push(tempArrZero[z]);
    }

    console.log(tempArr); // Output: [1, 2, 1, 4, 0, 0, 0]
};

```

### The Complexity:

 * **Time Complexity:** **O(n)** because we iterate through the dataset to separate and recombine.

 * **Space Complexity:** **O(n)** because we are holding copies of the array elements inside two temporary containers.

## Approach 2: The Modern JavaScript Way (Filter & Fill)

If you want to achieve the same logic as the brute force method but write highly declarative, readable production code, you can leverage native array methods like .filter() and .fill().

```javascript
const moveZeroEnd_Better = (arr) => {
    // Extract only the non-zero values
    let nonZeros = arr.filter(x => x !== 0);

    // Calculate how many zeros were left behind
    let zeroCount = arr.length - nonZeros.length;

    // Create a new array filled with that many zeros
    let zeros = new Array(zeroCount).fill(0);

    // Merge them using the spread operator
    let result = [...nonZeros, ...zeros];
    console.log(result); // Output: [1, 2, 1, 4, 0, 0, 0]
};

```

### The Complexity:

 * **Time Complexity:** **O(n)**. Filtering takes a linear pass, and filling creates a secondary sequence.

 * **Space Complexity:** **O(n)**. While concise, JavaScript builds completely new arrays behind the scenes to serve the final spread operation.

## Approach 3: The Optimal Winner (Two-Pointer In-Place Swap)

To reach top-tier optimization, we must get rid of auxiliary space. An interviewer will ask: *"Can you do this in a single pass without allocating any extra arrays?"*

Yes, by using a **Two-Pointer Strategy**. We track the index of the first available zero using a pointer j. Then, a second pointer p scans ahead. The moment p hits a non-zero number, we swap their values and push j forward.

```javascript
const moveZeroEnd_Optimal = (arr) => {
    let n = arr.length;
    let j = -1;

    // Step 1: Find the index of the very first zero
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            j = i;
            break;
        }
    }

    // Edge Case: If there are no zeros at all, we are done!
    if (j === -1) return arr;

    // Step 2: Look for non-zero elements to swap with our zero pointer
    for (let p = j + 1; p < n; p++) {
        if (arr[p] !== 0) {
            // Modern ES6 Destructuring Swap
            [arr[p], arr[j]] = [arr[j], arr[p]]; 
            j++; // Move the zero pointer forward to the next zero placeholder
        }
    }

    console.log(arr); // Output: [1, 2, 1, 4, 0, 0, 0]
};

```

### Why this is the gold standard:

 * **Time Complexity:** **O(n)**. The first loop stops exactly where the first zero is found, and the second loop picks up right after it, processing the remainder of the array once.

 * **Space Complexity:** **O(1)** (Constant Space). It performs all transformations directly inside the original array reference, maintaining the ultimate memory footprint.

## Summary of Approaches

| Metric | Brute Force (Loops) | Better (Built-in Methods) | Optimal (Two-Pointer) |
|---|---|---|---|
| **Time Complexity** | O(n) | O(n) | **O(n)** |
| **Space Complexity** | O(n) | O(n) | **O(1) (In-Place)** |
| **Readability** | Verbose | Very High | High |

*Do you prioritize built-in readability shortcuts like .filter() in your daily projects, or do you always default to maximum memory efficiency? Let's talk architecture in the comments below! If this two-pointer walkthrough clicked for you, hit that **Clap button 👏**!*


*/