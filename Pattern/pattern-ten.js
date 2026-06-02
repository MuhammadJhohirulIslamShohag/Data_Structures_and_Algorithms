/*
 Pattern Ten 
*/

const patternTen= (n) => {
  for(let i = 1; i <= 2*n-1; i++){
    let line = '';
    let start= i
    if (i > n) start = 2*n-i
    for(let j = 1; j <= start; j++){
      line += '*'
    }
    console.log(line);
  }

}
patternTen(5)


```markdown
# Mastering Pattern Printing in JavaScript: The Rotated Triangle (Half-Diamond)

Welcome back! Today, we are exploring a fantastic layout known as the **Rotated Triangle** or **Half-Diamond** star pattern. 

Unlike our previous diamond tutorial where we split the shapes into completely separate functions, we are going to learn a much slicker technique today. We will write this entire pattern within a **single nested loop structure** by using a clever mathematical pivot condition.

---

## The Goal
We want to create a JavaScript function that takes a number `n` and prints a sideways-facing triangle. If `n = 5`, the stars scale up to a peak width of 5, then cleanly scale back down. The output looks like this:

```text
*
**
***
****
*****
****
***
**
*

```

### The Pattern Logic
Let’s analyze the total rows and how the stars behave based on our input n = 5:

 * **Total Rows:** The pattern prints exactly 9 rows. Mathematically, this maps to the formula: 2 * n - 1.
 * **The Turning Point:** * For rows 1 through 5, the number of stars equals the row number.
   * For rows 6 through 9, the stars begin to decrease.

Instead of writing two different loop blocks, we can determine our star limit dynamically using a simple conditional check: **If our current row index exceeds n, we flip the math to calculate the remaining rows.**

## The JavaScript Code
Here is the highly optimized single-loop approach to rendering this pattern:

```javascript
const patternTen = (n) => {
  // Outer loop: Runs from row 1 all the way up to (2 * n - 1)
  for (let i = 1; i <= 2 * n - 1; i++) {
    let line = ''; // Clear line container for the current row
    let stars = i; // By default, assume stars equal the row counter

    // The Pivot Check: If we pass the peak (n), reverse the star calculation
    if (i > n) {
      stars = 2 * n - i;
    }

    // Inner loop: Prints the calculated number of stars for this specific line
    for (let j = 1; j <= stars; j++) {
      line += '*';
    }

    console.log(line); // Output the finished row to the screen
  }
}


// Call the function to print a 5-peak half-diamond
patternTen(5);

```
## Detailed Step-by-Step Breakdown

### 1. Defining the Outer Boundary

```javascript
for (let i = 1; i <= 2 * n - 1; i++) { ... }

```
The outer loop needs to handle both the top and bottom halves of our shape. Passing n = 5 means our loop condition evaluates to 2 * 5 - 1 = 9. The counter i will cycle cleanly from row 1 through row 9.
### 2. The Smart Pivot Formula
```javascript
let stars = i;
if (i > n) stars = 2 * n - i;

```

This is the intellectual crown jewel of the code.

 * As long as i is less than or equal to 5, stars matches i perfectly (Row 3 gets 3 stars).
 * The moment i becomes 6 (which is greater than n), the if condition kicks in and recalculates our limit using 2 * n - i.
   * For Row 6: 2 * 5 - 6 = 4 stars.
   * For Row 7: 2 * 5 - 7 = 3 stars.
   * For Row 9: 2 * 5 - 9 = 1 star.
### 3. The Inner Execution
```javascript
for (let j = 1; j <= stars; j++) { line += '*'; }

```

Because our calculation phase handles all the scaling math upfront and stores it safely inside the stars variable, our inner column loop remains remarkably clean. It simply loops from 1 to whatever value stars is holding and appends the characters.

## 📊 Behind the Scenes: The Dry Run
Let's watch exactly how the variables transition as patternTen(5) processes each row step-by-step:

| Outer Index (i) | Is i > 5? | Stars Calculation Logic | Value of stars | Resulting Print |
|---|---|---|---|---|
| **1** | No | stars = i | 1 | * |
| **2** | No | stars = i | 2 | ** |
| **3** | No | stars = i | 3 | *** |
| **4** | No | stars = i | 4 | **** |
| **5** (Peak) | No | stars = i | 5 | ***** |
| **6** | **Yes** | 2 * 5 - 6 | 4 | **** |
| **7** | **Yes** | 2 * 5 - 7 | 3 | *** |
| **8** | **Yes** | 2 * 5 - 8 | 2 | ** |
| **9** | **Yes** | 2 * 5 - 9 | 1 | * |

