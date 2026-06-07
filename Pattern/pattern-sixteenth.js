/*
 Pattern Sixteenth 
*/

const patternSixteenth= (n) => {
  for(let i = 0; i < n; i++){
    let line = '';
    for(let j = 0; j <= i; j++){
      line += String.fromCharCode(65+ i)
    }
    console.log(line);
  }
}
patternSixteenth(5)

# Mastering Pattern Printing in JavaScript: The Row-Locked Alphabet Triangle

Welcome back! In our previous examples, our character outputs changed dynamically across columns because we used the inner loop tracker j to calculate the character positions. Today, we are shifting gears to tackle **Pattern Sixteenth: The Row-Locked Alphabet Triangle**.
In this challenge, we will look at how to lock our text state to the row index itself, ensuring that every column in a given row prints the exact same character.

## The Goal

We want to write a JavaScript function that takes a number n and prints an increasing triangle where each row is filled entirely with a single letter. For n = 5, the output looks like this:

```text
A
BB
CCC
DDDD
EEEEE

```

### The Pattern Logic

Let’s break down the relationship between our loops and the character data:
 * **Row 1 (i = 0):** Loops 1 time \rightarrow Prints only 'A'
 * **Row 2 (i = 1):** Loops 2 times \rightarrow Prints only 'B'
 * **Row 3 (i = 2):** Loops 3 times \rightarrow Prints only 'C'
 * **Row 5 (i = 4):** Loops 5 times \rightarrow Prints only 'E'

Notice how the letter code relies completely on which row we are currently executing. Because the character doesn't change as we build across columns horizontally, we completely ignore the inner loop index j during our character calculations and link our ASCII offset directly to the outer row index i!

## The JavaScript Code

Here is your beautifully optimized nested-loop solution:

```javascript
const patternSixteenth = (n) => {
  // Outer loop: Manages the row index positions (from 0 up to n-1)
  for (let i = 0; i < n; i++) {
    let line = ''; // Clear out the line buffer for the current row

    // Inner loop: Controls the column repeat limit (runs exactly 'i + 1' times)
    for (let j = 0; j <= i; j++) {
      // Key Trick: Map the character calculation strictly onto the row index 'i'
      line += String.fromCharCode(65 + i);
    }

    console.log(line); // Output the uniform character line to the console
  }
}

// Call the function to print a 5-story locked character triangle

patternSixteenth(5);

```

## Detailed Step-by-Step Breakdown

### 1. Row Boundary Setup

```javascript
for (let i = 0; i < n; i++) { ... }

```

Our row counter i starts cleanly at index 0. When tracking ASCII structures, starting at 0 makes mapping seamless because 65 + 0 brings us immediately to our base character, 'A'.

### 2. Column Geometric Flow
```javascript
for (let j = 0; j <= i; j++) { ... }

```

The comparison operator j <= i shapes our triangle slope perfectly. When i = 0, it passes once. When i = 4, it passes five times, generating exactly five horizontal elements for that block.

### 3. The Row-Lock Mechanism

```javascript
line += String.fromCharCode(65 + i);

```

Look closely at the math parameters here. Unlike standard character sequences where we calculate using 65 + j, this expression locks down on 65 + i.

 * Because i stays exactly the same throughout the entire lifespan of the inner loop's execution, every single column iteration appends the exact same character to our string!

## 📊 Behind the Scenes: The Dry Run
Let’s look at the variable transitions behind the scenes to see how patternSixteenth(5) processes each line:

| Row Index (i) | Inner Loop Spaces (j <= i) | Row-Locked Code (65 + i) | Resulting Character | Final Output String (line) |
|---|---|---|---|---|
| **0** | j = 0 | 65 | A | "A" |
| **1** | j = 0, 1 | 66 | B | "BB" |
| **2** | j = 0, 1, 2 | 67 | C | "CCC" |
| **3** | j = 0, 1, 2, 3 | 68 | D | "DDDD" |
| **4** | j = 0, 1, 2, 3, 4 | 69 | E | "EEEEE" 
