/*
     Find Duplicates in Array
*/

// Brute Force Approach
// Time Complexity: O(n²)
// Space Complexity: O(1)
function containsDuplicateBrute(numbers) {
    // Compare every element with every other element after it
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {

            // If two elements are the same, a duplicate exists
            if (numbers[i] === numbers[j]) {
                return true;
            }
        }
    }

    // No duplicates were found
    return false;
}


// Optimal Approach using a Set
// Time Complexity: O(n)
// Space Complexity: O(n)
function containsDuplicateOptimal(numbers) {
    // Store elements we've already seen
    const seen = new Set();

    // Iterate through each number in the array
    for (let num of numbers) {

        // If the number is already in the Set,
        // we've found a duplicate
        if (seen.has(num)) {
            return true;
        }

        // Otherwise, add it to the Set
        seen.add(num);
    }

    // Finished checking all elements without finding duplicates
    return false;
}

