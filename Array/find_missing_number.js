/*
   Find Missing Number
*/

// Brute Force 
const findMissingNumberBrute = (arr) => {
    let n = arr.length;

    // Check every value from 0 up to n
    for(let i = 0; i <= n; i++){
        let found = false;

        // Linear search inside the array
        for(let j = 0; j < n; j++){
            if(arr[j] === i){
                found = true;
                break;
            }
        }
        
        // If a number was never matched, it's the missing one!
        if(!found){
            return i;
        }
    }
    return -1;
}
const arr = [8, 2, 4, 5, 3, 7, 1, 0];
console.log(findMissingNumberBrute(arr))

// better 
const findMissingNumberSum = (arr) => {
    let n = arr.length;
    
    // Gauss Formula: Total sum from 0 to n
    let expectedSum = (n * (n + 1)) / 2;
    
    // Sum up the actual array values
    let actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

// optimal 
const findMissingNumberOptimal = (arr) => {
    let n = arr.length;
    let xor1 = 0;
    let xor2 = 0;

    // XOR all expected numbers from 0 to n
    for (let i = 0; i <= n; i++) {
        xor1 ^= i;
    }
    
    // XOR all numbers present in the array
    for (let i = 0; i < n; i++) {
        xor2 ^= arr[i];
    }

    // The remaining unmatched value reveals itself
    return xor1 ^ xor2;
}

const arr = [8, 2, 4, 5, 3, 7, 1, 0];
console.log(findMissingNumberOptimal(arr)); // Output: 6
const arr = [8, 2, 4, 5, 3, 7, 1, 0];
console.log(findMissingNumber(arr))

/*

# The Curious Case of the Missing Number: 3 Ways to Solve It in JavaScript

One of the most famous and frequent interview questions across coding platforms is finding a missing number from a sequence. It seems simple on the surface, but it serves as an excellent sandbox for interviewers to see how you handle **arithmetic overflow** and **bitwise operations**.

Today, we will dive into three ways to solve this problem: the nested loop **Brute Force**, the mathematical **Summation Formula**, and the elite **XOR Bitwise Optimal Solution**.

## The Problem

You are given an array containing n distinct numbers taken from the range 0 to n. Since the array has a length of n, exactly one number from that sequence is missing. Your job is to find it.

 * **Input Array:** [8, 2, 4, 5, 3, 7, 1, 0] (Length n = 8)

 * **Range Sequence:** 0 to 8

 * **Expected Output:** 6

## Approach 1: The Brute Force (Linear Search Scan)

The brute-force approach checks every single number from 0 to n sequentially, searching the entire array to see if that number exists. We use an outer loop to pick a target number and an inner loop to verify its presence.

```javascript
const findMissingNumberBrute = (arr) => {
    let n = arr.length;

    // Check every value from 0 up to n
    for(let i = 0; i <= n; i++){
        let found = false;

        // Linear search inside the array
        for(let j = 0; j < n; j++){
            if(arr[j] === i){
                found = true;
                break;
            }
        }
        
        // If a number was never matched, it's the missing one!
        if(!found){
            return i;
        }
    }
    return -1;
}

```
### Why this lags:

 * **Time Complexity:** **O(n^2)** (Quadratic Time). For an array of size n, we are doing up to n \times n operations.

 * **Space Complexity:** **O(1)** (Constant Space).

## Approach 2: The Better Way (The Gauss Summation Formula)

Why scan the array repeatedly when we can use basic math? Carl Friedrich Gauss discovered that the sum of the first n natural numbers can be calculated instantly using the formula:
If we calculate what the sum *should* be, and subtract the sum of what the array elements *actually* add up to, the difference is guaranteed to be our missing number.

```javascript
const findMissingNumberSum = (arr) => {
    let n = arr.length;
    
    // Gauss Formula: Total sum from 0 to n
    let expectedSum = (n * (n + 1)) / 2;
    
    // Sum up the actual array values
    let actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

```

### The Catch:

 * **Time Complexity:** **O(n)** (Linear Time). We loop through the array exactly once via .reduce().

 * **The Vulnerability:** While this looks perfect, it has a hidden trap in production. If n is extraordinarily large, calculating n * (n + 1) can exceed the safe integer limit in programming languages, leading to **integer overflow**.

## Approach 3: The Optimal Winner (XOR Bitwise Bit Magic)

To achieve O(n) time complexity without ever worrying about integer overflow, we can use the **XOR (^) bitwise operator**.
XOR has two magical traits:

 1. Any number XORed with itself cancels out and becomes 0 (A \oplus A = 0).

 2. Any number XORed with 0 stays the same (A \oplus 0 = A).

If we XOR all the numbers from 0 to n, and then XOR that result with all the numbers present inside our array, every number that appears in both places will cleanly pair up and cancel itself out to 0. The only number left standing will be the missing one!

```javascript
const findMissingNumberOptimal = (arr) => {
    let n = arr.length;
    let xor1 = 0;
    let xor2 = 0;

    // XOR all expected numbers from 0 to n
    for (let i = 0; i <= n; i++) {
        xor1 ^= i;
    }
    
    // XOR all numbers present in the array
    for (let i = 0; i < n; i++) {
        xor2 ^= arr[i];
    }

    // The remaining unmatched value reveals itself
    return xor1 ^ xor2;
}

const arr = [8, 2, 4, 5, 3, 7, 1, 0];
console.log(findMissingNumberOptimal(arr)); // Output: 6

```

### Why this is the ultimate solution:

 * **Time Complexity:** **O(n)**. Two independent, single passes simplify to linear execution time.

 * **Space Complexity:** **O(1)** constant auxiliary memory.

 * **Overflow Immunity:** Bitwise operations alter individual bits directly rather than building up massive numbers, making it completely safe from integer limits.

## Quick Comparison Summary

| Metrics | Linear Scan (Brute) | Summation (Better) | Bitwise XOR (Optimal) |
|---|---|---|---|
| **Time Complexity** | O(n^2) | O(n) | **O(n)** |
| **Space Complexity** | O(1) | O(1) | **O(1)** |
| **Risk Factor** | Terribly Slow | Integer Overflow Risk | **None (Bulletproof)** |

*Dropping bitwise manipulation algorithms during a technical interview is one of the fastest ways to show deep engineering competency. If this bitwise breakdown helped clarify XOR logic, clap it up **👏** and drop your thoughts in the comments below!*

*/

