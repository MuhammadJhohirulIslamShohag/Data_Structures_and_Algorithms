/*
      Pattern Three
*/

const patternThree = (n) => {
  for(let i = 1; i < n; i++){
    let line = '';
    for(let j = 1; j <= i; j++){
      line += j + ' '
    }
    console.log(line);
  }
  
}
patternThree(5)


```markdown
# Mastering Pattern Printing in JavaScript: The Half-Pyramid of Numbers

Welcome back to our pattern printing series! In our last post, we mastered the classic right-angled triangle using stars. Today, we are taking that exact same structural logic but stepping it up a notch by printing **incrementing numbers** instead of static symbols.

If you understand how to control loops dynamically, this pattern is a breeze. Let's break it down!

---

## The Goal
We want to build a JavaScript function that takes a number `n` and prints a sequence of increasing numbers in a triangular format. For a value of `n = 5`, the output looks like this:

```text
1 
1 2 
1 2 3 
1 2 3 4 

```
### The Pattern Logic
Let's analyze what is changing across the rows and columns:
 * **Row 1:** Starts at 1, ends at 1.
 * **Row 2:** Starts at 1, ends at 2.
 * **Row 3:** Starts at 1, ends at 3.
 * **Row 4:** Starts at 1, ends at 4.

Notice two key rules here:

 1. Every single row begins counting from 1.
 2. The column value increases by 1 during each step, stopping exactly when it reaches the current row number.

## The JavaScript Code
Here is the clean implementation using modern JavaScript arrow functions and nested for loops:

```javascript
const patternThree = (n) => {
  // Outer loop: Controls the rows (Starts at 1, runs while i is less than n)
  for (let i = 1; i < n; i++) {
    let line = ''; // Clear the line string for the new row
    
    // Inner loop: Controls the columns and numbers printed
    for (let j = 1; j <= i; j++) {
      line += j + ' '; // Append the current column number and a space
    }
    
    console.log(line); // Print the completed numerical row
  }
}

// Execute the function with a target range
patternThree(5);

```
## Detailed Step-by-Step Breakdown
### 1. Adjusting the Loop Boundaries
Unlike previous patterns where we started indexing our loops at 0, this pattern benefits significantly from starting both loops at 1.

 * **Outer Loop:** let i = 1; i < n; i++
 * Since n = 5, i will cycle through values 1, 2, 3, and 4. This perfectly matches our target output of 4 rows.

### 2. Crafting the Row Container
```javascript
let line = '';

```
Before the inner loop begins assembling the text, we initialize a blank string named line. This temporarily holds our numbers for the current row before they get printed to the screen.

### 3. Printing the Dynamic Column Value (j)
```javascript
for (let j = 1; j <= i; j++) {
  line += j + ' ';
}

```
This is the heart of the algorithm. The inner loop acts as a counter that always resets to 1 at the start of every row.

As j increments inside the loop, we append its **own value** (j) directly to our row string instead of a hardcoded star symbol. Because the loop condition is constrained by j <= i, the loop naturally stops counting once j exceeds the current row number i.

## 📊 Behind the Scenes: The Dry Run
Let's look at a step-by-step visual tracker showing exactly how the variables mutate over time when patternThree(5) is executed:

| Outer Loop (i) | Inner Loop Condition (j <= i) | Active Values of j | Assembled String (line) | Final Row Output |
|---|---|---|---|---|
| **1** (Row 1) | j <= 1 | 1 | "1 " | 1 |
| **2** (Row 2) | j <= 2 | 1, 2 | "1 2 " | 1 2 |
| **3** (Row 3) | j <= 3 | 1, 2, 3 | "1 2 3 " | 1 2 3 |
| **4** (Row 4) | j <= 4 | 1, 2, 3, 4 | "1 2 3 4 " | 1 2 3 4 |
