/*
 Pattern Fifthteen 
*/

const patternFifthteen= (n) => {
  for(let i = 1; i <= n; i++){
    let line = '';
    let number = 0;
    for(let j = n; j >= i; j--){
      line += String.fromCharCode(65+ number)
      number+= 1
    }
    console.log(line);
  }

}
patternFifthteen(5)

# Mastering Pattern Printing in JavaScript: The Inverted Alphabet Triangle

Welcome back! In our last post, we unlocked the secret to printing characters dynamically by leveraging ASCII values with String.fromCharCode(65). Today, we are going to combine character encoding with an inverted loop boundary to construct the **Inverted Alphabet Triangle**.

If you mastered how the previous alphabet shape resets its sequence on every line, reversing the geometry will be a breeze!

## The Goal

We want to write a JavaScript function that takes a number n and prints a top-heavy, decreasing triangle of letters. For n = 5, the output starts at a maximum width of 5 characters and truncates down to a single letter 'A':

```text
ABCDE
ABCD
ABC
AB
A

```

### The Pattern Logic

Let’s analyze how the column lengths adjust per row:

 * **Row 1 (i = 1):** Loops 5 times \rightarrow Prints A B C D E
 * **Row 2 (i = 2):** Loops 4 times \rightarrow Prints A B C D
 * **Row 3 (i = 3):** Loops 3 times \rightarrow Prints A B C
 * **Row 5 (i = 5):** Loops 1 time \rightarrow Prints A

Notice a crucial theme: **Every single row resets its sequence back to 'A'**. This tells us that our ASCII tracking variable must be initialized inside the outer loop so it safely wipes its memory clear before a new row begins printing.

## The JavaScript Code
Here is your clean, descriptive nested-loop solution:

```javascript
const patternFifteen = (n) => {
  // Outer loop: Tracks rows sequentially (from row 1 up to n)
  for (let i = 1; i <= n; i++) {
    let line = '';       // Reset line canvas for the current row
    let characterOffset = 0; // Ensures every row begins at 'A' (65 + 0)

    // Inner loop: Countdown loop managing a decreasing number of columns
    for (let j = n; j >= i; j--) {
      // Convert our relative offset into its uppercase ASCII letter equivalent
      line += String.fromCharCode(65 + characterOffset);
      
      // Increment offset so the next character moves up the alphabet
      characterOffset += 1;
    }

    console.log(line); // Output the finished alphabetic row
  }
}

// Call the function to print a 5-story inverted character triangle

patternFifteen(5);

```

## Detailed Step-by-Step Breakdown

### 1. Resetting the Alphabet Target

```javascript
let characterOffset = 0;

```

Because this variable is placed directly *inside* the outer row loop, it re-initializes back to 0 every time the engine steps down to a new row. This ensures our triangle walls are perfectly aligned on the left edge with the character 'A'.

### 2. The Inverted Countdown Constraint

```javascript
for (let j = n; j >= i; j--) { ... }

```

This inner loop setup controls how many columns are generated per row. Let's see how the boundary values scale when n = 5:

 * **Row i = 1:** j goes from 5 down to 1. That's **5 steps** (prints 5 characters).
 * **Row i = 2:** j goes from 5 down to 2. That's **4 steps** (prints 4 characters).
 * **Row i = 5:** j goes from 5 down to 5. That's **1 step** (prints 1 character).

### 3. Appending Characters On The Fly

```javascript
line += String.fromCharCode(65 + characterOffset);
characterOffset += 1;

```

Inside our columns, we take the uppercase alphabet base code (65) and append our offset. Once appended, characterOffset += 1 increments the counter so the very next loop pass handles the subsequent letter code seamlessly.

## 📊 Behind the Scenes: The Dry Run
Let’s watch how the computer maps out the variable changes step-by-step for patternFifteen(5):

| Row Index (i) | Inner Loop Range (j) | Iteration Offsets Used | Calculated ASCII Codes | Final String Output (line) |
|---|---|---|---|---|
| **1** | 5, 4, 3, 2, 1 | 0, 1, 2, 3, 4 | 65, 66, 67, 68, 69 | "ABCDE" |
| **2** | 5, 4, 3, 2 | 0, 1, 2, 3 | 65, 66, 67, 68 | "ABCD" |
| **3** | 5, 4, 3 | 0, 1, 2 | 65, 66, 67 | "ABC" |
| **4** | 5, 4 | 0, 1 | 65, 66 | "AB" |
| **5** | 5 | 0 | 65 | "A" |

