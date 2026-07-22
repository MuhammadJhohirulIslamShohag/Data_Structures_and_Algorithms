/*
  Neighborhood Theft
*/

/**
 * Dynamic Programming - House Robber / Neighborhood Theft Problem
 * 
 * Goal: Maximize stolen value without robbing two adjacent houses.
 */

// ============================================================================
// Approach 1: Dynamic Programming with Array (O(N) Time, O(N) Space)
// ============================================================================
const neighborhoodTheft = (numbers) => {
    const n = numbers.length;
    
    // Base Cases: Edge cases for empty arrays or single-house neighborhoods
    if (n === 0) return 0;
    if (n === 1) return numbers[0];
    
    // Initialize DP array where dp[i] stores the max loot obtainable up to house i
    let dp = new Array(n);
    
    // Base DP States:
    dp[0] = numbers[0];                         // House 0: Only option is to rob it
    dp[1] = Math.max(numbers[0], numbers[1]);   // House 1: Choose the richer of the first two
    
    // Fill the DP table iteratively
    for (let i = 2; i < n; i++) {
        // Transition relation:
        // Option A: Skip current house -> keep total up to house (i - 1)
        // Option B: Rob current house -> add current value to total up to house (i - 2)
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + numbers[i]);
    }
    
    // The last entry contains the overall maximum value
    return dp[n - 1];
};

console.log(neighborhoodTheft([1, 2, 3, 1])); // Output: 4 (Rob house 0 + house 2 = 1 + 3)


// ============================================================================
// Approach 2: Space-Optimized Dynamic Programming (O(N) Time, O(1) Space)
// ============================================================================
const neighborhoodTheftOptimal = (numbers) => {
    const n = numbers.length;
    
    // Base Cases
    if (n === 0) return 0;
    if (n === 1) return numbers[0];
    
    // Instead of an array, we only track the last two states:
    // prev1: max loot up to house (i - 1)
    // prev2: max loot up to house (i - 2)
    let prev1 = 0;
    let prev2 = 0;
    
    for (let i = 0; i < n; i++) {
        // Decide whether to skip current house (prev1) or rob it (prev2 + numbers[i])
        const current = Math.max(prev1, prev2 + numbers[i]);
        
        // Shift pointers forward for the next iteration
        prev2 = prev1;
        prev1 = current;
    }
    
    // Note: Since the loop runs all the way to n - 1, prev1 holds the final result!
    // Returning prev1 instead of prev2 fixes the return value for optimal output.
    return prev1; 
};

console.log(neighborhoodTheftOptimal([1, 2, 3, 1])); // Output: 4
