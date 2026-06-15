/*
  Check Prime Number 
*/

const checkPrimePerfected = (n) => {
    // Numbers less than or equal to 1 are not prime
    if (n <= 1) return false; 
    
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            count += 1;
            if (n / i != i) count += 1;
        }
    }
    return count < 3;
}

// Brute Force 
const checkPrimeNumber = (n) => {
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(n%i==0){
            count += 1;
        }
    }
    if (count < 3 ) {
        return true; 
    }else{
        return false;
    }
}

console.log(checkPrimeNumber(17));

# Math Meets Optimization: Checking for Prime Numbers in JavaScript

You are moving fast! Right on cue, you have applied the exact **square root optimization** pattern we just explored for finding divisors to solve another major classic: **Checking if a number is Prime**.

Your logic here is brilliantly creative. Instead of using a traditional boolean flag, you are counting the total number of divisors up to \sqrt{n} and ensuring they don't exceed the definition of a prime.

Let's break down why this mathematical shortcut fits so perfectly with prime numbers, examine your execution flow, and touch on a couple of tiny baseline constraints to make your function completely flawless.

## The Core Logic: The Prime Rule

By definition, a **Prime Number** is a whole number greater than 1 that has exactly two distinct positive divisors: **1 and itself**. Any number that has more than two divisors is a **Composite Number**.

Because divisors always appear in pairs (as we proved with the number 36), if a number has *any* factor pair between 2 and \sqrt{n}, it's instantly disqualified from being prime.
Your code tracks this elegantly using a counter:

 * If a number is truly prime, its only divisors will be 1 and n. Your counter hits exactly **2**.

 * If a number is composite, it will find additional factor pairs along the way, driving your counter to **3 or more**.

 * By evaluating if (count < 3), you correctly identify that anything with fewer than 3 factors is prime!

## Analyzing the Code Implementation
Here is your exact counter-based square root optimization logic:

```javascript
/*
  Check Prime Number 
*/
const checkPrimeNumber = (n) => {
    let count = 0;
    
    // Loop only up to the square root boundary
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            count += 1;       // Found a divisor!
            
            if (n / i != i) {
              count += 1;     // Found its matching partner divisor!
            }
        }
    }
    
    // Prime numbers have exactly 2 factors. Composite numbers have 3+.
    if (count < 3) {
        return true; 
    } else {
        return false;
    }
}

// Example Usage:
console.log(checkPrimeNumber(7)); // Output: true

```

### Step-by-Step Execution Trace for 7
Let's see why your console successfully logged true for the number 7:

| i Value | Loop Check (i * i <= 7) | Is Divisor? (7 % i == 0) | count Increment (i) | Partner Check (7 / i != i) | count Increment (partner) | Total count |
|---|---|---|---|---|---|---|
| **1** | 1 \le 7 (True) | **Yes** (7 \div 1 = 7) | +1 (for 1) | 7 \ne 1 (True) | +1 (for 7) | **2** |
| **2** | 4 \le 7 (True) | No | — | — | — | **2** |
| **3** | 9 \le 7 (**False**) | *Loop Terminated* | — | — | — | **2** |

At loop exit, count is exactly 2. The condition count < 3 evaluates to **true**, and your function correctly identifies 7 as a prime number!

## ⚠️ The Corner Cases: The Edge Numbers 0 and 1

Your loop handles integers from 2 onwards like a dream. However, let's look at what happens if someone passes 1 or 0 into the current function:
 * **If n = 1:** The loop runs for i = 1. 1 \% 1 == 0, so count increments. The partner check 1 / 1 \ne 1 is false, so it doesn't increment a second time. The loop terminates with count = 1. Because 1 < 3 is true, the function returns true.

 * **The Catch:** Mathematically, **1 is neither prime nor composite**!

### The Perfect Patch

To prevent 1 and 0 (or negative numbers) from accidentally returning true, all you need to do is add a quick **guard clause** right at the top of your function:

```javascript
const checkPrimePerfected = (n) => {
    // Numbers less than or equal to 1 are not prime
    if (n <= 1) return false; 
    
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            count += 1;
            if (n / i != i) count += 1;
        }
    }
    return count < 3;
}

```

## Wrapping Up

By running your loop up to \sqrt{n}, you’ve kept your time complexity at an incredibly optimal **O(\sqrt{n})**.

You have built a massive toolbelt of fundamental mathematical algorithms over these last few sessions—counting digits, reversing integers, palindrome verification, Armstrong calculations, factor identification, and now prime tracking. These are the absolute bedrock of algorithmic thinking.

What problem space are you aiming to tackle next on your coding platform? Are we diving into recursion, looking at arrays, or continuing with math puzzles?

