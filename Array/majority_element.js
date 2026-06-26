/*
   Find the Majority Element that occurs more      than N/2 times
*/

// Brute Force Approach
const majorityElementBrute = (arr) => {
    let n = arr.length;
    
    // 1. Outer loop: Pick each element one by one to test as a potential majority element
    for (let i = 0; i < n; i++) {
        let count = 0; // Reset counter for the current element
        
        // 2. Inner loop: Scan the whole array to count how many times arr[i] appears
        for (let j = 0; j < n; j++) { // Added 'let' to avoid creating a global variable
            if (arr[i] === arr[j]) {  // Using strict equality (===) for best practice
                count++; // Increment count when a match is found
            }
        }
        
        // 3. Condition Check: If the count is greater than N/2, we found the majority element
        if (count > Math.floor(n / 2)) { 
            return arr[i]; // Return the element immediately
        }
    }
    
    // 4. Return -2 if no majority element exists in the array
    return -2; 
}


console.log(majorityElementBrute([7, 0, 0, 1, 7, 7, 2, 7, 7])); // Output: 7

// Better Approach
const majorityElementBetterWithMap = (arr) => {
    let n = arr.length;
    let map = new Map(); // Initializing a real Map instance
    
    for (let i = 0; i < n; i++) {
        let num = arr[i];
        
        // map.get(num) fetches the existing count. If undefined, default to 0.
        let currentCount = (map.get(num) || 0) + 1;
        
        // Update the count of the number inside the Map instance
        map.set(num, currentCount);
        
        // Check if the current frequency exceeds N/2
        if (currentCount > Math.floor(n / 2)) {
            return num;
        }
    }
    return -2;
}

console.log(majorityElementBetterWithMap([7, 0, 0, 1, 7, 7, 2, 7, 7])); // Output: 7

// Optimal Approach: Boyer-Moore Voting Algorithm
const majorityElementOptimal = (arr) => {
    let n = arr.length;
    let candidate = 0;
    let count = 0;
    
    // Step 1: Find the potential candidate for majority element
    for (let i = 0; i < n; i++) {
        if (count === 0) {
            candidate = arr[i];
            count = 1;
        } else if (candidate === arr[i]) {
            count++;
        } else {
            count--;
        }
    }
    
    // Step 2: Verification Phase 
    // We must manually count how many times the candidate actually appears
    let actualCount = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === candidate) {
            actualCount++;
        }
    }
    
    // Step 3: Now check if the ACTUAL count is greater than N/2
    if (actualCount > Math.floor(n / 2)) {
        return candidate;
    }
    
    return -2; // Return -2 if no true majority element exists
}


console.log(majorityElementOptimal([7, 0, 0, 1, 7, 7, 2, 7, 7])); // Output: 7

