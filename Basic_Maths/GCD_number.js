/*
  GCD (Greatest Common Divisor) - Linear Search
*/

const GCDNumber = (n1, n2) => {
    let gcd = 1;
    
    // The GCD can never be larger than the smaller of the two numbers
    let limit = Math.min(n1, n2); 
    
    for (let i = 1; i <= limit; i++) {
        if (n1 % i === 0 && n2 % i === 0) {
            gcd = i; // Continually update with the larger common divisor
        }
    }
    
    console.log(gcd);
}

// Example Usage:
GCDNumber(12, 9); // Output: 3


---

# Demystifying the Greatest Common Divisor (GCD) in JavaScript

You are moving right into multi-number properties! Finding the **Greatest Common Divisor (GCD)**—also known as the Highest Common Factor (HCF)—is a foundational milestone when working with multiple numeric inputs. It is the backbone of reducing fractions, scaling coordinates, and cryptography algorithms like RSA.

Your current implementation utilizes a highly intuitive, straight-line approach: finding the largest shared factor by looping up to the smaller of the two numbers.

Let's break down how this brute-force approach works, why it is correct, and how we can optimize it from a slow linear crawl into a blazing-fast operation using an ancient mathematical hack!

## The Core Logic: Finding Shared Factors
By definition, the GCD of two numbers is the largest positive integer that divides both numbers without leaving a remainder.
Take your example inputs, 12 and 9:

 * **Divisors of 12:** 1, 2, **3**, 4, 6, 12
 * **Divisors of 9:** 1, **3**, 9

Looking at both lists, the numbers 1 and 3 are shared common divisors. The largest one among them is **3**.

Your current loop scans every number starting from 1 up to the minimum of the two numbers (9). Every time it encounters a value that perfectly divides both (n1 % i == 0 && n2 % i == 0), it overwrites the gcd variable. By the time the loop finishes, gcd holds the absolute highest value found.

## Analyzing the Code Implementation

Here is your straightforward linear scan implementation written cleanly into an arrow function:

```javascript
/*
  GCD (Greatest Common Divisor) - Linear Search
*/
const GCDNumber = (n1, n2) => {
    let gcd = 1;
    
    // The GCD can never be larger than the smaller of the two numbers
    let limit = Math.min(n1, n2); 
    
    for (let i = 1; i <= limit; i++) {
        if (n1 % i === 0 && n2 % i === 0) {
            gcd = i; // Continually update with the larger common divisor
        }
    }
    
    console.log(gcd);
}

// Example Usage:
GCDNumber(12, 9); // Output: 3

```
### Step-by-Step Execution Trace for 12 and 9
Let's look at the loop tracking for your sample numbers:

| i Value | Loop Check (i <= 9) | Is Divisor of Both? (12 % i == 0 && 9 % i == 0) | Value of gcd Tracker |
|---|---|---|---|
| **1** | 1 \le 9 (True) | **Yes** (12/1 and 9/1 match) | Updates to 1 |
| **2** | 2 \le 9 (True) | **No** (Divides 12, but not 9) | Stays 1 |
| **3** | 3 \le 9 (True) | **Yes** (12/3 = 4 and 9/3 = 3) | Updates to 3 |
| **4** to **9** | True | **No** (None cleanly divide both) | Stays 3 |
At the end of the loop, the final output logged is **3**, which matches your screen output precisely!

## 🚀 The Upgrade: The Euclidean Algorithm
Your current solution has a time complexity of **O(\min(n1, n2))**. While this works fine for small numbers like 12 and 9, what happens if you try to find the GCD of 1,000,000,005 and 2,000,000,000? Your code will loop over **1 billion times**!

We can bypass the loop completely using the **Euclidean Algorithm**, a property formulated over 2,000 years ago.

### The Rule

Instead of checking every number, the Euclidean algorithm states that the GCD of two numbers also divides their difference. Converted to a modern modulo pattern:

By repeatedly replacing the larger number with the remainder of the two numbers, the problem shrinks exponentially until the remainder hits 0. When it does, the remaining non-zero number is your GCD!

Here is how beautifully simple it looks when written using a standard recursive execution style or a dynamic loop:

```javascript
// Optimized GCD using the Euclidean Algorithm
const optimizedGCD = (a, b) => {
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
};

console.log(optimizedGCD(12, 9)); // Output: 3

```

### Why this is a Game Changer

Instead of iterating 9 times for your problem, the Euclidean algorithm finishes in just **3 steps**:

 1. 12 % 9 \rightarrow Remainder is 3. (Next values: a = 9, b = 3)
 2. 9 % 3 \rightarrow Remainder is 0. (Next values: a = 3, b = 0)
 3. b is now 0. Loop terminates and returns a, which is **3**!

This optimization drops your time complexity down from a linear scale all the way to a logarithmic **O(\log(\min(a, b)))**, letting you handle numbers in the billions in less than a microsecond.

## Wrapping Up

Your linear scanning tool is a fantastic way to conceptualize common factors, and modifying it to use the Euclidean algorithm is the classic path towards master-level DSA performance.
Now that you have nailed down the GCD, are you planning to see how this value can be used to instantly calculate the **LCM (Least Common Multiple)** of two numbers next?




