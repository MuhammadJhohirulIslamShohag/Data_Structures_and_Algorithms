/*
 Pattern Eight
*/

const patternEight= (n) => {
  for(let i = 0; i < n; i++){
    let line = '';
    for(let j = 0; j < i; j++){
      line += ' '
    }
    for(let j = 0; j < (2*n)-(2*i+1); j++){
      line += '*'
    }
    for(let j = 0; j < i; j++){
      line += ' '
    }
    console.log(line);
  }

}
patternEight(5)


```markdown
# Mastering Pattern Printing in JavaScript: The Inverted Star Pyramid

Welcome back to our pattern printing series! In our last post, we learned how to align spaces and stars to create a perfectly centered upward pyramid. Today, we are taking that concept and turning it upside down to create the **Inverted Star Pyramid**.

If you understood the spacing logic from the previous pattern, this one is simply about reversing those relationships. Let's break down how to handle the decreasing math step-by-step!

---

## The Goal
We want to write a JavaScript function that takes a number `n` and prints a centered, upside-down triangle of stars. For `n = 5`, the expected output looks exactly like this:

```text
*********
 *******
  *****
   ***
    *

```

### The Pattern Logic
Just like the upright pyramid, each horizontal line is a combination of three distinct blocks: **Spaces + Stars + Spaces**.
Let’s analyze the layout of each row when n = 5:
 * **Row 1 (i = 0):** 0 spaces, 9 stars, 0 spaces
 * **Row 2 (i = 1):** 1 space, 7 stars, 1 space
 * **Row 3 (i = 2):** 2 spaces, 5 stars, 2 spaces
 * **Row 4 (i = 3):** 3 spaces, 3 stars, 3 spaces
 * **Row 5 (i = 4):** 4 spaces, 1 star, 4 spaces
We can derive two clean formulas from this visualization:
 1. **The Space Formula:** The number of leading spaces starts at 0 and increases by 1 with each row. This directly matches our row index: i.
 2. **The Star Formula:** The number of stars starts at maximum thickness and decreases by 2 each line. Mathematically, this maps perfectly to: (2 * n) - (2 * i + 1).

## The JavaScript Code
Here is the clean, nested-loop implementation using JavaScript:

```javascript
const patternEight = (n) => {
  // Outer loop: Controls the current row (i = 0 up to n - 1)
  for (let i = 0; i < n; i++) {
    let line = ''; // Clear the canvas for the current row

    // 1. Inner Loop for Leading Spaces
    for (let j = 0; j < i; j++) {
      line += ' ';
    }

    // 2. Inner Loop for Center Stars
    for (let j = 0; j < (2 * n) - (2 * i + 1); j++) {
      line += '*';
    }

    // 3. Inner Loop for Trailing Spaces
    for (let j = 0; j < i; j++) {
      line += ' ';
    }

    console.log(line); // Print the fully built inverted row
  }
}

// Call the function to print a 5-row inverted pyramid
patternEight(5);

```
## Detailed Step-by-Step Breakdown

### 1. The Outer Row Tracker
```javascript
for (let i = 0; i < n; i++) { ... }

```

The outer loop manages our rows. With n = 5, i loops through 0, 1, 2, 3, 4. This guides our logic dynamically from the wide top row down to the single-star point at the bottom.

### 2. The Growing Spaces
```javascript
for (let j = 0; j < i; j++) { line += ' '; }

```
Because the pyramid is inverted, the top row needs zero padding, and subsequent rows need increasingly more padding to push the stars inward. By setting our condition to j < i, the inner loop naturally prints exactly i spaces per row (0 spaces on row 0, 1 space on row 1, etc.).

### 3. The Shrinking Star Formula

```javascript
for (let j = 0; j < (2 * n) - (2 * i + 1); j++) { line += '*'; }

```

This formula is the mathematical backbone of the inversion logic. Let's plug in n = 5 and see how it calculates the number of stars for each row:
 * **When i = 0:** (2 * 5) - (2 * 0 + 1) \rightarrow 10 - 1 = 9 stars.
 * **When i = 1:** (2 * 5) - (2 * 1 + 1) \rightarrow 10 - 3 = 7 stars.
 * **When i = 4:** (2 * 5) - (2 * 4 + 1) \rightarrow 10 - 9 = 1 star.


## 📊 Behind the Scenes: The Dry Run
Let’s trace exactly how the computer calculates and constructs the grid strings for patternEight(5):

| Outer Loop Index (i) | Space Boundary (j < i) | Star Formula Math ((2*n) - (2*i+1)) | Assembled String Layout (line) |
|---|---|---|---|
| **0** (Row 1) | 0 spaces | 10 - 1 = 9 stars | "*********" |
| **1** (Row 2) | 1 space | 10 - 3 = 7 stars | " ******* " |
| **2** (Row 3) | 2 spaces | 10 - 5 = 5 stars | "  ***** " |
| **3** (Row 4) | 3 spaces | 10 - 7 = 3 stars | "   *** " |
| **4** (Row 5) | 4 spaces | 10 - 9 = 1 star | "    * " |


