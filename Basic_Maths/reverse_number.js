/*
    Reverse Number 
*/

const reverseNumber= (n) => {
  let reverse = 0;
  while (n > 0) {
    let lastDigit = n % 10
    n = Math.floor(n / 10);
    reverse = (reverse* 10)+ lastDigit
  }
  console.log(reverse);
}

reverseNumber(7789)

# Turning Logic Upside Down: How to Reverse a Number in JavaScript

Following up on counting digits, the next natural step in mastering basic math algorithms is **reversing an integer**. Whether you are preparing for coding interviews or just sharpening your problem-solving skills, reversing a number mathematically is a foundational pattern you need to know.
Instead of cheating by converting the number to a string and reversing an array, let’s look at how to strip down and rebuild a number entirely through basic arithmetic.

## The Core Logic: Extract and Rebuild

Reversing a number involves two main actions happening inside a loop:

 1. **Extracting** the last digit of the original number.

 2. **Appending** that digit to the end of your new reversed number.

We achieve this using two arithmetic operators: **Modulo (%)** and **Division (/)**.

 * **n % 10** gives you the remainder of dividing by 10, which is always the very last digit.

 * **reverse * 10** shifts all digits in your new number one place to the left, opening up the "ones" column for your newly extracted digit.

 * **Math.floor(n / 10)** chops the last digit off your original number so you can process the next one.

## The JavaScript Code

Here is the clean implementation using an arrow function and a while loop:

```javascript
/*
    Reverse a Number
*/
const reverseNumber = (n) => {
  let reverse = 0;
  
  while (n > 0) {
    let lastDigit = n % 10;          // 1. Get the last digit
    n = Math.floor(n / 10);          // 2. Drop the last digit from n
    reverse = (reverse * 10) + lastDigit; // 3. Push digit onto the reverse number
  }
  
  console.log(reverse);
}

// Example Usage:
reverseNumber(7789); // Output: 9877

```

### Step-by-Step Execution Trace

Let's visualize exactly what happens under the hood when we pass 7789 into the function:

| Loop Iteration | Value of n at Start | lastDigit = n % 10 | n = Math.floor(n / 10) | reverse = (reverse * 10) + lastDigit |
|---|---|---|---|---|
| **Initial** | 7789 | — | — | 0 |
| **Iteration 1** | 7789 | 9 | 778 | (0 * 10) + 9 = 9 |
| **Iteration 2** | 778 | 8 | 77 | (9 * 10) + 8 = 98 |
| **Iteration 3** | 77 | 7 | 7 | (98 * 10) + 7 = 987 |
| **Iteration 4** | 7 | 7 | 0 | (987 * 10) + 7 = 9877 |

Once n hits 0, the loop terminates, leaving us with our perfectly reversed result: 9877.

## ⚠️ Edge Cases to Keep in Mind

If you are writing this in an interview or an online assessment, remember these two common curveballs:

### 1. Trailing Zeros

If you reverse 1200, the mathematical result is 21 (because 021 simplified as an integer drops the leading zeros). The logic above handles this perfectly by nature because (0 * 10) + 0 remains 0 until a non-zero digit hits it.

### 2. Negative Numbers

If n = -543, the loop condition while (n > 0) will immediately fail. To handle negative inputs cleanly, you can track the sign beforehand:

```javascript
const reverseAnyInteger = (n) => {
  const isNegative = n < 0;
  let reverse = 0;
  
  // Work with the absolute value
  n = Math.abs(n); 
  
  while (n > 0) {
    let lastDigit = n % 10;
    n = Math.floor(n / 10);
    reverse = (reverse * 10) + lastDigit;
  }
  
  // Reapply the negative sign if needed
  return isNegative ? -reverse : reverse;
}

```

## Wrapping Up

Mastering how to peel away and reconstruct numbers using % 10 and / 10 is a vital stepping stone for more complex coding challenges, like checking if a number is a **Palindrome** (121 \rightarrow 121).

Are you tracking along with these basic math logic problems for an upcoming coding interview, or just practicing for fun?


