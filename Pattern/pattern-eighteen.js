/*
 Pattern Eighteen 
*/

const patternEighteen = (n) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j <= i; j++) {
      line += String.fromCharCode(65+(n-1-i+j))
    }
    console.log(line);
  }
};

patternEighteen(5);

# Mastering Pattern Printing in JavaScript: The Sliding Alphabet Triangle

Welcome back! Today, we are diving into **Pattern Eighteen: The Sliding Alphabet Triangle**.

Unlike previous configurations where rows strictly started with 'A' or locked onto a single letter, this pattern introduces a shifting starting point. As we move down the rows, the starting character slides backward through the alphabet while the columns climb forward.

## The Goal

We want to write a JavaScript function that takes a number n and prints an increasing triangle of letters. If n = 5, the maximum letter reached is the 5th letter of the alphabet ('E'), and each row starts one step lower than the previous one:

```text
E
D E
C D E
B C D E
A B C D E

```

### The Pattern Logic

Let’s break down the mechanics row by row to see how the character offsets behave:

 * **Row 1 (i = 0):** Loops 1 time \rightarrow Starts at 'E'

 * **Row 2 (i = 1):** Loops 2 times \rightarrow Starts at 'D', moves to 'E'

 * **Row 3 (i = 2):** Loops 3 times \rightarrow Starts at 'C', moves up to 'E'

 * **Row 5 (i = 4):** Loops 5 times \rightarrow Starts at 'A', moves up to 'E'

We can observe two core requirements:

 1. **The Row Base Value:** The very first letter of any row i is determined by counting down from the maximum character code. Mathematically, the starting point for a row is defined by the formula: n - 1 - i.

 2. **The Column Progression:** Within a row, the letters increment sequentially. We can achieve this progression smoothly by adding our inner column loop index j directly to that row's starting value.

## The JavaScript Code

Here is your clean, descriptive nested-loop implementation using dynamic ASCII mapping:

```javascript
const patternEighteen = (n) => {
  // Outer loop: Tracks rows sequentially using 0-based indexing (from 0 up to n-1)
  for (let i = 0; i < n; i++) {
    let line = ''; // Reset the row string container

    // Inner loop: Controls the column growth constraint (runs exactly 'i + 1' times)
    for (let j = 0; j <= i; j++) {
      // Step 1: Calculate the shifting row start character code using (n - 1 - i)
      // Step 2: Add 'j' to advance forward through the alphabet across columns
      let asciiOffset = (n - 1 - i) + j;
      
      line += String.fromCharCode(65 + asciiOffset);
    }

    console.log(line); // Output the finished alphabetic sequence
  }
};

// Call the function to print a 5-story sliding alphabet triangle
patternEighteen(5);

```

## Detailed Step-by-Step Breakdown

### 1. Determining the Row Starting Letter
```javascript
let asciiOffset = (n - 1 - i) + j;

```

Let's analyze how this math calculates the initial letter for each row when n = 5 and the inner loop begins (j = 0):

 * **When i = 0 (Row 1):** 5 - 1 - 0 = 4. Adding base code 65 + 4 = 69 \rightarrow **'E'**

 * **When i = 1 (Row 2):** 5 - 1 - 1 = 3. Adding base code 65 + 3 = 68 \rightarrow **'D'**

 * **When i = 4 (Row 5):** 5 - 1 - 4 = 0. Adding base code 65 + 0 = 65 \rightarrow **'A'**

### 2. Handling Column Progression

As the inner loop variable j increments, it counters the negative impact of row index i. For instance, on row i = 2 (starting at 'C'), when j progresses from 0 to 1 to 2, the calculation yields offsets 2, 3, and 4 respectively—mapping directly to **'C'**, **'D'**, and **'E'**.

## 📊 Behind the Scenes: The Dry Run
Let’s track how the computer evaluates the inner expression step-by-step for patternEighteen(5):

| Row Index (i) | Inner Values of j | Dynamic Offset Formula (5 - 1 - i) + j | Calculated ASCII Codes | Final String Output (line) |
|---|---|---|---|---|
| **0** | 0 | 4 + 0 = 4 | 69 | "E" |
| **1** | 0, 1 | 3 + 0 = 3, 3 + 1 = 4 | 68, 69 | "DE" |
| **2** | 0, 1, 2 | 2 + 0 = 2, 2 + 1 = 3, 2 + 2 = 4 | 67, 68, 69 | "CDE" |
| **3** | 0, 1, 2, 3 | 1 + 0 = 1, 1 + 1 = 2, 1 + 2 = 3, 1 + 3 = 4 | 66, 67, 68, 69 | "BCDE" |
| **4** | 0, 1, 2, 3, 4 | 0 + 0 = 0, 0 + 1 = 1, ... , 0 + 4 = 4 | 65, 66, 67, 68, 69 | "ABCDE" |

