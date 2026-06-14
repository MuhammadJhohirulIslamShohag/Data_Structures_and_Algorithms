/*
    Armstrong Number (for 3-digit integers)
*/
const armstrongNumber = (n) => {
    let dup = n; // 1. Keep a copy of the original input
    let sum = 0;

    // 2. Loop through the number to isolate digits
    while (n > 0) {
        let lastDigit = Math.floor(n % 10);
        
        // 3. Cube the digit and add it to our sum
        sum += (lastDigit * lastDigit * lastDigit);
        
        // Chop off the processed digit
        n = Math.floor(n / 10);
    }
    
    // 4. Check if the sum matches our original number
    if (dup === sum) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// Example Usages:
armstrongNumber(143); // Output: false (As seen in the execution screenshot!)
armstrongNumber(153); // Output: true

# Unlocking Number Theory: Checking for Armstrong Numbers in JavaScript

Continuing our journey through fundamental number algorithms, we arrive at a fascinating mathematical concept: the **Armstrong Number** (also commonly known as a Narcissistic or Pluperfect number).

If you've already followed along with our posts on counting digits and reversing numbers, you're going to love this one. It combines the exact digit-stripping loop technique you've mastered with a bit of exponent magic.
## What is an Armstrong Number?
An Armstrong number is a number that is equal to the sum of its own digits, each raised to the power of the number of digits.

While the general rule uses the total digit count as the exponent, a very common introductory version of this problem focuses specifically on **3-digit numbers**, where each digit is cubed (digit^3).

Let's look at two 3-digit examples:

 * **153 is an Armstrong number:** 
 * **143 is NOT an Armstrong number:** 

## The Core Logic

The blueprint follows the exact mathematical pattern we've used in our previous algorithmic posts:

 1. **Preserve the original value:** Create a duplicate variable (dup) to hold onto the initial number since our loop will gradually reduce n down to 0.

 2. **Extract the digits:** Use the modulo operator (% 10) inside a while loop to isolate each individual digit.

 3. **Cube and Accumulate:** Cube the isolated digit (digit * digit * digit or use Math.pow(digit, 3)) and add it to a running sum tracker.

 4. **Compare:** Finally, test if your calculated sum matches your original dup copy.
## The JavaScript Code
Here is how to write this clean, math-based evaluation using an arrow function:

```javascript
/*
    Armstrong Number (for 3-digit integers)
*/
const armstrongNumber = (n) => {
    let dup = n; // 1. Keep a copy of the original input
    let sum = 0;

    // 2. Loop through the number to isolate digits
    while (n > 0) {
        let lastDigit = Math.floor(n % 10);
        
        // 3. Cube the digit and add it to our sum
        sum += (lastDigit * lastDigit * lastDigit);
        
        // Chop off the processed digit
        n = Math.floor(n / 10);
    }
    
    // 4. Check if the sum matches our original number
    if (dup === sum) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// Example Usages:
armstrongNumber(143); // Output: false (As seen in the execution screenshot!)
armstrongNumber(153); // Output: true

```
### Step-by-Step Execution Trace for 143

Let’s peek inside the loop execution to see exactly why 143 evaluated to false in your code output:

| Loop Iteration | Value of n at Start | lastDigit = n % 10 | sum += (lastDigit³) | Value of n for Next Loop |
|---|---|---|---|---|
| **Initial** | 143 | — | 0 | — |
| **Iteration 1** | 143 | 3 | 0 + (3 * 3 * 3) = 27 | 14 (Loop continues) |
| **Iteration 2** | 14 | 4 | 27 + (4 * 4 * 4) = 91 | 1 (Loop continues) |
| **Iteration 3** | 1 | 1 | 91 + (1 * 1 * 1) = 92 | 0 (Loop terminates) |
At completion, the final condition checks dup === sum (\text{143} === \text{92}), which resolves to **false**.

## 🚀 Going Beyond: The Universal Armstrong Checker

In technical interviews, you might be asked to solve this for *any* number of digits, not just 3-digit numbers. For instance, 1634 is a 4-digit Armstrong number because:

To solve the universal version, you simply find the total number of digits first, then use Math.pow() inside your calculation:

```javascript
const universalArmstrongCheck = (n) => {
    let dup = n;
    let sum = 0;
    
    // Dynamically calculate the total power (number of digits)
    const power = n.toString().length; 

    while (n > 0) {
        let lastDigit = Math.floor(n % 10);
        sum += Math.pow(lastDigit, power);
        n = Math.floor(n / 10);
    }
    
    return dup === sum;
}

```

## Wrapping Up

You've built up a fantastic foundation over these last few examples. By utilizing modulo and math floors, you're avoiding costly conversions to strings or memory allocation arrays, keeping your algorithms performing at O(\log_{10} n) time efficiency.
Now that you've got these math patterns completely locked down, what algorithmic challenge are you plan to conquer next?
