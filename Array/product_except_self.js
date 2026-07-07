// Brute Force Approach
// Time Complexity: O(n²)
// Space Complexity: O(n)
//
// For each element, multiply every other element in the array
// except the current one.
const productExceptSelfBrute = (arr) => {
    const n = arr.length;

    // Stores the final product for each index
    const result = new Array(n);

    // Process each element as the excluded element
    for (let i = 0; i < n; i++) {
        let product = 1;

        // Multiply all elements except arr[i]
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                product *= arr[j];
            }
        }

        // Save the product for the current index
        result[i] = product;
    }

    // Return the resulting array
    return result;
};

console.log(productExceptSelfBrute([0, 0, -1, 1]));



// Optimal Approach (Prefix & Suffix Products)
// Time Complexity: O(n)
// Space Complexity: O(n)
//
// Instead of recomputing products for every index,
// calculate:
// 1. Prefix product (product of all elements before the current index)
// 2. Suffix product (product of all elements after the current index)
//
// Multiply prefix and suffix products to get the answer.
const productExceptSelfOptimal = (numbers) => {
    const n = numbers.length;

    // Initialize the result array with 1s
    const result = new Array(n).fill(1);

    // Prefix product (left side)
    let prefix = 1;

    for (let i = 0; i < n; i++) {
        // Store the product of all elements before index i
        result[i] = prefix;

        // Update prefix for the next iteration
        prefix *= numbers[i];
    }

    // Suffix product (right side)
    let suffix = 1;

    for (let i = n - 1; i >= 0; i--) {
        // Multiply the existing prefix product by the suffix product
        result[i] *= suffix;

        // Update suffix for the next iteration
        suffix *= numbers[i];
    }

    // Return the final product array
    return result;
};

console.log(productExceptSelfOptimal([0, 0, -1, 1]));