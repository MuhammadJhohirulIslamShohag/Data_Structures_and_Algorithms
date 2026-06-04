/*
 Pattern Forthteen 
*/

const patternForthteen= (n) => {
  let number = 1
  for(let i = 1; i <= n; i++){
    let line = '';
    for(let j = 0; j < i; j++){
      line += String.fromCharCode(65 + j) + ' '
    }
    console.log(line);
  }

}
patternForthteen(5)



```markdown

# Mastering Pattern Printing in JavaScript: The Alphabet Triangle

Welcome back to our pattern printing series! Up until now, we've built triangles using stars, numbers, and binary codes. Today, we are expanding our toolkit by entering the realm of text manipulation to create the **Alphabet Triangle**.

This problem is a fantastic introduction to character encoding. Instead of tracking custom counters manually, we will learn how to translate computer-friendly numbers directly into human-readable characters on the fly.

---

## The Goal

We want to write a JavaScript function that takes a number `n` and prints an increasing triangle of letters. If `n = 5`, the expected output starts every row with the letter `'A'` and builds out horizontally:

```text
A 
A B 
A B C 
A B C D 
A B C D E 

```

### The Pattern Logic

Let's look closely at how the rows expand:
 * **Row 1 (i = 1):** Prints 1 character (A)
 * **Row 2 (i = 2):** Prints 2 characters (A B)
 * **Row 3 (i = 3):** Prints 3 characters (A B C)

The basic structural grid matches our standard right-angled triangle where the column loops exactly i times. The core challenge is: how do we tell JavaScript that a loop index like 0, 1, 2 means A, B, C?

The answer lies in **ASCII values**. Computers do not actually store letters; they store numeric codes that represent those letters. The capital letter **'A'** is represented by the number **65**, **'B'** is **66**, **'C'** is **67**, and so on.

## The JavaScript Code

Here is your clean, well-optimized implementation using character translation:

```javascript
const patternFourteen = (n) => {
  // Outer loop: Controls our rows sequentially (from row 1 up to n)
  for (let i = 1; i <= n; i++) {
    let line = ''; // Reset the string container for each new line

    // Inner loop: Tracks columns, running exactly 'i' times per row
    for (let j = 0; j < i; j++) {
      // Map our column tracker 'j' onto the character code baseline (65)
      line += String.fromCharCode(65 + j) + ' ';
    }

    console.log(line); // Print the fully formed alphabetical row
  }
}


// Call the function to print a 5-story alphabet triangle
patternFourteen(5);

```
## Detailed Step-by-Step Breakdown

### 1. The Geometry Setup

```javascript
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) { ... }
}

```

Our row loop i handles row sizes cleanly. When we are on row i = 3, the inner column loop counter j will step through 0, 1, and 2 before stopping.

### 2. The Character Conversion Method

```javascript
String.fromCharCode(65 + j)

```

This is the core engine of our function. String.fromCharCode() is a built-in JavaScript method that takes a number and looks up its corresponding character.

By adding our column index j to the baseline code of 65, we dynamically calculate the correct letters:

 * **When j = 0:** 65 + 0 = 65 \rightarrow **'A'**
 * **When j = 1:** 65 + 1 = 66 \rightarrow **'B'**
 * **When j = 4:** 65 + 4 = 69 \rightarrow **'E'**

Because j resets to 0 at the start of every single row, our alphabet sequence naturally resets to 'A' on each line!

## 📊 Behind the Scenes: The Dry Run

Let’s watch how the arithmetic maps directly to character outputs as patternFourteen(5) executes:

| Row Index (i) | Inner Values of j | Calculated ASCII Codes (65 + j) | Resulting Characters | Printed Row String (line) |
|---|---|---|---|---|
| **1** | 0 | 65 | A | "A " |
| **2** | 0, 1 | 65, 66 | A, B | "A B " |
| **3** | 0, 1, 2 | 65, 66, 67 | A, B, C | "A B C " |
| **4** | 0, 1, 2, 3 | 65, 66, 67, 68 | A, B, C, D | "A B C D " |
| **5** | 0, 1, 2, 3, 4 | 65, 66, 67, 68, 69 | A, B, C, D, E | "A B C D E " |
