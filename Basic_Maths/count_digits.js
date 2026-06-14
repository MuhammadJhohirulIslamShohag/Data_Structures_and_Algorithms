/*
    Count the Digits
*/

const countDigits = (n) => {
  let count = Math.floor(Math.log10(n)) + 1;
  console.log(count);
}

countDigits(7789)

----
const countDigits = (n) => {
  let count = 0;
  while (n > 0) {
    count += 1;
    n = Math.floor(n / 10);
  }
  console.log(count);
}

countDigits(7789)

# Mastering the While Loop: How to Count Digits in JavaScript

When you are first learning JavaScript, logic-based problems can feel a bit daunting. A classic interview and practice problem is **counting the number of digits in an integer**.

While your immediate instinct might be to just convert the number into a string and check its length, solving it mathematically using a while loop is a fantastic way to train your algorithmic thinking.

In this quick tutorial, we will break down exactly how to count digits using math, analyze a clean code implementation, and look at a quick edge case you should always watch out for.

## The Core Logic

How do you count digits without actually "looking" at the number? You shrink it down, digit by digit.

Every time you divide an integer by **10** and chop off the decimal, you effectively remove its last digit.

 * 7789 divided by 10 (and rounded down) becomes 778. (That's 1 digit counted!)
 * 778 becomes 77. (2 digits counted!)
 * 77 becomes 7. (3 digits counted!)
 * 7 becomes 0. (4 digits counted!)

Once the number hits 0, your loop stops, and you have your total count.

## The JavaScript Code

Here is how we write this logic cleanly in modern JavaScript using an arrow function and a while loop:

```javascript
/*
    Count the Digits of a Number
*/
const countDigits = (n) => {
  let count = 0;
  
  while (n > 0) {
    count += 1;             // Increment our digit tracker
    n = Math.floor(n / 10); // Remove the last digit
  }
  
  console.log(count);
}

// Example Usage:
countDigits(7789); // Output: 4

```
### Step-by-Step Execution Trace

Let's look under the hood at what happens when we pass 7789 into our function:

| Loop Iteration | Value of n at Start | count += 1 | Math.floor(n / 10) | Value of n for Next Loop |
|---|---|---|---|---|
| **Initial** | 7789 | — | — | — |
| **Iteration 1** | 7789 | 1 | Math.floor(778.9) = 778 | 778 (Since 778 > 0, loop continues) |
| **Iteration 2** | 778 | 2 | Math.floor(77.8) = 77 | 77 (Since 77 > 0, loop continues) |
| **Iteration 3** | 77 | 3 | Math.floor(7.7) = 7 | 7 (Since 7 > 0, loop continues) |
| **Iteration 4** | 7 | 4 | Math.floor(0.7) = 0 | 0 (Loop terminates!) |

## ⚠️ The "Edge Case" Trap: What about Zero?
The logic above is brilliant, but it has one tiny blind spot. What happens if someone inputs countDigits(0)?

If n = 0, the condition while (n > 0) is immediately false. The loop never runs, and the function will log 0. But mathematically, the number 0 is still **1 digit**!

### The Quick Fix

To make your code completely bulletproof for an interview setting, you can add a simple guard clause or a do...while loop. Here is the safest approach:

```javascript
const countDigitsPerfected = (n) => {
  // If the number is 0, it has exactly 1 digit
  if (n === 0) return 1; 
  
  // Handle potential negative numbers too by taking the absolute value
  n = Math.abs(n); 

  let count = 0;
  while (n > 0) {
    count += 1;
    n = Math.floor(n / 10);
  }
  return count;
}

```

## Wrapping Up

Using mathematical operations like Math.floor() inside a while loop is highly efficient because it avoids allocating extra memory for strings or arrays. It’s an essential pattern to master as you dive deeper into DSA (Data Structures and Algorithms).

**What's your favorite way to solve this? Do you prefer the math route, or do you opt for the quick n.toString().length trick? Let me know in the comments!**
