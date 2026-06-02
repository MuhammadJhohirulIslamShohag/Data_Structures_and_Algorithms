/*
 Pattern Eleven 
*/

const patternEleven= (n) => {
  for(let i = 0; i < n; i++){
    let line = '';
    let start= 1
    if (i%2==0){ 
        start = 1
    } else {
        start = 0
    }
    for(let j = 0; j < i; j++){
      line += start 
      start= 1-start 
    }
    console.log(line);
  }

}
patternEleven(5)


```markdown
# Mastering Pattern Printing in JavaScript: The Binary 1-0 Triangle

Welcome back! Today, we are exploring a pattern that takes a break from stars and standard increments to venture into the world of binary. We are building the **Binary 1-0 Triangle**.

This problem is a fantastic way to practice state toggling within loops. Instead of printing static values, we change what gets appended with every step, creating an alternating checkerboard effect.

---

## The Goal
We want to write a JavaScript function that takes a number `n` and prints a triangle of alternating `1`s and `0`s. 

Looking at your reference image, there is a minor detail to correct! Your code starts rows on a `1` or `0` based on the row index, but your screenshot shows the pattern starting with `0` on the first row:

```text
0
1 0
0 1 0
1 0 1 0

```

Let's fix the logic to match the screenshot exactly while mastering how to toggle variables dynamically.

### The Pattern Logic
Let’s analyze how the starting digit behaves for each row:

 * **Row 1 (i = 0):** Starts with 0
 * **Row 2 (i = 1):** Starts with 1
 * **Row 3 (i = 2):** Starts with 0
 * **Row 4 (i = 3):** Starts with 1

The rule is straightforward: **If the row index i is even, the line starts with 0. If the row index i is odd, the line starts with 1.** Once the row gets its starting number, every subsequent digit in that row must flip (1 becomes 0, and 0 becomes 1).
## The JavaScript Code
Here is the corrected implementation that matches your execution output layout perfectly:

```javascript
const patternEleven = (n) => {
  // Outer loop: Controls the row position (i = 0 up to n-1)
  for (let i = 0; i < n; i++) {
    let line = '';
    let start = 0;

    // Determine the starting digit based on the row index
    if (i % 2 === 0) {
      start = 0; // Even rows start with 0
    } else {
      start = 1; // Odd rows start with 1
    }

    // Inner loop: Builds the columns for the current row
    for (let j = 0; j <= i; j++) {
      line += start + ' '; // Append current digit and a space
      start = 1 - start;   // The Magic Switch: Flips 1 to 0, or 0 to 1
    }

    console.log(line); // Print the completed binary row
  }
}


// Call the function to print a 5-row binary triangle
patternEleven(5);

```

*(Note: Your original inner loop used j < i, which printed one fewer row element than intended. Changing it to j <= i ensures your triangle grows completely to its full height!)*

## Detailed Step-by-Step Breakdown

### 1. Determining the Initial Row State
```javascript
if (i % 2 === 0) { start = 0; } else { start = 1; }

```

Using the modulus operator (%), we check if the current row number is divisible by 2. This sets our starting anchor for the line.
### 2. The Inner Loop Expansion
```javascript
for (let j = 0; j <= i; j++) { ... }

```

Just like our classic star triangle, the condition j <= i ensures that Row 1 prints 1 item, Row 2 prints 2 items, and so on.
### 3. The Math Trick: start = 1 - start
```javascript
line += start + ' ';
start = 1 - start;

```

Instead of writing a bulky if/else statement inside the inner loop to alternate between 1 and 0, we use a beautiful arithmetic shortcut: 1 - start.
 * If start is 0: 1 - 0 = 1. (Switches to 1)
 * If start is 1: 1 - 1 = 0. (Switches to 0)
This tiny formula instantly flips the binary bit back and forth on every loop execution!

## 📊 Behind the Scenes: The Dry Run

Let’s trace exactly how the variable values shift when patternEleven(5) is executed:
| Row Index (i) | Row Condition | Initial start value | Values of j | Toggling Sequence | Row String (line) |
|---|---|---|---|---|---|
| **0** | Even | 0 | 0 | 0 \rightarrow 1 | 0  |
| **1** | Odd | 1 | 0, 1 | 1 \rightarrow 0 \rightarrow 1 | 1 0  |
| **2** | Even | 0 | 0, 1, 2 | 0 \rightarrow 1 \rightarrow 0 \rightarrow 1 | 0 1 0  |
| **3** | Odd | 1 | 0, 1, 2, 3 | 1 \rightarrow 0 \rightarrow 1 \rightarrow 0 \rightarrow 1 | 1 0 1 0  |
