/*
Pattern Nine
*/

const patternNinePartOne= (n) => {
  for(let i = 0; i < n; i++){
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

const patternNinePartTwo= (n) => {
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
patternNinePartOne(5)
patternNinePartTwo(5)


```markdown
# Mastering Pattern Printing in JavaScript: The Diamond Star Pattern

Welcome back! In our previous two tutorials, we learned how to build an upright star pyramid and an inverted star pyramid. Today, we are putting those two concepts together to create something beautiful: the **Symmetrical Diamond Pattern**.

By combining independent components into a modular solution, complex shapes become incredibly easy to build. Let’s look at how to merge our logic into a single cohesive blog post!

---

## The Goal
We want to write a JavaScript program that takes a number `n` and prints a perfectly balanced diamond shape. For `n = 5`, the expected output combines an upright 5-row pyramid and an inverted 5-row pyramid:

```text
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *

```

### The Pattern Logic
The secret to solving advanced programming shapes is **modularization**. Instead of trying to write a massive, confusing loop structure, we break the diamond down into two clear, distinct halves:

 1. **The Upper Half:** An upright pyramid where spaces decrease (n - i - 1) and stars increase (2 * i + 1).
 2. **The Lower Half:** An inverted pyramid where spaces increase (i) and stars decrease ((2 * n) - (2 * i + 1)).

## The JavaScript Code
Here is the clean, multi-function approach to generating this pattern cleanly:

```javascript
// Function 1: Renders the top upright pyramid
const patternNinePartOne = (n) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    // Leading Spaces
    for (let j = 0; j < n - i - 1; j++) {
      line += ' ';
    }
    // Growing Center Stars
    for (let j = 0; j < 2 * i + 1; j++) {
      line += '*';
    }
    // Trailing Spaces
    for (let j = 0; j < n - i - 1; j++) {
      line += ' ';
    }
    console.log(line);
  }
}


// Function 2: Renders the bottom inverted pyramid
const patternNinePartTwo = (n) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    // Growing Leading Spaces
    for (let j = 0; j < i; j++) {
      line += ' ';
    }
    // Shrinking Center Stars
    for (let j = 0; j < (2 * n) - (2 * i + 1); j++) {
      line += '*';
    }
    // Trailing Spaces
    for (let j = 0; j < i; j++) {
      line += ' ';
    }
    console.log(line);
  }
}

// Execute both functions together to form the Diamond
patternNinePartOne(5);
patternNinePartTwo(5);

```

## Detailed Step-by-Step Breakdown
### 1. The Power of Modular Functions
Instead of packing all this loop logic into a single messy loop, we create two separate utility workers: patternNinePartOne and patternNinePartTwo. Calling them back-to-back causes the terminal to seamlessly stack the shapes on top of each other.

### 2. Passing the Baton (The Horizon Line)
When patternNinePartOne(5) finishes running, its final row (i = 4) yields 0 spaces and 9 stars (2 * 4 + 1).
Immediately after, patternNinePartTwo(5) begins execution at row i = 0. Its very first row outputs 0 spaces and 9 stars (10 - 1). This forms a seamless, dense mirror connection directly in the center of your diamond.

## 📊 Behind the Scenes: The Structural Mapping
Here is how the computer tracks and outputs your grid strings side-by-side as your functions execute sequentially:
| Executing Block | Outer Index (i) | Space Formula | Star Formula | Row Layout Result |
|---|---|---|---|---|
| **Part One (Upward)** | 0 | 5 - 0 - 1 = 4 | 2 * 0 + 1 = 1 | "    * " |
|  | 1 | 5 - 1 - 1 = 3 | 2 * 1 + 1 = 3 | "   *** " |
|  | 2 | 5 - 2 - 1 = 2 | 2 * 2 + 1 = 5 | "  ***** " |
|  | 3 | 5 - 3 - 1 = 1 | 2 * 3 + 1 = 7 | " ******* " |
|  | 4 | 5 - 4 - 1 = 0 | 2 * 4 + 1 = 9 | "*********" |
| **Part Two (Inverted)** | 0 | 0 | 10 - 1 = 9 | "*********" |
|  | 1 | 1 | 10 - 3 = 7 | " ******* " |
|  | 2 | 2 | 10 - 5 = 5 | "  ***** " |
|  | 3 | 3 | 10 - 7 = 3 | "   *** " |
|  | 4 | 4 | 10 - 9 = 1 | "    * " |


