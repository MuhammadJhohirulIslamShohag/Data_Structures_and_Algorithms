/**
 * Dynamic Programming - House Robber II (Circular Neighborhood)
 * 
 * Goal: Maximize stolen loot in a circular street where the FIRST and LAST 
 * houses are neighbors. Robbing both adjacent houses triggers the alarm!
 */

// ============================================================================
// Helper Function: Standard Linear House Robber (O(N) Time, O(1) Space)
// ============================================================================
const robberLinear = (numbers) => {
    // Stores max loot up to house (i - 1) and (i - 2) respectively
    let prev1 = 0;
    let prev2 = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        // Choice: Skip current house (prev1) OR rob current house (prev2 + numbers[i])
        const current = Math.max(prev1, prev2 + numbers[i]);
        
        // Advance state variables forward for the next iteration
        prev2 = prev1;
        prev1 = current;
    }
    
    // prev1 holds the maximum loot achievable across the array slice
    return prev1;
};


// ============================================================================
// Main Function: Circular Street Logic
// ============================================================================
const neighborhoodTheftCircular = (numbers) => {
    const n = numbers.length;
    
    // Base cases for small inputs where circular constraints don't apply
    if (n === 0) return 0;
    if (n === 1) return numbers[0];
    
    // Circular Breakdown:
    // Since house 0 and house (n - 1) are adjacent, we CANNOT rob both.
    // This leaves us with two mutually exclusive choices:
    
    // Case 1: Exclude the first house -> consider houses from index 1 to (n - 1)
    const case1 = robberLinear(numbers.slice(1));
    
    // Case 2: Exclude the last house -> consider houses from index 0 to (n - 2)
    const case2 = robberLinear(numbers.slice(0, n - 1));

    // Return the maximum yield between both scenarios
    return Math.max(case1, case2);
};

console.log(neighborhoodTheftCircular([1, 2, 3, 1])); // Output: 3 (Rob house 1 [val 2] or house 2 [val 3])
