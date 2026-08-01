/*
    Staircase Climbing Combinations

Given a staircase with a length of steps, where you can take 1 or 2 steps at a time, find the number of distinct combinations to reach the top of the staircase from the bottom of the stairs.

*/

/**
 * Approach 1: Recursive (Brute Force)
 * ------------------------------------
 * Time Complexity:  O(2^n) - Exponential growth due to overlapping subproblems.
 * Space Complexity: O(n)   - Recursion stack depth.
 * 
 * Logic: To reach step N, you could have come from:
 *   Step (N - 1) by taking 1 step, OR
 *   Step (N - 2) by taking 2 steps.
 */
const staircaseClimbingCombinations = (steps) => {
    // Step 1: Base Case
    // If steps is 0 or 1, there is only 1 valid way to reach the target 
    // (0 steps = 1 way [do nothing], 1 step = 1 way [1 single step]).
    if (steps <= 1) {
        return 1;
    }
    
    // Step 2: Recursive Step
    // Total combinations = (Ways to reach step - 1) + (Ways to reach step - 2)
    return staircaseClimbingCombinations(steps - 1) + staircaseClimbingCombinations(steps - 2);
};

console.log("Recursive Result:", staircaseClimbingCombinations(5)); // Output: 8


/**
 * Approach 2: Iterative / Space-Optimized Dynamic Programming
 * ------------------------------------------------------------
 * Time Complexity:  O(n) - Single loop running n times.
 * Space Complexity: O(1) - Only uses two variables instead of an entire array.
 * 
 * Logic: Bottom-up approach. We start from 0 steps and build up to N steps,
 * maintaining only the previous two calculated values at any given point.
 */
const staircaseClimbingCombinationsOptimal = (steps) => {
    // Step 1: Base Case Check
    // Handled immediately if 0 or 1 step is requested.
    if (steps <= 1) {
        return 1;
    }
    
    // Step 2: Track state using two pointers (Fibonacci approach)
    // prev2 represents ways(i - 2), initialized for step 0
    // prev1 represents ways(i - 1), initialized for step 1
    let prev2 = 1; 
    let prev1 = 1; 
    
    // Step 3: Iteratively calculate combinations for each step from 2 up to N
    for (let i = 2; i <= steps; i++) {
        // Compute total combinations for the current step 'i'
        let current = prev1 + prev2;
        
        // Shift pointers forward for the next iteration
        prev2 = prev1;   // Move prev2 up to what was prev1
        prev1 = current; // Move prev1 up to the current total
    }
    
    // Step 4: After reaching 'steps', prev1 holds the final result
    return prev1;
};

console.log("Optimal Result:", staircaseClimbingCombinationsOptimal(5)); // Output: 8
