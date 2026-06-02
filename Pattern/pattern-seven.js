/*
 Pattern Seven 
*/

const patternSeven= (n) => {
  for(let i = 0; i <= n; i++){
    let line = '';
    for(let j = 0; j < n-i-1; j++){
      line += ' '
    }
    for(let j = 0; j < 2*i+1; j++){
      line += '*'
    }
    for(let j = 0; j < n-i-1; j++){
      line += ' '
    }
    console.log(line);
  }

}
patternSeven(5)

```markdown
# Mastering Pattern Printing in JavaScript: The Star Pyramid (Triangle)

Welcome back! Today, we are tackling one of the most famous and visually satisfying problems in programming logic: the **Centered Star Pyramid**. 

Unlike right-angled triangles that align flat against the left margin, a symmetric pyramid introduces a brand-new element that you must explicitly account for in your code: **leading spaces**.

Let’s dive into how to orchestrate spaces and stars to build a perfect pyramid!

---

## The Goal
We want to write a JavaScript function that takes a number `n` and prints a centered triangle of stars. For `n = 5`, the expected output looks like this:

```text
    * *** ***** ******* *********

```

### The Pattern Logic
To build this, we have to treat each row as a combination of three distinct segments: **Spaces + Stars + Spaces**.
Let's look at the mathematical components per line for n = 5:
 * **Row 1 (i = 0):** 4 spaces, 1 star, 4 spaces
 * **Row 2 (i = 1):** 3 spaces, 3 stars, 3 spaces
 * **Row 3 (i = 2):** 2 spaces, 5 stars, 2 spaces
 * **Row 4 (i = 3):** 1 space, 7 stars, 1 space
 * **Row 5 (i = 4):** 0 spaces, 9 stars, 0 spaces
From this breakdown, we can deduce two core algebraic formulas:
 1. **The Space Formula:** The number of leading (and trailing) spaces drops by 1 per line, calculated as n - i - 1.
 2. **The Star Formula:** The number of stars grows by odd sequences (1, 3, 5, 7, 9), calculated as 2 * i + 1.
## The JavaScript Code
Here is the clean implementation featuring three independent inner loops inside a main row container:
```javascript
const patternSeven = (n) => {
  // Outer loop: Controls the current row level (i = 0 up to n-1)
  for (let i = 0; i < n; i++) {
    let line = ''; // Start with a blank canvas for this row

    // 1. Inner Loop for Leading Spaces
    for (let j = 0; j < n - i - 1; j++) {
      line += ' ';
    }

    // 2. Inner Loop for Center Stars
    for (let j = 0; j < 2 * i + 1; j++) {
      line += '*';
    }

    // 3. Inner Loop for Trailing Spaces (Optional for console display, but great for grid structure)
    for (let j = 0; j < n - i - 1; j++) {
      line += ' ';
    }

    console.log(line); // Render the final compiled row
  }
}

// Call the function to print a 5-story pyramid
patternSeven(5);

```
*(Note: Your original snippet included i <= n in the outer loop, which accidentally generated a 6th empty trailing line. Changing the condition to i < n fixes this seamlessly!)*
## Detailed Step-by-Step Breakdown
### 1. The Leading Space Component
```javascript
for (let j = 0; j < n - i - 1; j++) { line += ' '; }

```
Before printing a single star, we must push the star toward the center by adding spaces. When i = 0 and n = 5, this loop executes 5 - 0 - 1 = 4 times, keeping our peak star nicely centered.
### 2. The Odd-Number Star Component
```javascript
for (let j = 0; j < 2 * i + 1; j++) { line += '*'; }

```
This loop dictates the thickness of our pyramid. By taking our row index i, multiplying it by 2, and adding 1, we ensure that the inner loop always prints an odd number of stars (1, 3, 5...), preventing the pyramid from shifting off-center.
### 3. The Trailing Spaces
```javascript
for (let j = 0; j < n - i - 1; j++) { line += ' '; }

```

This loop mirrors your leading spaces block. While trailing blank spaces aren't always visible in basic console output, including them ensures your string shapes a perfectly balanced symmetrical grid, which is crucial when exporting text blocks to files or HTML layouts.


## 📊 Behind the Scenes: The Dry Run
Let’s trace exactly how the variables interact when patternSeven(5) executes row-by-row:
| Outer Loop Index (i) | Space Limit (n - i - 1) | Star Limit (2 * i + 1) | Formed Row Output |
|---|---|---|---|
| **0** (Row 1) | 5 - 0 - 1 = 4 | 2 * 0 + 1 = 1 | "    * " |
| **1** (Row 2) | 5 - 1 - 1 = 3 | 2 * 1 + 1 = 3 | "   *** " |
| **2** (Row 3) | 5 - 2 - 1 = 2 | 2 * 2 + 1 = 5 | "  ***** " |
| **3** (Row 4) | 5 - 3 - 1 = 1 | 2 * 3 + 1 = 7 | " ******* " |
| **4** (Row 5) | 5 - 4 - 1 = 0 | 2 * 4 + 1 = 9 | "*********" |



