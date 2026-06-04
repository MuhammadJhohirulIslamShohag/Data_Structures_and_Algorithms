/*
 Pattern Thirteen 
*/

const patternThirteen= (n) => {
  let number = 1
  for(let i = 1; i <= n; i++){
    let line = '';
    for(let j = 1; j <= i; j++){
      line += number + ' '
      number+= 1
    }
    console.log(line);
  }

}
patternThirteen(5)


```markdown
# Mastering Pattern Printing in JavaScript: Floyd's Triangle (Continuous Numbering)

Welcome back! Today, we are exploring a famous mathematical grid structure named after computer scientist Robert Floyd: **Floyd's Triangle**. 

Unlike our previous numerical patterns where numbers reset to `1` or matched the specific row index at the start of every line, this pattern maintains a **continuous tracking state**. The numbers keep climbing sequentially from the top-left peak all the way down to the bottom-right corner!

---

## The Goal

We want to write a JavaScript function that takes a number `n` and prints a triangle of consecutive integers. For `n = 5`, the expected output contains exactly 5 rows with numbers tracking up continuously from 1 to 15:

```text
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 

```

### The Pattern Logic

Let’s break down the mechanics of the shape:

 * **Row 1:** Prints 1 item.
 * **Row 2:** Prints 2 items.
 * **Row 3:** Prints 3 items.
 * **Row 5:** Prints 5 items.

The structural grid is identical to our classic right-angled triangle where the column limit matches the row index (j <= i). However, the core difference lies in the variable behavior:

**The number being printed never stops incrementing.**

To achieve this, we cannot rely on our loop counters (i or j) to supply our value. We must declare an independent tracking variable outside our row loop that persists its value as the system moves from row to row.

## The JavaScript Code
Here is the clean, nested-loop implementation using a persistent state variable:

```javascript
const patternThirteen = (n) => {
  // Declare a global counter variable that will never reset during loop runs
  let number = 1;

  // Outer loop: Controls the row layout (from row 1 up to n)
  for (let i = 1; i <= n; i++) {
    let line = ''; // Clear string container for the current row

    // Inner loop: Handles columns, printing 'i' items on row 'i'
    for (let j = 1; j <= i; j++) {
      line += number + ' '; // Append current number value followed by a space
      number += 1;          // Immediately increment the global counter by 1
    }

    console.log(line); // Render completed line to the screen
  }
}


// Execute the function to see 5 lines of consecutive numbering
patternThirteen(5);

```
## Detailed Step-by-Step Breakdown

### 1. The Persistent State Variable

```javascript
let number = 1;

```

By instantiating our number container *outside* the loop context, we prevent the variable from being wiped out or reassigned when loops re-initialize. It remembers its value across completely different row steps!

### 2. Standard Structural Constraints

```javascript
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) { ... }
}

```

The nested loops handle row sizing elegantly. When on row i = 3, the inner loop runs precisely 3 times. This shapes the triangular slope perfectly.

### 3. Print and Mutate

```javascript
line += number + ' ';
number += 1;

```

During each execution step of the inner loop, two things happen: the string grabs whatever value number is currently storing, and then number += 1 increments that value. When row 2 finishes printing 2 and 3, number holds a value of 4. When row 3 starts up, it immediately picks up right where it left off, appending 4!


## 📊 Behind the Scenes: The Dry Run
Let's watch how the persistent number tracking variable evolves row by row as patternThirteen(5) processes the grid:

| Outer Loop Index (i) | Inner Loop Space (j <= i) | Appended Values to Row | Global Value of number at Row End | Finished Row String (line) |
|---|---|---|---|---|
| **1** (Row 1) | j <= 1 | 1 | 2 | "1 " |
| **2** (Row 2) | j <= 2 | 2, 3 | 4 | "2 3 " |
| **3** (Row 3) | j <= 3 | 4, 5, 6 | 7 | "4 5 6 " |
| **4** (Row 4) | j <= 4 | 7, 8, 9, 10 | 11 | "7 8 9 10 " |
| **5** (Row 5) | j <= 5 | 11, 12, 13, 14, 15 | 16 | "11 12 13 14 15 " |
