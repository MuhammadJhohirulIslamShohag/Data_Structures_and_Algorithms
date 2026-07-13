// Pattern: Hash Set + Sequence Detection
//
// Time Complexity: O(n)
// Space Complexity: O(n)
//
// Idea:
// 1. Store all numbers in a Hash Set for O(1) lookups.
// 2. A number is the start of a sequence only if (num - 1)
//    does not exist in the Set.
// 3. From each starting number, keep moving forward
//    until the sequence ends.
// 4. Track the length of the longest sequence.
//
// Why this works:
// Every number is visited at most once while extending a sequence,
// resulting in an overall O(n) solution.



// Optimal Approach (Hash Set)
// Time Complexity: O(n)
// Space Complexity: O(n)
//
// Store all numbers in a Set for O(1) lookups.
// A number is considered the start of a sequence
// only if the previous number does not exist.
// From each starting point, count the consecutive numbers.
const longestConsecutiveNumberSeq = (numbers) => {

    // Handle empty array
    if (numbers.length === 0) {
        return 0;
    }

    // Store all unique numbers for fast lookups
    const numSet = new Set(numbers);

    // Length of the longest consecutive sequence found
    let maxLength = 0;

    // Check every unique number
    for (let num of numSet) {

        // Start counting only if this is the beginning
        // of a consecutive sequence
        if (!numSet.has(num - 1)) {

            let currentNum = num;
            let currentStreak = 1;

            // Continue while the next consecutive number exists
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            // Update the longest sequence length
            maxLength = Math.max(maxLength, currentStreak);
        }
    }

    // Return the longest consecutive sequence length
    return maxLength;
};

console.log(longestConsecutiveNumberSeq([1, -1, 0, 8, 11, 10, 9, 9])); // Output: 4

