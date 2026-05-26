/*
  Pattern Number Two
*/

/*

# Mastering Pattern Printing in JavaScript: The Right-Angled Triangle

If you are diving into data structures, algorithms, or just trying to wrap your head around loops in JavaScript, you will inevitably run into pattern printing problems.

While they might look like simple visual exercises, pattern problems are actually fantastic tools for training your brain to think logically and mastering the art of nested loops.

In this post, we are going to break down how to create a classic Right-Angled Triangle Star Pattern step-by-step.

## The Goal
We want to write a JavaScript function that takes a number n and prints a triangle of stars (*) with n rows. For example, if n = 5, our output should look like this:

```text
* * * * * * * * * * * * * * * ```

### The Pattern Logic
Before looking at the code, let's analyze the relationship between the rows and the stars:
* **Row 1:** 1 star
* **Row 2:** 2 stars
* **Row 3:** 3 stars
* ...and so on.

The rule is simple: **The number of stars in any given row matches the row's position.**

---

## The JavaScript Code

Here is the clean, modern JavaScript function using an arrow function and nested loops to achieve this:

```javascript
const printTrianglePattern = (n) => {
  // Outer loop: Controls the rows
  for (let i = 0; i < n; i++) {
    let line = ''; // Reset the line for the current row
    
    // Inner loop: Controls the stars in the current row
    for (let j = 0; j <= i; j++) {
      line += '*' + ' '; // Append a star and a space
    }
    
    console.log(line); // Print the completed row
  }
}

// Call the function to print a 5-row triangle
printTrianglePattern(5);

```
## Detailed Step-by-Step Breakdown
Let’s peek under the hood and look at how this code executes line-by-line.
### 1. The Outer Loop (Row Controller)
```javascript
for (let i = 0; i < n; i++) { ... }

```
The outer loop is responsible for moving **downwards** (managing the rows). If n = 5, this loop will run 5 times, with i starting at 0 and ending at 4.
### 2. The Line Reset
```javascript
let line = '';

```
At the beginning of every row, we create an empty string variable called line. Think of this as a blank canvas. We need to reset it to empty every time the outer loop runs so that stars from the previous row don't bleed into the next one.
### 3. The Inner Loop (Star Builder)
```javascript
for (let j = 0; j <= i; j++) {
  line += '*' + ' ';
}

```
This is where the magic happens. The inner loop moves **horizontally** (managing the columns).
Notice the condition: j <= i. Because j stops when it hits i, the number of times this inner loop runs is completely dependent on which row the outer loop is currently on!
 * When i = 0, the inner loop runs **1 time** (when j = 0).
 * When i = 4, the inner loop runs **5 times** (when j = 0, 1, 2, 3, 4).
Inside this loop, we append a star and a space ('* ') to our line string.
### 4. Printing the Row
```javascript
console.log(line);

```
Once the inner loop finishes building the string for that specific row, console.log() prints it out to the terminal and automatically adds a line break, preparing the console for the next row.


## 📊 Behind the Scenes: The Dry Run
If you are still visualising how the variables change, here is a "dry run" table showing exactly what the computer sees at each step when n = 5:
| Outer Loop (i) | Inner Loop Condition (j <= i) | Values of j | Formed String (line) | Output Result |
|---|---|---|---|---|
| **0** (Row 1) | j <= 0 | 0 | "* " | * |
| **1** (Row 2) | j <= 1 | 0, 1 | "* * " | * * |
| **2** (Row 3) | j <= 2 | 0, 1, 2 | "* * * " | * * * |
| **3** (Row 4) | j <= 3 | 0, 1, 2, 3 | "* * * * " | * * * * |
| **4** (Row 5) | j <= 4 | 0, 1, 2, 3, 4 | "* * * * * " | * * * * * |

*/

const patternOne = (n) => {
  for(let i = 0; i < n; i++){
    let line = '';
    for(let j = 0; j <= i; j++){
      line += '*' + ' '
    }
    console.log(line);
  }
  
}
patternOne(5)