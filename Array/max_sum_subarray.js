// Brute Force Approach
// Time Complexity: O(n²)
// Space Complexity: O(1)
//
// Generate every possible subarray, calculate its sum,
// and keep track of the maximum sum found.
function maxSumSubarrayBrute(numbers) {

    // Initialize with the first element
    let maxSum = numbers[0];

    // Choose each index as the starting point
    for (let i = 0; i < numbers.length; i++) {

        // Running sum for the current subarray
        let sum = 0;

        // Extend the subarray one element at a time
        for (let j = i; j < numbers.length; j++) {

            // Add the current element
            sum += numbers[j];

            // Update the maximum sum if needed
            maxSum = Math.max(maxSum, sum);
        }
    }

    // Return the largest subarray sum
    return maxSum;
}

console.log(maxSumSubarrayBrute([1, 2, 3, 4])); // Output: 10



// Optimal Approach (Kadane's Algorithm)
// Time Complexity: O(n)
// Space Complexity: O(1)
//
// At each index, decide whether to:
// 1. Start a new subarray from the current element, or
// 2. Extend the previous subarray.
//
// Keep track of the maximum sum seen so far.
function maxSumSubarrayOptimal(numbers) {

    // Maximum subarray sum found so far
    let maxSum = numbers[0];

    // Maximum sum ending at the current index
    let currentSum = numbers[0];

    // Start from the second element
    for (let i = 1; i < numbers.length; i++) {

        // Current element
        const num = numbers[i];

        // Either start a new subarray or extend the previous one
        currentSum = Math.max(num, currentSum + num);

        // Update the overall maximum sum
        maxSum = Math.max(maxSum, currentSum);
    }

    // Return the maximum subarray sum
    return maxSum;
}

console.log(maxSumSubarrayOptimal([1, 2, 3, 4])); // Output: 10