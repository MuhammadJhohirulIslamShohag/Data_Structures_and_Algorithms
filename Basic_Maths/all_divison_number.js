/*
  All Division Number 
*/

const allDivisonNumber = (n) => {
    for(let i = 1; i <= n; i++){
        if(n%i==0){
            console.log(i)
        }
    }
}
allDivisonNumber(36);

---

const allDivisonNumber = (n) => {
    let allDividedNumber = [];
    
    // Loop only up to the square root of n
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            allDividedNumber.push(i);       // Push the first divisor
            
            // Avoid pushing a duplicate if it's a perfect square (like 6 * 6)
            if (n / i !== i) {
                allDividedNumber.push(n / i); // Push its partner divisor
            }
        }
    }
    
    // Correcting the sorting mechanism
    allDividedNumber.sort((a, b) => a - b);
    console.log(allDividedNumber);
}

// Example Usage:
allDivisonNumber(36); 
// Output: [1, 2, 3, 4, 6, 9, 12, 18, 36]


# Optimizing Factor Finding: How to Get All Divisors of a Number Efficiency in JavaScript
Moving past single numbers and basic digit-stripping loops, you’ve naturally advanced to a fundamental concept in both computer science and algebra: 

finding **all divisors (or factors) of an integer**.

Your current implementation leverages a brilliant, highly efficient mathematical property called the **square root optimization**. Instead of looping through every number from 1 up to n—which gets dangerously slow for large inputs—your code smartly halts much earlier.

Let's break down exactly why this mathematical shortcut works, look at your execution trace, and fix a subtle JavaScript sorting quirk hidden in your output!

## The Core Logic: The Power of Factor Pairs
Divisors always travel in **pairs**. If a number i divides n perfectly, then its partner (n / i) also divides n perfectly.

Take the number 36 as an example:

 *  *  *  *  * Notice how after 6 (which is exactly \sqrt{36}), the pairs simply repeat themselves in reverse order (9 \times 4, 12 \times 3, etc.).

By stopping our loop condition at i \times i \le n (or i \le \sqrt{n}), we only need to iterate **6 times** to find all the divisors of 36, instead of looping 36 times!
## Analyzing the Code Implementation
Here is your optimization pattern written cleanly out into an arrow function:

```javascript
/*
    Find All Divisors of a Number
*/
const allDivisonNumber = (n) => {
    let allDividedNumber = [];
    
    // Loop only up to the square root of n
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            allDividedNumber.push(i);       // Push the first divisor
            
            // Avoid pushing a duplicate if it's a perfect square (like 6 * 6)
            if (n / i !== i) {
                allDividedNumber.push(n / i); // Push its partner divisor
            }
        }
    }
    
    // Correcting the sorting mechanism
    allDividedNumber.sort((a, b) => a - b);
    console.log(allDividedNumber);
}

// Example Usage:
allDivisonNumber(36); 
// Output: [1, 2, 3, 4, 6, 9, 12, 18, 36]

```

## ⚠️ The JavaScript Trap: Alphabetical Sorting vs. Numerical Sorting

If you look closely at your code console output, you'll see your array printed as:

[1, 12, 18, 2, 3, 36, 4, 6, 9]
Wait... why did 12 and 18 show up before 2?
By default, JavaScript’s built-in .sort() method converts numbers into **strings** and sorts them lexicographically (alphabetically based on Unicode values). In "alphabetical" order, "12" comes before "2" because it starts with a "1".

### The Quick Fix

To sort numbers in actual ascending order, you must always pass a **compare function** into .sort():

```javascript
allDividedNumber.sort((a, b) => a - b);

```

 * If a - b is negative, it means a is smaller, so a stays before b.
 * If a - b is positive, it means a is larger, so b jumps ahead of a.

### Step-by-Step Execution Trace for 36

Let's trace how efficiently the optimized loop collects pairs:

| i Value | Loop Check (i * i <= 36) | Is Divisor? (36 % i === 0) | allDividedNumber.push(i) | Partner Check (36 / i !== i) | allDividedNumber.push(36 / i) |
|---|---|---|---|---|---|
| **1** | 1 \le 36 (True) | Yes | Pushes 1 | 36 \ne 1 (True) | Pushes 36 |
| **2** | 4 \le 36 (True) | Yes | Pushes 2 | 18 \ne 2 (True) | Pushes 18 |
| **3** | 9 \le 36 (True) | Yes | Pushes 3 | 12 \ne 3 (True) | Pushes 12 |
| **4** | 16 \le 36 (True) | Yes | Pushes 4 | 9 \ne 4 (True) | Pushes 9 |
| **5** | 25 \le 36 (True) | No | — | — | — |
| **6** | 36 \le 36 (True) | Yes | Pushes 6 | 6 \ne 6 (**False**) | *Skipped duplicate* |
| **7** | 49 \le 36 (**False**) | *Loop Ends* | — | — | — |
Unsorted Array: [1, 36, 2, 18, 33, 12, 4, 9, 6]
Numerically Sorted Array: [1, 2, 3, 4, 6, 9, 12, 18, 36]

## Why This Matters

This mathematical optimization shifts your code from an O(n) time complexity down to a blazing-fast **O(\sqrt{n})**. If you were finding the factors of 1,000,000, a standard loop runs **1 million times**, while this smart loop finishes after just **1,000 iterations**.
This identical square-root boundary is the absolute backbone for optimizing modern **Prime Number Validation** algorithms! Ready to jump into prime number patterns next, or are you looking to play around with these divisors a bit more?

