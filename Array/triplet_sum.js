/**
 * Finds all unique triplets in an array that sum to zero (Brute-Force approach).
 * 
 * @param {number[]} numbers - Array of integers to search.
 * @returns {number[][]} Array of unique triplet arrays, sorted lexicographically.
 * 
 * Time Complexity:  O(N³) due to three nested loops + sorting inside
 * Space Complexity: O(U) where U is the number of unique zero-sum triplets
 */
function tripletSumBruteForce(numbers) {
    const n = numbers.length;
    const result = [];
    const seenTriplets = new Set(); // Stores stringified triplets to prevent duplicates
    
    // Step 1: Try every combination of 3 distinct indices (i < j < k)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                
                // Step 2: Check if current triplet sums to 0
                if (numbers[i] + numbers[j] + numbers[k] === 0) {
                    
                    // Sort the 3 numbers so identical triplets have the same order
                    const triplet = [numbers[i], numbers[j], numbers[k]].sort((a, b) => a - b);
                    
                    // Convert to a string key (e.g., "-1,0,1") for easy Set lookup
                    const key = triplet.join(',');
                    
                    // Step 3: Add only if we haven't encountered this triplet before
                    if (!seenTriplets.has(key)) {
                        seenTriplets.add(key);
                        result.push(triplet);
                    }
                }
            }
        }
    }
    
    // Step 4: Sort the final output array based on first element, then second
    return result.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}

// Example usage:
// Expected output: [ [-1, -1, 2], [-1, 0, 1] ]
console.log(tripletSumBruteForce([-1, 0, 1, 2, -1, -4])); 
