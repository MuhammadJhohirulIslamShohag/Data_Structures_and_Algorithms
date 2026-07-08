// Brute Force Approach
// Time Complexity: O(n log n)
// Space Complexity: O(n)
//
// Count the frequency of each number,
// then sort the frequencies in descending order
// and return the top k elements.
function mostCommonElementsBrute(numbers, k) {

    // Stores the frequency of each number
    const map = new Map();

    // Count how many times each number appears
    for (let num of numbers) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Convert the map into an array and sort by frequency (highest first)
    const sortedEntries = [...map.entries()].sort((a, b) => b[1] - a[1]);

    // Return only the first k numbers
    return sortedEntries
        .slice(0, k)
        .map(entry => entry[0]);
}

console.log(mostCommonElementsBrute([4, 4, 4, 6, 6, 5, 5, 5], 2)); // [4, 5]
console.log(mostCommonElementsBrute([7, 7, 7, 8, 8, 9, 9, 9], 3)); // [7, 9, 8]



// Optimal Approach (Bucket Sort)
// Time Complexity: O(n)
// Space Complexity: O(n)
//
// Instead of sorting the frequencies,
// place each number into a bucket based on
// how many times it appears.
//
// Then iterate through the buckets from highest
// frequency to lowest until k elements are collected.
function topKFrequentOptimal(numbers, k) {

    const n = numbers.length;

    // Stores the frequency of each number
    const freqMap = new Map();

    // Count the occurrences of each number
    for (let num of numbers) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Create buckets where index = frequency
    // Each bucket stores numbers with that frequency
    const buckets = new Array(n + 1)
        .fill(null)
        .map(() => []);

    // Place each number into its corresponding bucket
    for (let [num, freq] of freqMap.entries()) {
        buckets[freq].push(num);
    }

    // Stores the final top k frequent elements
    const result = [];

    // Traverse buckets from highest frequency to lowest
    for (let freq = buckets.length - 1; freq >= 1 && result.length < k; freq--) {

        // Add all numbers in the current bucket
        for (let num of buckets[freq]) {
            result.push(num);

            // Stop once k elements have been collected
            if (result.length === k) {
                break;
            }
        }
    }

    // Return the top k frequent elements
    return result;
}

console.log(topKFrequentOptimal([4, 4, 4, 6, 6, 5, 5, 5], 3)); // [4, 5, 6]