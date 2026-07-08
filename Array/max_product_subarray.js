// Brute Force Approach
// Time Complexity: O(n²)
// Space Complexity: O(1)
//
// Generate every possible subarray, calculate its product,
// and keep track of the maximum product found.
function maxProductSubarrayBrute(numbers) {

    // Initialize the maximum product with the first element
    let maxProduct = numbers[0];

    // Choose each index as the starting point
    for (let i = 0; i < numbers.length; i++) {

        // Product of the current subarray
        let product = 1;

        // Extend the subarray one element at a time
        for (let j = i; j < numbers.length; j++) {

            // Update the running product
            product *= numbers[j];

            // Update the maximum product if needed
            maxProduct = Math.max(maxProduct, product);
        }
    }

    // Return the largest product found
    return maxProduct;
}



// Optimal Approach (Dynamic Programming)
// Time Complexity: O(n)
// Space Complexity: O(1)
//
// Keep track of both the maximum and minimum product ending
// at the current index because multiplying by a negative
// number can turn the smallest product into the largest.
function maxProductSubarrayOptimal(numbers) {

    // Maximum product ending at the current index
    let maxEndingHere = numbers[0];

    // Minimum product ending at the current index
    let minEndingHere = numbers[0];

    // Overall maximum product found so far
    let result = numbers[0];

    // Start from the second element
    for (let i = 1; i < numbers.length; i++) {
        const num = numbers[i];

        // If the current number is negative,
        // swap the max and min products.
        if (num < 0) {
            [maxEndingHere, minEndingHere] = [minEndingHere, maxEndingHere];
        }

        // Either start a new subarray or extend the previous one
        maxEndingHere = Math.max(num, maxEndingHere * num);
        minEndingHere = Math.min(num, minEndingHere * num);

        // Update the overall maximum product
        result = Math.max(result, maxEndingHere);
    }

    // Return the maximum product subarray
    return result;
}