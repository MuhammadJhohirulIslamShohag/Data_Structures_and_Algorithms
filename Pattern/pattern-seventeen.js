/*
 Pattern Seventeen 
*/

const patternSeventeen = (n) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    let breakpoint = i; // middle point index

    for (let j = 0; j < n - i - 1; j++) {
      line += ' ';
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      if (j <= breakpoint) {
        line += String.fromCharCode(65 + j);       // A, B, C...
      } else {
        line += String.fromCharCode(65 + (2*i - j)); // ...C, B, A
      }
    }

    for (let j = 0; j < n - i - 1; j++) {
      line += ' ';
    }

    console.log(line);
  }
};

patternSeventeen(5);

# Mastering Pattern Printing in JavaScript: The Alphabet Pyramid (With Peak Breakdown)

Welcome back! Today, we are conquering one of the most intellectually rewarding and elegant designs in grid-based logic: the **Alphabet Pyramid** (or Palindromic Character Triangle).
This problem brings together everything we've learned so far: handling padding spaces, scaling structural width dynamically, and building a multi-directional character index switcher based on a central pivot point.

## The Goal

We want to write a JavaScript function that takes a number n and prints a centered pyramid of letters. The characters expand forward alphabetically until they hit the middle index of the row, then seamlessly reverse down back to 'A'. For n = 5, the pyramid maps out like this:

```text
    A    
   ABA   
  ABCBA  
 ABCDCBA 
ABCDEDCBA

```
### The Pattern Logic

To keep our code incredibly organized, let's break down any single horizontal line into three sequential steps: **Leading Blank Spaces + Symmetrical Letters + Trailing Blank Spaces**.

Let's dissect the components for each row if we are rendering a pyramid where n = 5:

 * **Row 1 (i = 0):** Prints **4 spaces**, then letters up to index 0 (A), then **4 spaces**. Total items: 1.

 * **Row 2 (i = 1):** Prints **3 spaces**, then letters up to index 1 (ABA), then **3 spaces**. Total items: 3.

 * **Row 3 (i = 2):** Prints **2 spaces**, then letters up to index 2 (ABCBA), then **2 spaces**. Total items: 5.

 * **Row 5 (i = 4):** Prints **0 spaces**, then letters up to index 4 (ABCDEDCBA), then **0 spaces**. Total items: 9.

From this layout, we derive three mathematical truths:

 1. **The Padding Spaces:** Every row requires exactly n - i - 1 spaces on both its left and right sides to stay perfectly balanced.

 2. **The Column Cap:** The total quantity of characters inside any given row follows the odd-number sequence formula: 2 \times i + 1.

 3. **The Breakpoint Check:** The alphabetic character sequence counts up for the first half of the line. Once our column index j surpasses the mid-row breakpoint (which is exactly equal to our current row index i), it must reverse its path and decrement back down to 0.

## The JavaScript Code

Here is the clean, nested-loop implementation using a mathematical index mirror trick:

```javascript
const patternSeventeen = (n) => {
  // Outer loop: Tracks rows sequentially using 0-based indexing (0 up to n-1)
  for (let i = 0; i < n; i++) {
    let line = '';
    let breakpoint = i; // The peak of the row where the alphabet flips direction

    // 1. Left Padding Loop: Appends empty spaces to push letters inward
    for (let j = 0; j < n - i - 1; j++) {
      line += ' ';
    }

    // 2. Central Content Loop: Handles the palindromic alphabet string
    for (let j = 0; j < 2 * i + 1; j++) {
      if (j <= breakpoint) {
        // Ascending Phase: Map column index directly into ASCII values
        line += String.fromCharCode(65 + j);
      } else {
        // Descending Phase: Mirror the calculation back down using our row index
        line += String.fromCharCode(65 + (2 * i - j));
      }
    }

    // 3. Right Padding Loop: Appends structural balancing trailing spaces
    for (let j = 0; j < n - i - 1; j++) {
      line += ' ';
    }

    console.log(line); // Output the fully formatted symmetric pyramid row
  }
};

// Call the function to print a 5-story alphabet pyramid
patternSeventeen(5);


```
## Detailed Step-by-Step Breakdown

### 1. Determining the Line Width

```javascript
for (let j = 0; j < 2 * i + 1; j++)

```

This loop ensures that row i = 2 runs exactly 2(2) + 1 = 5 iterations, matching the width required to print five characters (A, B, C, B, A).

### 2. Symmetrical Mirror Math

```javascript
if (j <= breakpoint) { line += String.fromCharCode(65 + j); }
else { line += String.fromCharCode(65 + (2 * i - j)); }

```

Let's see what happens on **Row i = 2** (where breakpoint = 2) as j loops from 0 to 4:

 * j = 0: Under peak (0 <= 2) \rightarrow 65 + 0 = 65 \rightarrow **'A'**

 * j = 1: Under peak (1 <= 2) \rightarrow 65 + 1 = 66 \rightarrow **'B'**

 * j = 2: At peak (2 <= 2) \rightarrow 65 + 2 = 67 \rightarrow **'C'**

 * j = 3: Past peak (3 > 2) \rightarrow 65 + (2*2 - 3) = 65 + 1 = 66 \rightarrow **'B'**

 * j = 4: Past peak (4 > 2) \rightarrow 65 + (2*2 - 4) = 65 + 0 = 65 \rightarrow **'A'**

By utilizing the equation 2 * i - j, the code effortlessly mirrors the indices backward without requiring extra loops or variable mutation blocks.

## 📊 Behind the Scenes: The Dry Run

Let’s look at how the variables coordinate during execution when patternSeventeen(5) is processed:

| Row Index (i) | Leading Spaces (n-i-1) | Content Loop Iterations (2*i+1) | Peak Target (breakpoint) | Letter Sequence Built | Compiled Final Output String |
|---|---|---|---|---|---|
| **0** | 4 | 1 | 0 | A | "    A    " |
| **1** | 3 | 3 | 1 | A -> B -> A | "   ABA   " |
| **2** | 2 | 5 | 2 | A -> B -> C -> B -> A | "  ABCBA  " |
| **3** | 1 | 7 | 3 | A -> B -> C -> D -> C -> B -> A | " ABCDCBA " |
| **4** | 0 | 9 | 4 | A -> B -> C -> D -> E -> D -> C -> B -> A | "ABCDEDCBA" |
