/*
 Pattern Five 
*/

const patternFive = (n) => {
  for(let i = 1; i < n; i++){
    let line = '';
    for(let j = i; j < n; j++){
      line += '*' + ' '
    }
    console.log(line);
  }

}
patternFive(6)

# Mastering Pattern Printing in JavaScript: The Inverted Right-Angled Triangle

Welcome back to our pattern printing journey! We have previously mastered constructing upward-trending patterns. Today, we are turning things upside down—literally. We will look at how to build an **Inverted Right-Angled Triangle** of stars.

While it looks like a complete reversal, changing how you initialize or bound your inner loop counters allows you to scale down your rows instead of up!

---

## The Goal
We want to write a JavaScript function that takes a number `n` and prints an upside-down triangle where the first row starts at maximum width and decreases down to a single star. For `n = 6`, the expected output looks like this:

```text
* * * * * * * * * * * * * * * ```

### The Pattern Logic
Let’s look at the mathematical behavior of our stars relative to the row counters:
* **Row 1:** 5 stars
* **Row 2:** 4 stars
* **Row 3:** 3 stars
* **Row 4:** 2 stars
* **Row 5:** 1 star

The core rule here is: **As our row index moves forward, the column iteration space must shrink.** ---

## The JavaScript Code

Here is the clean implementation using modern JavaScript arrow functions and nested loops:

```javascript
const invertedTrianglePattern = (n) => {
  // Outer loop: Controls the row position (i)
  for (let i = 1; i < n; i++) {
    let line = ''; // Reset the string container for the new row
    
    // Inner loop: Starts AT the current row index 'i' and counts up to 'n'
    for (let j = i; j < n; j++) {
      line += '*' + ' '; // Append the star symbol and a space
    }
    
    console.log(line); // Print out the completed row
  }
}

// Execute the function with a boundary value of 6
invertedTrianglePattern(6);

```
## Detailed Step-by-Step Breakdown
### 1. The Row Progression
```javascript
for (let i = 1; i < n; i++) { ... }

```
Our outer loop acts as our row pointer. Given n = 6, i starts at 1 and increments sequentially until it hits 5 (1, 2, 3, 4, 5). This guarantees that we will print exactly 5 rows.
### 2. The Dynamic Starting Point (let j = i)
```javascript
for (let j = i; j < n; j++) { ... }

```
This is the hidden trick behind this code. Instead of starting our inner loop index at 1 or 0 every single time, we set **j = i**.
Because j is tied directly to the value of i, its effective remaining room before hitting the upper bound limit (j < n) continuously shrinks:

 * When i = 1, j runs from 1 to 5 (**5 iterations**).
 * When i = 3, j runs from 3 to 5 (**3 iterations**).
 * When i = 5, j runs from 5 to 5 (**1 iteration**).

This simple trick causes the inner loop to fire fewer times with each downward step, cleanly shaving one star off each sequential line.



## 📊 Behind the Scenes: The Dry Run
Let’s trace the execution of invertedTrianglePattern(6) step-by-step to visualize the loop boundaries clearly:

| Outer Loop (i) | Inner Loop Initialization (j = i) | Inner Loop Condition (j < 6) | Values of j | Assembled String (line) |
|---|---|---|---|---|
| **1** (Row 1) | let j = 1 | j < 6 | 1, 2, 3, 4, 5 | "* * * * * " |
| **2** (Row 2) | let j = 2 | j < 6 | 2, 3, 4, 5 | "* * * * " |
| **3** (Row 3) | let j = 3 | j < 6 | 3, 4, 5 | "* * * " |
| **4** (Row 4) | j = 4 | j < 6 | 4, 5 | "* * " |
| **5** (Row 5) | j = 5 | j < 6 | 5 | "* " |
