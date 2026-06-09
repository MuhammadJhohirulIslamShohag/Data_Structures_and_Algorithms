/*
   Pattern Twenty One
*/

const patternTwentyOne = (n) => {
  for (let i = 0; i < n; i++) {
    let line = ' ';
    for (let j = 0; j < n; j++) {
        if(i == 0 || j == 0 || i == n-1|| j == n-1){
            line += '*';
        }else{
            line += ' ';
        }
    }
    console.log(line);
  }
};

patternTwentyOne(5);

# Mastering Pattern Printing in JavaScript: The Hollow Square Boundary

Welcome back to the pattern printing series! Today, we are coding **Pattern Twenty-One: The Hollow Square Boundary**.

Unlike the multi-layered or shifting diamond paths we worked on previously, this pattern requires us to think about a structural matrix like a traditional grid layout. Instead of looking at rows globally from top to bottom, we look at individual coordinate intersections (row, column) to decide exactly where to apply ink.

## The Goal

Our mission is to create a JavaScript function that takes a grid scale variable n and generates a hollow outer perimeter structure. For n = 5, the function must print a perfect 5 \times 5 square outline where only the outermost edges are solid stars:

```text
*****
* *
* *
* *
*****

```
### The Structural Logic

To build this, we evaluate our system as an n \times n 2D matrix coordinate system where the loop variable i represents rows and j represents columns.

A star is only printed if a coordinate sits on one of the four absolute outer boundaries:

 1. **The Roof Boundary:** Every column along the very first row (i == 0).

 2. **The Left Wall Boundary:** The first column of every single row (j == 0`).

 3. **The Floor Boundary:** Every column along the very last row (i == n - 1).

 4. **The Right Wall Boundary:** The last column of every single row (j == n - 1).

> **A Quick Correction to Your Code:**
> In your original snippet, you initialized the line string with an empty space: let line = ' ';. This slight offset pushes the entire shape one unit to the right on every row, which can throw off your grid symmetry. Changing this to a completely empty string (let line = '';) aligns everything perfectly!
> 

## The JavaScript Code

Here is the clean, structurally accurate JavaScript function for printing the hollow perimeter grid:

```javascript
const patternTwentyOne = (n) => {
  // Loop through each row from index 0 up to n - 1
  for (let i = 0; i < n; i++) {
    let line = ''; // Start with a completely empty string to avoid layout padding shifts

    // Loop through each column coordinate in the current row
    for (let j = 0; j < n; j++) {
      // Check if the current coordinate sits on any of the 4 outer walls
      if (i === 0 || j === 0 || i === n - 1 || j === n - 1) {
        line += '*'; // Print a solid border star
      } else {
        line += ' '; // Leave the interior of the square hollow
      }
    }
    
    console.log(line);
  }
};

// Execute the function to print the hollow square border
patternTwentyOne(5);

```
## Detailed Step-by-Step Breakdown

### The Logical OR (||) Boundary Gateway

```javascript
if (i === 0 || j === 0 || i === n - 1 || j === n - 1)

```

This single conditional statement acts as a gatekeeper for our coordinates. If **any** of these conditions evaluate to true, the program appends a star to our line string:

 * When i = 0 (Row 1), the first condition is always met, so the loop prints a solid line of 5 stars.

 * When i = 2 (Row 3), the row conditions fail. However, when j = 0 or j = 4, the column conditions match, printing stars only at the edges and leaving the middle open.

## 📊 Behind the Scenes: The Dry Run

Let’s trace the coordinate map for patternTwentyOne(5) as it prints each row:

| Row Index (i) | Column Index (j) | Matrix Boundary Condition Met? | Resulting Output Action |
|---|---|---|---|
| **0** | 0, 1, 2, 3, 4 | **Yes** (i === 0 is true for all columns) | Prints 5 Stars: "*****" |
| **1** | 0 and 4 | **Yes** (j === 0 and j === 4 are true) | Prints border stars only |
| **1** | 1, 2, 3 | **No** (Interior index zone) | Prints hollow spaces: "* *" |
| **2** | 0 and 4 | **Yes** (j === 0 and j === 4 are true) | Prints border stars only |
| **2** | 1, 2, 3 | **No** (Interior index zone) | Prints hollow spaces: "* *" |
| **3** | 0 and 4 | **Yes** (j === 0 and j === 4 are true) | Prints border stars only |
| **3** | 1, 2, 3 | **No** (Interior index zone) | Prints hollow spaces: "* *" |
| **4** | 0, 1, 2, 3, 4 | **Yes** (i === 4 matches the floor boundary) | Prints 5 Stars: "*****" |

