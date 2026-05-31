/*
 Pattern Six
*/

const patternSix = (n) => {
  for(let i = 0; i <= n; i++){
    let line = '';
    for(let j = 1; j < n-i+1; j++){
      line += j + ' '
    }
    console.log(line);
  }

}
patternSix(5)


# Mastering Pattern Printing in JavaScript: The Inverted Half-Pyramid of Numbers

Welcome back to our pattern printing series! In our last tutorial, we looked at how to invert a triangle using stars. Today, we are taking that exact same inverted structure but changing the logic to print **incrementing numbers** instead.

This pattern is a brilliant test of your ability to handle loop formulas dynamically because your inner loop's end condition must mathematically adapt to the shrinking rows. Let's break it down!

---

## The Goal
We want to write a JavaScript function that takes a number `n` and prints an upside-down pyramid of numbers. If `n = 5`, the expected output looks exactly like this:

```text
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 

```
### The Pattern Logic
Let’s analyze how our numbers behave across the rows:
 * **Row 1 (i = 0):** Starts at 1, counts up to 5.
 * **Row 2 (i = 1):** Starts at 1, counts up to 4.
 * **Row 3 (i = 2):** Starts at 1, counts up to 3.
 * **Row 4 (i = 3):** Starts at 1, counts up to 2.
 * **Row 5 (i = 4):** Starts at 1, counts up to 1.
We can spot two fundamental rules here:
 1. Every row resets its count and begins exactly at 1.
 2. The number of values printed per row shrinks sequentially. The stopping point for our column counter follows the formula: n - i.
## The JavaScript Code
Here is the structured nested-loop solution in JavaScript to print this inverted layout:
```javascript
const patternSix = (n) => {
  // Outer loop: Controls rows, running from i = 0 up to n
  for (let i = 0; i <= n; i++) {
    let line = ''; // Clear string container for the current row
    
    // Inner loop: Always starts at 1, runs while j is less than (n - i + 1)
    for (let j = 1; j < n - i + 1; j++) {
      line += j + ' '; // Append the current column number and a space
    }
    
    console.log(line); // Output the finished line
  }
}

// Call the function with an input value of 5
patternSix(5);

```
## Detailed Step-by-Step Breakdown
### 1. The Row Counter (i)
```javascript
for (let i = 0; i <= n; i++) { ... }

```
Our outer loop acts as our row stepper, beginning at 0. Notice that with n = 5, this loop executes until i values complete. However, because of the inner loop math, the final loops where i matches or exceeds n will simply result in empty lines or stop executing content additions, safely formatting our 5 required text rows.
### 2. The Dynamic Boundary Formula (n - i + 1)
```javascript
for (let j = 1; j < n - i + 1; j++) { ... }

```
This expression is where the core math occurs! Our inner loop needs to count upward from 1, but its stopping limit must decrease on every new line.
Let's plug our values into the formula n - i + 1 to see how it restricts our inner counter j:
 * **When i = 0:** Limit is 5 - 0 + 1 = 6. Loop runs while j < 6 (j = 1, 2, 3, 4, 5). **(5 elements)**
 * **When i = 1:** Limit is 5 - 1 + 1 = 5. Loop runs while j < 5 (j = 1, 2, 3, 4). **(4 elements)**
 * **When i = 4:** Limit is 5 - 4 + 1 = 2. Loop runs while j < 2 (j = 1). **(1 element)**
### 3. Printing the Horizontal Element (j)
```javascript
line += j + ' ';

```
Because we want the sequence of numbers to increment horizontally across the screen (1 2 3...), we append our inner loop index **j** directly to our row string alongside a blank spacing character.

## 📊 Behind the Scenes: The Dry Run
Let’s trace the execution of patternSix(5) step-by-step to visualize the loop conditions precisely:

| Outer Loop Index (i) | Inner Loop Math Bound (n - i + 1) | Inner Loop Condition (j < Bound) | Active Values of j | Formed String (line) |
|---|---|---|---|---|
| **0** (Row 1) | 5 - 0 + 1 = 6 | j < 6 | 1, 2, 3, 4, 5 | "1 2 3 4 5 " |
| **1** (Row 2) | 5 - 1 + 1 = 5 | j < 5 | 1, 2, 3, 4 | "1 2 3 4 " |
| **2** (Row 3) | 5 - 2 + 1 = 4 | j < 4 | 1, 2, 3 | "1 2 3 " |
| **3** (Row 4) | 5 - 3 + 1 = 3 | j < 3 | 1, 2 | "1 2 " |
| **4** (Row 5) | 5 - 4 + 1 = 2 | j < 2 | 1 | "1 " |
