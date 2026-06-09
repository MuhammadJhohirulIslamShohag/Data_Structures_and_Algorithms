/*
  Pattern Twenty Two
*/

const patternTwentyTwo = (n) => {
  for (let i = 0; i < 2*n-1; i++) {
    let line = '';
    for (let j = 0; j < 2*n-1; j++) {
      let top   = i;
      let left  = j;
      let right = (2*n - 2) - j;
      let down  = (2*n - 2) - i;
      line += (n - Math.min(Math.min(top, down), Math.min(left, right)));
    }
    console.log(line);
  }
};

patternTwentyTwo(4);

# Mastering Pattern Printing in JavaScript: The Concentric Number Square (The Matrix Concentric Ring)

Welcome to the grand finale of our matrix pattern series! Today, we are conquering the ultimate test of logical grid mapping:

**Pattern Twenty-Two: The Concentric Number Square**.

This pattern regularly catches developers off guard because it seems like you need to keep updating numbers dynamically ring-by-ring. Instead of treating it like an ongoing countdown timer, we will look at this puzzle using **distance vectors** to calculate the number on any coordinate instantly!

## The Goal

We want to write a JavaScript function that takes a number n and prints a series of shrinking concentric squares embedded inside each other. If n = 4, the total grid matrix expands to a square width of 2 \times 4 - 1 = 7 units:

```text
4444444
4333334
4322234
4321234
4322234
4333334
4444444

```

### The Pattern Logic

If you try to track the lines iteratively from top to bottom, the code gets messy quickly. Let's look at the shape as a **2D Coordinate Map**.

Think of every item on the grid like a tile surrounded by four walls:

 * **top**: How many steps away is this tile from the roof edge (i)?

 * **left**: How many steps away is this tile from the left edge (j)?

 * **down**: How many steps away is this tile from the bottom edge ((2*n - 2) - i)?

 * **right**: How many steps away is this tile from the right edge ((2*n - 2) - j)?
The core trick to this pattern is finding the

 **minimum distance** to any of those four walls. The closest wall dictates which ring the tile belongs to. Subtracting that minimum distance from our starting scale value n gives us our target print number!

## The JavaScript Code

Your original solution uses this exact distance vector math. Here is the code formatted for readability:

```javascript
const patternTwentyTwo = (n) => {
  // Compute the total length boundary size of our grid matrix
  const matrixSize = 2 * n - 1;

  // Outer loop: Steps through the rows (i from 0 up to matrixSize - 1)
  for (let i = 0; i < matrixSize; i++) {
    let line = '';

    // Inner loop: Steps through the columns (j from 0 up to matrixSize - 1)
    for (let j = 0; j < matrixSize; j++) {
      // Calculate individual distance vectors to all 4 outer walls
      let top   = i;
      let left  = j;
      let right = (matrixSize - 1) - j;
      let down  = (matrixSize - 1) - i;

      // Find the absolute closest boundary wall to our current location
      let minDistance = Math.min(Math.min(top, down), Math.min(left, right));

      // The Golden Rule: Subtract the distance index from our peak value n
      line += (n - minDistance);
    }

    console.log(line); // Render the complete concentric ring section
  }
};

// Call the function to display a 4-ring concentric square
patternTwentyTwo(4);

```

## Detailed Step-by-Step Breakdown

### 1. Defining the Grid Space

```javascript
const matrixSize = 2 * n - 1;

```

For an input of n = 4, our grid evaluates to a width and height of 2(4) - 1 = 7. Both the outer loop and inner loop will run from index 0 through 6.

### 2. The Distance Calculations

```javascript
let right = (2*n - 2) - j;
let down  = (2*n - 2) - i;

```

Because we are using 0-based indexing, the index of the absolute last row or column is always matrixSize - 1, which simplifies algebraically to 2*n - 2. Subtracting our current coordinates tells us exactly how close we are to the right and bottom edges.

### 3. Finding the Closest Wall

```javascript
let minDistance = Math.min(Math.min(top, down), Math.min(left, right));

```

Let’s see how this works at coordinate **(i = 1, j = 3)** in a 4-ring grid:

 * top distance = 1
 * left distance = 3
 * down distance = 6 - 1 = 5
 * right distance = 6 - 3 = 3

The minimum value among (1, 5, 3, 3) is **1**. Our code computes n - minDistance \rightarrow 4 - 1 = 3. If you look at row 2, column 4 of the pattern, the value is indeed 3.

## 📊 Behind the Scenes: The Dry Run Map

Let’s look at how the minDistance map coordinates translate directly into our final number values:

### Min-Distance Vector Map (minDistance)

This map displays the calculated minimum distance from any given cell to its closest outer edge:

```text
0 0 0 0 0 0 0
0 1 1 1 1 1 0
0 1 2 2 2 1 0
0 1 2 3 2 1 0
0 1 2 2 2 1 0
0 1 1 1 1 1 0
0 0 0 0 0 0 0

```

### Final Subtract Inversion Result (n - minDistance)

Subtracting each of those distance entries from n = 4 gives us our output:

```text
4 4 4 4 4 4 4
4 3 3 3 3 3 4
4 3 2 2 2 3 4
4 3 2 1 2 3 4
4 3 2 2 2 3 4
4 3 3 3 3 3 4
4 4 4 4 4 4 4

```