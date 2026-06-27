/*
   Program to generate Pascal's Triangle
*/

const generatePascalTriangle = (numRow) => {
    // Handle the edge case for 0 rows
    if (numRow === 0) return [];

    let triangle = [];

    for (let i = 0; i < numRow; i++) {
        // Create a new row of length (i+1), pre-filled with 1s
        let row = new Array(i + 1).fill(1);

        // Fill in the middle values based on the previous row
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        // Add the completed row to our triangle
        triangle.push(row);
    }

    return triangle;
};

// Test the function
console.log(generatePascalTriangle(5));

/*

## Mastering Pascal's Triangle in JavaScript: A Clean Approach

Pascal’s Triangle is a classic computer science problem that serves as a fantastic exercise for understanding nested loops, array manipulation, and dynamic programming concepts.

Whether you are preparing for a technical interview or simply sharpening your coding skills, knowing how to generate this triangle efficiently is a great asset. Today, we’re going to break down a clean, readable JavaScript solution to generate Pascal’s Triangle.

### The Logic Behind the Triangle

In Pascal’s Triangle, each number is the sum of the two numbers directly above it. The edges of the triangle are always 1.

To represent this programmatically, we can think of the triangle as an array of arrays. For any given row i and column j:

 * The first and last elements are always 1.
 * Any element in between is calculated as: triangle[i-1][j-1] + triangle[i-1][j].

### The Implementation

Here is a concise way to implement this in JavaScript:

```javascript
const generatePascal = (numRow) => {
    // Handle the edge case for 0 rows
    if (numRow === 0) return [];

    let triangle = [];

    for (let i = 0; i < numRow; i++) {
        // Create a new row of length (i+1), pre-filled with 1s
        let row = new Array(i + 1).fill(1);

        // Fill in the middle values based on the previous row
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        // Add the completed row to our triangle
        triangle.push(row);
    }

    return triangle;
};

// Test the function
console.log(generatePascal(5));

```
### Why this approach works:

 1. **Pre-filling with 1s**: By initializing the array with new Array(i + 1).fill(1), we automatically handle the edges of the triangle. We only need to focus our logic on the "inner" elements.

 2. **Efficient Lookups**: Because we build the triangle row by row, triangle[i-1] is always readily available to calculate the values for the current row.

 3. **Readability**: Using the fill() method keeps the code clean and removes the need for extra conditional logic to handle the start and end of each row.

### Complexity Analysis

 * **Time Complexity**: O(n^2), where n is the number of rows. We have a nested loop structure where the total number of operations is proportional to the number of elements in the triangle, which is \frac{n(n+1)}{2}.

 * **Space Complexity**: O(n^2) to store the generated triangle.

### Final Thoughts

Pascal’s Triangle is more than just a math curiosity; it’s a beautiful demonstration of how simple iterative logic can build complex structures. This implementation is efficient, easy to follow, and a great addition to your coding toolkit.

**Have you tackled Pascal's Triangle in other languages? How did your approach differ? Let me know in the comments!**
*Happy Coding!*

*/
