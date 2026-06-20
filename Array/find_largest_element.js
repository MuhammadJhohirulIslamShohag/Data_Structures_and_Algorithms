/*
   Find Largest Element 
*/

const findLargestElement = (arr) => {
    // Step 1: Initialize your champion
    let largestElement = arr[0];
    let n = arr.length;
    
    // Step 2: Loop through the array to compare elements
    for(let i = 0; i < n; i++){
        if(largestElement < arr[i]){
            // Step 3: Update the champion if a larger number is found
            largestElement = arr[i];
        }
    }
    
    // Step 4: Output the result
    console.log(largestElement);
}

findLargestElement([11, 23, 56, 8, 9, 0]); // Output: 56


# How to Find the Largest Number in an Array: A Step-by-Step JavaScript Guide

Whether you are prepping for your first technical interview or just brushing up on core programming concepts, manipulating arrays is a fundamental skill every JavaScript developer needs.

Today, we are going to break down an elegant, beginner-friendly way to find the largest element in an array using a simple logic-driven approach.

## The Problem

Imagine you have a collection of numbers, like high scores in a game or product prices. Your task is to write a function that looks through the list and hands you back the single highest value.

For example, given this input: [11, 23, 56, 8, 9, 0]

The output should be: 56

Let’s see how we can build a JavaScript function to solve this from scratch.

## The Solution: Step-by-Step Code

Here is a clean, modern ES6+ approach using an arrow function and a standard for loop:

```javascript
const findLargestElement = (arr) => {
    // Step 1: Initialize your champion
    let largestElement = arr[0];
    let n = arr.length;
    
    // Step 2: Loop through the array to compare elements
    for(let i = 0; i < n; i++){
        if(largestElement < arr[i]){
            // Step 3: Update the champion if a larger number is found
            largestElement = arr[i];
        }
    }
    
    // Step 4: Output the result
    console.log(largestElement);
}

// Test the function
findLargestElement([11, 23, 56, 8, 9, 0]); // Output: 56

```
## How It Works Under the Hood

The logic here follows a very human way of thinking. Imagine I hand you a deck of cards with numbers on them one by one. How would you find the highest one?

### 1. Set a Baseline

```javascript
let largestElement = arr[0];

```

Before we start looking at the rest of the list, we assume the very first element (arr[0]) is currently the largest. Think of it as our temporary "champion."

### 2. The Scan

```javascript
for(let i = 0; i < n; i++) { ... }

```
We use a for loop to look at every single number in the array, starting from index 0 all the way to the end (n).

### 3. The Comparison

```javascript
if(largestElement < arr[i]){
    largestElement = arr[i];
}

```

As the loop visits each number (arr[i]), it asks: *"Is this new number bigger than our current champion?"* If the answer is **yes**, the old champion is discarded, and the new number takes its place as the largestElement.

## Performance & Complexity

When writing code, it is always a good habit to think about efficiency:

 * **Time Complexity:** **O(n)** (Linear Time). Because we have to inspect each element in the array exactly once, the time it takes grows proportionally with the size of the array.

 * **Space Complexity:** **O(1)** (Constant Space). We aren't creating any new arrays or storing massive data in memory; we are just tracking a couple of simple variables.

## Bonus: 
The Built-in JavaScript Shortcut
While writing a for loop is fantastic for understanding algorithmic logic, JavaScript actually gives us a built-in one-liner to achieve this exact result using Math.max() and the spread operator (...):

```javascript
const findLargestShortcut = (arr) => console.log(Math.max(...arr));

findLargestShortcut([11, 23, 56, 8, 9, 0]); // Output: 56

```
> **Pro-Tip:** While Math.max(...arr) is short and sweet, using manual loops (like our first solution) is highly valued in coding interviews because it demonstrates your grasp of fundamental problem-solving patterns!
> 

### Wrap Up

And there you have it! You’ve just mastered a core array manipulation pattern.

*If you found this guide helpful, drop some **claps 👏** and follow along for more practical JavaScript breakdowns! What's your favorite way to handle array manipulations? Let me know in the comments below.*
