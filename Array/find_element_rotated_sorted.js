// Brute Force Approach
// Time Complexity: O(n)
// Space Complexity: O(1)
//
// Check each element one by one until the target is found.
const find_Element_Rotated_Sorted_Brute = (numbers, target) => {
    const n = numbers.length;

    // Traverse the entire array
    for (let i = 0; i < n; i++) {

        // If the current element matches the target,
        // return its index immediately.
        if (numbers[i] === target) {
            return i;
        }
    }

    // Target does not exist in the array
    return -1;
};

console.log(find_Element_Rotated_Sorted_Brute([2, 3, 4, 0, 1, 2], 0));



// Optimal Approach (Modified Binary Search)
// Time Complexity: O(log n)
// Space Complexity: O(1)
//
// In a rotated sorted array, at least one half
// (left or right) is always sorted.
// Identify the sorted half and determine
// whether the target lies within it.
const find_Element_Rotated_Sorted_Optimal = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;

    // Continue searching while the search space is valid
    while (left <= right) {

        // Find the middle index
        let mid = Math.floor((left + right) / 2);

        // Target found
        if (numbers[mid] === target) {
            return mid;
        }

        // Check if the left half is sorted
        if (numbers[left] <= numbers[mid]) {

            // Target lies within the sorted left half
            if (numbers[left] <= target && target < numbers[mid]) {
                right = mid - 1;
            } else {
                // Otherwise, search the right half
                left = mid + 1;
            }

        } else {
            // Otherwise, the right half must be sorted

            // Target lies within the sorted right half
            if (numbers[mid] < target && target <= numbers[right]) {
                left = mid + 1;
            } else {
                // Otherwise, search the left half
                right = mid - 1;
            }
        }
    }

    // Target was not found
    return -1;
};

console.log(find_Element_Rotated_Sorted_Optimal([2, 3, 4, 0, 1, 2], 0));