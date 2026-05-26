/*
 Pattern Four 
*/

const patternFour = (n) => {
  for(let i = 1; i < n; i++){
    let line = '';
    for(let j = 1; j <= i; j++){
      line += i + ' '
    }
    console.log(line);
  }
  
}
patternFour(6)


```markdown
# Mastering Pattern Printing in JavaScript: Repeating Numbers per Row

Welcome back! In our previous post, we looked at how to print a triangle where the numbers incremented horizontally across the columns (`1`, `1 2`, `1 2 3`). 

Today, we are looking at a subtle but powerful twist on that logic. Instead of changing the numbers across the columns, we want to print a pattern where the **same number repeats across the entire row**, changing only when we move down to a new row.

Let’s unpack how a tiny variable change completely alters our visual output!

---

## The Goal
We want to write a JavaScript function that takes a number `n` and prints a triangle where each row `i` contains only the number `i`, repeated `i` times. For `n = 6`, the expected output looks like this:

```text
1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5 

```
### The Pattern Logic

Let’s look at the relationship between our rows and the values being printed:
 * **Row 1:** Prints the number 1, one time.
 * **Row 2:** Prints the number 2, two times.
 * **Row 3:** Prints the number 3, three times.
 * **Row 4:** Prints the number 4, four times.
 * **Row 5:** Prints the number 5, five times.

The underlying rule here is: **The number printed on any given line is strictly determined by the row number, not the column number.**


## The JavaScript Code
Here is the clean, nested-loop implementation in JavaScript:
```javascript
const patternFour = (n) => {
  // Outer loop: Controls the row number (i)
  for (let i = 1; i < n; i++) {
    let line = ''; // Reset the string for the current row
    
    // Inner loop: Controls how many times the number is appended
    for (let j = 1; j <= i; j++) {
      line += i + ' '; // CRUCIAL: Appending 'i' (the row), not 'j' (the column)
    }
    
    console.log(line); // Print the row out
  }
}

// Execute the function to see 5 rows of repeating numbers
patternFour(6);

```
## Detailed Step-by-Step Breakdown
### 1. The Row Counter (i)
```javascript
for (let i = 1; i < n; i++) { ... }

```

We set our outer loop to start at 1 and run as long as i < n. Because we passed 6 as our argument (n = 6), i will take the values 1, 2, 3, 4, and 5. This gives us exactly 5 rows of data.

### 2. The Inner Loop Boundary
```javascript
for (let j = 1; j <= i; j++) { ... }

```
The inner loop controls **how many columns/numbers** get added to our current row. The condition j <= i tells the loop: "Run a total number of times equal to the current row value."

 * When i = 3, this loop runs exactly **3 times** (for j = 1, 2, 3).

### 3. The Magic Tweak: Printing i instead of j
```javascript
line += i + ' ';

```
This is the most critical lesson of this pattern problem.

 * In our last post, we appended j (the inner loop counter), which changed with every step across the column.

 * Here, we append i (the outer loop counter). Because i stays exactly the same value throughout the entire lifecycle of the inner loop, the number appended remains identical from the start of the row to the end!


## 📊 Behind the Scenes: The Dry Run
Let’s trace the execution of patternFour(6) step-by-step to see exactly how our line string is constructed:
| Outer Loop Counter (i) | Inner Loop Condition (j <= i) | Active Values of j | Added Variable | Assembled String (line) | Printed Output |
|---|---|---|---|---|---|
| **1** (Row 1) | j <= 1 | 1 | i (which is 1) | "1 " | 1 |
| **2** (Row 2) | j <= 2 | 1, 2 | i (which is 2) | "2 2 " | 2 2 |
| **3** (Row 3) | j <= 3 | 1, 2, 3 | i (which is 3) | "3 3 3 " | 3 3 3 |
| **4** (Row 4) | j <= 4 | 1, 2, 3, 4 | i (which is 4) | "4 4 4 4 " | 4 4 4 4 |
| **5** (Row 5) | j <= 5 | 1, 2, 3, 4, 5 | i (which is 5) | "5 5 5 5 5 " | 5 5 5 5 5 |


```
