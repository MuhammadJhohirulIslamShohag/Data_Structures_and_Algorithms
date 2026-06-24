/*
 Count Maximum Consecutive One's in the array
*/

// Brute Force — O(n)
const maxConsecutiveOnesOneLiner = (arr) => {
    return Math.max(...arr.join('').split('0').map(s => s.length));
}

const arr = [1, 1, 0, 1, 1, 1, 0, 1];
console.log(maxConsecutiveOnesOneLiner(arr)); // Output: 3

const arr = [1, 1, 0, 1, 1, 1, 0, 1];
console.log(maxConsecutiveOneLiner(arr)); // 3

// Optimal — O(n)
const maxConsecutiveOnesOptimal = (arr) => {
    let n = arr.length;
    let maxCount = 0;
    let count = 0;

    for(let i = 0; i < n; i++){
        if(arr[i] === 1) {
            count += 1;
            // Update the record holder if the current streak beats it
            maxCount = Math.max(maxCount, count);
        } else {
            // The streak is broken! Reset to 0
            count = 0;
        }
    }
    return maxCount;
}

const arr = [1, 1, 0, 1, 1, 1, 0, 1];
console.log(maxConsecutiveOnesOptimal(arr)); // 3

/*

# The Streak Tracker: Finding Max Consecutive Ones in JavaScript

Tracking consecutive occurrences of an element is a classic pattern in programming. You see it everywhere: tracking a user’s daily login streak, counting consecutive wins in a game leaderboard, or optimizing network data packets.

Today, we are going to explore how to find the **maximum consecutive 1s** in a binary array. Along the way, we'll debunk a common misconception about what makes code truly "optimal" versus just "shorter to write."

## The Goal

Given a binary array (containing only 0s and 1s), find the length of the longest single sequence of consecutive 1s.

 * **Input Array:** [1, 1, 0, 1, 1, 1, 0, 1]

 * **Expected Output:** 3 (The sequence from index 3 to 5)

## The True Optimal Solution: The Single-Pass Tracker (O(n) Time, O(1) Space)

Don't let the simplicity of a standard loop fool you. The most efficient way to solve this problem is to behave like a stopwatch tracker. We maintain a running count of the current streak of ones and a maxCount to store our all-time record.

Whenever we see a 1, our streak goes up. Whenever we see a 0, our streak resets back to zero.

```javascript
const maxConsecutiveOnesOptimal = (arr) => {
    let n = arr.length;
    let maxCount = 0;
    let count = 0;

    for(let i = 0; i < n; i++){
        if(arr[i] === 1) {
            count += 1;
            // Update the record holder if the current streak beats it
            maxCount = Math.max(maxCount, count);
        } else {
            // The streak is broken! Reset to 0
            count = 0;
        }
    }
    return maxCount;
}

const arr = [1, 1, 0, 1, 1, 1, 0, 1];
console.log(maxConsecutiveOnesOptimal(arr)); // Output: 3

```

### Performance Breakdown:

 * **Time Complexity:** **O(n)** (Linear Time). We examine each element exactly once in a single forward pass.

 * **Space Complexity:** **O(1)** (Constant Space). We only allocate memory for two small numbers (count and maxCount), completely modifying nothing else.

## The "Slick" Alternative: The Functional One-Liner

JavaScript gives us a powerful set of native methods that let us string things together into a single line. We can convert the array to a string, chop it up everywhere there is a 0, and check the length of the remaining segments.

```javascript
const maxConsecutiveOnesOneLiner = (arr) => {
    return Math.max(...arr.join('').split('0').map(s => s.length));
}

const arr = [1, 1, 0, 1, 1, 1, 0, 1];
console.log(maxConsecutiveOnesOneLiner(arr)); // Output: 3

```

### Let's see what happens under the hood:

 1. arr.join('') turns the array into a single string: "11011101".

 2. .split('0') breaks it up by zeros into chunks: ["11", "111", "1"].

 3. .map(s => s.length) converts chunks to their lengths: [2, 3, 1].

 4. Math.max(...) picks out the largest number: 3.

## Code Length vs. Code Performance

It's tempting to look at a one-liner and think it's the "optimal" solution because it takes up fewer lines of code. However, in technical interviews and high-performance engineering, **fewer lines do not equal faster execution**.
Let's compare how they actually perform:

| Feature | Single-Pass Loop (Optimal) | Functional One-Liner (Slick Trick) |
|---|---|---|
| **Time Complexity** | **O(n)** (Single Pass) | **O(n)** (But requires 4 hidden passes under the hood) |
| **Space Complexity** | **O(1)** (Zero extra memory) | **O(n)** (Creates strings, arrays, and map outputs in memory) |
| **Early Exit?** | No | No |

While the one-liner is an awesome display of JavaScript's built-in toolset, it actually forces the engine to build brand-new strings and arrays in memory behind the scenes. If your input array scales to 1,000,000 items, the one-liner can slow down significantly and hog device memory, while the loop continues to cruise right through flawlessly.

## Conclusion

Sometimes the most straightforward code is secretly the gold standard. Utilizing a single loop to track state dynamically keeps your runtime perfectly linear and your memory overhead entirely flat.

*Do you prioritize clever one-liners for code readability in production, or do you always default to native loops for speed? Let's debate in the comments below! If this breakdown clarified the loop performance edge, leave some **claps 👏**!*

*/