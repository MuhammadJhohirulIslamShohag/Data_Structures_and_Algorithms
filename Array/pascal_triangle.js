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