/*

# Coding the "Majority Element" Problem: From Brute Force to Boyer-Moore Voting

In technical interviews, some problems are designed to see if you can break past standard memory storage patterns and think completely outside the box. The **Majority Element** problem is exactly one of those.

While storing element frequencies in a frequency counter is the standard "good" approach, there is an elite, algorithmic trick that lets you solve this in **constant space** without storing any frequencies at all. Let's look at the breakdown of this problem, transitioning from nested loops to the legendary **Boyer-Moore Voting Algorithm**.

## The Goal

Given an array of size n, find the majority element. The majority element is an element that appears **more than \lfloor n / 2 \rfloor times** in the array. You may assume that a majority element may or may not always exist, so a verification check is required.

 * **Input Array:** [7, 0, 0, 1, 7, 7, 2, 7, 7] (Length n = 9)

 * **Majority Threshold:** More than 9 / 2 = 4.5 (Must appear at least 5 times)

 * **Expected Output:** 7 (Appears 5 times)

## Approach 1: The Brute Force (Nested Loops)
The naive way to handle this is to pick an element with an outer loop and use an inner loop to scan the rest of the array to count its occurrences.

```javascript
const majorityElementBrute = (arr) => {
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        let count = 0; 
        
        // Scan the whole array to count matches
        for (let j = 0; j < n; j++) { 
            if (arr[i] === arr[j]) {  
                count++; 
            }
        }
        
        // If count exceeds N/2, we can return immediately
        if (count > Math.floor(n / 2)) { 
            return arr[i]; 
        }
    }
    return -2; // No majority element exists
}

```

### The Complexity:

 * **Time Complexity:** **O(n^2)** (Quadratic Time) due to the nested loops checking elements repeatedly.

 * **Space Complexity:** **O(1)** (Constant Space).

## Approach 2: The Frequency Counter (HashMap Lookup)

Instead of scanning the array multiple times, we can traverse it just once and track how many times each number shows up using a JavaScript Map.

```javascript
const majorityElementBetterWithMap = (arr) => {
    let n = arr.length;
    let map = new Map(); 
    
    for (let i = 0; i < n; i++) {
        let num = arr[i];
        
        // Fetch current count or fall back to 0, then add 1
        let currentCount = (map.get(num) || 0) + 1;
        map.set(num, currentCount);
        
        // Check if our frequency benchmark is crossed dynamically
        if (currentCount > Math.floor(n / 2)) {
            return num;
        }
    }
    return -2;
}

```
### Why this is a massive upgrade:

 * **Time Complexity:** **O(n)** (Linear Time). Map updates and reads take O(1) on average.

 * **Space Complexity:** **O(n)**. We pay a memory tax because our map grows larger depending on the number of unique elements inside the array.

## Approach 3: The Optimal Winner (Boyer-Moore Voting Algorithm)

What if an interviewer says: *"Optimize this to linear time O(n), but strip out the HashMap memory usage down to O(1) constant space"*?
This is where the **Boyer-Moore Voting Algorithm** shines. It works on a beautiful democratic model of cancellation. If a majority element exists, its frequency is greater than all other elements combined. Therefore, if we let different elements "vote" against each other, the true majority element will always be the last one standing.

### The Algorithm Blueprint:

 1. Maintain a candidate and a count variable initialized to 0.

 2. Iterate through the array. If count hits 0, we declare the current element our new temporary candidate.

 3. If the next element matches the candidate, increment count. If it's different, decrement count.

 4. Run a quick verification pass at the end to make sure the winner actually appears more than \lfloor n / 2 \rfloor times.

```javascript
const majorityElementOptimal = (arr) => {
    let n = arr.length;
    let candidate = 0;
    let count = 0;
    
    // Step 1: Find the potential candidate
    for (let i = 0; i < n; i++) {
        if (count === 0) {
            candidate = arr[i];
            count = 1;
        } else if (candidate === arr[i]) {
            count++; // Same element strengthens the candidate
        } else {
            count--; // Different element cancels out a vote
        }
    }
    
    // Step 2: Verification Phase 
    let actualCount = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === candidate) {
            actualCount++;
        }
    }
    
    // Step 3: Check against threshold
    if (actualCount > Math.floor(n / 2)) {
        return candidate;
    }
    
    return -2; 
}

```

## Visualizing Boyer-Moore on [7, 0, 0, 1, 7, 7, 2, 7, 7]

 * **Index 0 (7):** Count is 0. Candidate becomes 7, count = 1.

 * **Index 1 (0):** Doesn't match candidate 7. Count drops to 0.

 * **Index 2 (0):** Count is 0. Candidate changes to 0, count = 1.

 * **Index 3 (1):** Doesn't match candidate 0. Count drops to 0.

 * **Index 4 (7):** Count is 0. Candidate changes to 7, count = 1.

 * **Index 5 (7):** Matches candidate 7. Count jumps to 2.

 * **Index 6 (2):** Doesn't match candidate 7. Count drops to 1.

 * **Index 7 (7):** Matches candidate 7. Count jumps to 2.

 * **Index 8 (7):** Matches candidate 7. Count jumps to 3.

Our final standing candidate is 7. The verification loop counts 5 occurrences of 7, confirming it is indeed our true majority element!

## Summary Cheat Sheet

| Metric | Nested Loops (Brute) | Frequency Counter (Better) | Boyer-Moore (Optimal) |
|---|---|---|---|
| **Time Complexity** | O(n^2) | O(n) | **O(n)** |
| **Space Complexity** | O(1) | O(n) | **O(1)** |
| **Verification Needed?** | No | No | **Yes (Crucial for edge cases)** |

The Boyer-Moore voting pattern is an interview favorite because it proves you can clean up data streams dynamically without hoarding massive chunks of extra RAM.

*Did this voting metaphor clear up the Boyer-Moore algorithm for you? Let me know in the comments section below! If you found this useful, leave some **claps 👏** and save it for your interview review deck!*

*/


