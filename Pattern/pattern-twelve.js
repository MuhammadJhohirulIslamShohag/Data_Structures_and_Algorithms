/*
 Pattern Twelve
*/

const patternTwelve= (n) => {
  let space = 2*(n-1);
  for(let i = 1; i <= n; i++){
    let line = '';
    for(let j = 1; j <= i; j++){
      line += j
    }
    for(let j = 1; j <= space; j++){
      line += ' '
    }
    for(let j = i; j >= 1; j--){
      line += j
    }
    console.log(line);
    space -= 2
  }

}
patternTwelve(5)

```markdown
# Mastering Pattern Printing in JavaScript: The Number Crown (Mirror Image)

Welcome back! Today, we are conquering one of the most structurally complex and beautiful patterns in foundational coding logic: the **Number Crown**. 

This problem commonly appears in coding interviews because it tests your ability to run three distinct operations inside a single row, use a dynamic variable tracker that updates *outside* your inner loops, and manage a **reverse countdown loop**. 

Let’s dismantle this step-by-step!

---

## The Goal

We want to write a JavaScript function that takes a number `n` and prints two sets of symmetrically mirrored numbers separated by a shrinking block of central spaces. For `n = 5`, the crown looks exactly like this:

```text
1       1
12     21
123   321
124   4321
1234554321

```
### The Pattern Logic

To avoid making our code confusing, let’s divide each horizontal line into three distinct phases: **Increasing Numbers + Central Spaces + Decreasing Numbers**.
Let's dissect the components for each row when n = 5:
 * **Row 1 (i = 1):** Prints 1, followed by **8 spaces**, followed by 1.
 * **Row 2 (i = 2):** Prints 12, followed by **6 spaces**, followed by 21.
 * **Row 3 (i = 3):** Prints 123, followed by **4 spaces**, followed by 321.
 * **Row 5 (i = 5):** Prints 12345, followed by **0 spaces**, followed by 54321.
We can break down three crucial rules from this layout:

 1. **The Left Block:** Counts upwards starting at 1 and ending exactly at the current row index (i).

 2. **The Space Block:** Starts at a maximum value of 2 * (n - 1). As we move down each row, the space window drops by exactly **2** spaces.

 3. **The Right Block:** A perfect reverse countdown! It initializes at the current row value (i) and counts backwards down to 1.

## The JavaScript Code

Here is the structured solution written cleanly in JavaScript:

```javascript
const patternTwelve = (n) => {
  // Initialize the space counter at maximum width
  let space = 2 * (n - 1);

  // Outer loop: Manages rows sequentially (from row 1 up to n)
  for (let i = 1; i <= n; i++) {
    let line = ''; // Create a blank container for the current row

    // 1. Left Sub-Loop: Numbers incrementing up to 'i'
    for (let j = 1; j <= i; j++) {
      line += j;
    }

    // 2. Middle Sub-Loop: Appending blank spaces
    for (let j = 1; j <= space; j++) {
      line += ' ';
    }

    // 3. Right Sub-Loop: Numbers decrementing from 'i' back down to 1
    for (let j = i; j >= 1; j--) {
      line += j;
    }

    console.log(line); // Render the final compiled row layout

    // Decrement the global space value by 2 for the upcoming row
    space -= 2;
  }
}

// Call the function to display a 5-story crown
patternTwelve(5);


```
## Detailed Step-by-Step Breakdown

### 1. The Global Space Multiplier
```javascript
let space = 2 * (n - 1);

```

We declare our space tracker *before* our row loop starts. Why? Because its state needs to persist and change systematically across rows. If n = 5, then space starts at 2 * (5 - 1) = 8. At the end of every row iteration, we subtract 2 from it (space -= 2) so that the next line has a narrower gap.

### 2. The Right-Hand Countdown Loop

```javascript
for (let j = i; j >= 1; j--) { line += j; }

```

Pay close attention to how this third loop behaves. While most loops count up using j++, this loop initializes at j = i and counts **downwards** via j--.
 * When we are on row i = 3, this loop prints 3, then 2, then 1, matching the mirror image perfectly.

## 📊 Behind the Scenes: The Dry Run
Let's trace the variable states step-by-step through execution when n = 5:

| Row Index (i) | Left Side Loop (1 to i) | Current space Value | Right Side Loop (i down to 1) | Compiled Row Layout | Next Row Space (space - 2) |
|---|---|---|---|---|---|
| **1** | "1" | 8 | "1" | "1        1" | 6 |
| **2** | "12" | 6 | "21" | "12      21" | 4 |
| **3** | "123" | 4 | "321" | "123    321" | 2 |
| **4** | "1234" | 2 | "4321" | "1234  4321" | 0 |
| **5** | "12345" | 0 | "54321" | "1234554321" | -2 |