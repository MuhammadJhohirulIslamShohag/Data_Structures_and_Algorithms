/*
    Calculate both GCD and LCM efficiently
*/

// 1. Optimized GCD helper function (Euclidean Algorithm)
const getGCD = (a, b) => {
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
};

// 2. Main function to find and display LCM
const calculateLCM = (n1, n2) => {
    let gcd = getGCD(n1, n2);
    
    // Using the formula: (n1 * n2) / GCD
    let lcm = (n1 * n2) / gcd;
    
    console.log(`Numbers: ${n1}, ${n2}`);
    console.log(`GCD: ${gcd}`);
    console.log(`LCM: ${lcm}`);
}



// Example Usage:
calculateLCM(12, 9);

# The Secret Shortcut: Calculating the LCM via the GCD in JavaScript

Now that you have mastered the **Greatest Common Divisor (GCD)** and understand how to find it optimally, you’ve unlocked a massive mathematical cheat code.

You don't need to write a brand-new, complex loop to find the **Least Common Multiple (LCM)**. Instead, you can calculate it instantly using a beautiful relationship that exists between any two numbers, their GCD, and their LCM.

Let's dive into how this relationship works, look at the mathematical formula, and build an ultra-efficient JavaScript implementation.

## The Core Logic: The Product Property

There is a fundamental rule in number theory that connects two integers (a and b) to their common divisors and multiples:

> **The product of any two numbers is equal to the product of their GCD and their LCM.**
> 
Mathematically, it looks like this:

Because we already know how to find the GCD efficiently, we can rearrange this formula algebraically to solve for the LCM cleanly:

### Let's see it in action with 12 and 9
 1. Multiply the numbers: 12 \times 9 = 108

 2. Find their GCD: We already calculated that \text{GCD}(12, 9) = 3

 3. Divide the product by the GCD: 108 / 3 = 36
Therefore, the Least Common Multiple of 12 and 9 is **36**. (Which makes total sense, since 12 \times 3 = 36 and 9 \times 4 = 36).

## Visualizing the Relationship

To understand why this formula works intuitively, imagine a Venn diagram of the prime factors of both numbers. The GCD represents the overlapping shared factors in the middle. If you simply multiply a \times b, you count that middle shared area twice. By dividing by the GCD, you remove the duplicate overlap, leaving you with exactly the unique combined factors that make up the LCM.

## The JavaScript Code

By reusing our optimized Euclidean Algorithm for the GCD, our LCM function becomes a simple, one-line arithmetic calculation:

```javascript
/*
    Calculate both GCD and LCM efficiently
*/

// 1. Optimized GCD helper function (Euclidean Algorithm)
const getGCD = (a, b) => {
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
};

// 2. Main function to find and display LCM
const calculateLCM = (n1, n2) => {
    let gcd = getGCD(n1, n2);
    
    // Using the formula: (n1 * n2) / GCD
    let lcm = (n1 * n2) / gcd;
    
    console.log(`Numbers: ${n1}, ${n2}`);
    console.log(`GCD: ${gcd}`);
    console.log(`LCM: ${lcm}`);
}

// Example Usage:
calculateLCM(12, 9);

```
### Output:
```text
Numbers: 12, 9
GCD: 3
LCM: 36

```
## ⚠️ A Pro-Tip for Large Numbers: Avoiding Overflow

If you are dealing with massive numbers in a competitive programming or interview setting, multiplying n1 * n2 first can sometimes result in a number so large that it exceeds JavaScript's safe integer limit (Number.MAX_SAFE_INTEGER), causing precision errors.

To avoid this, you can slightly rearrange the order of operations by **dividing first**, then multiplying:

```javascript
// Safely prevents intermediate integer overflow
let lcm = (n1 / gcd) * n2;

```

## Wrapping Up

By utilizing this formula, your LCM calculation inherits the exact same blazing-fast time complexity as your optimized GCD algorithm: **O(\log(\min(a, b)))**. You completely bypass the need for any slow linear loops!


