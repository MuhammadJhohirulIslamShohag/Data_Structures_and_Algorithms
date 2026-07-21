/*
   Maximum Water Trapped Between Walls
Languages

Given an array walls of wall heights, calculate the maximum volume of water that will be trapped between two walls and the x-axis after a heavy downpour.

*/

/**
 * Approach 1: Brute Force
 * -----------------------------------------------------------------
 * Evaluates every possible pair of walls to find the maximum water area.
 * 
 * Time Complexity:  O(n²) - Uses nested loops to check all pairs.
 * Space Complexity: O(1)  - Constant extra space.
 */
const maximumWaterBetweenWalls = (walls) => {
    let maxArea = 0;
    const n = walls.length;
    
    // Check every wall as the left boundary
    for (let i = 0; i < n; i++) {
        // Check every subsequent wall as the right boundary
        for (let j = i + 1; j < n; j++) {
            // Distance between the two wall indices
            const width = j - i;
            
            // Water height is constrained by the shorter wall
            const height = Math.min(walls[i], walls[j]);
            
            const area = width * height;
            
            // Track the largest container area found
            maxArea = Math.max(maxArea, area);
        }
    }
    
    return maxArea;
};

console.log(maximumWaterBetweenWalls([1, 4, 2, 3])); // Output: 6


/**
 * Approach 2: Two-Pointer Technique (Optimized)
 * -----------------------------------------------------------------
 * Starts with maximum width (outermost walls) and moves inward.
 * 
 * Time Complexity:  O(n) - Single pass through the array.
 * Space Complexity: O(1) - Constant extra space.
 */
const maximumWaterBetweenWalls1 = (walls) => {
    let maxArea = 0;
    let left = 0;                  // Pointer starting at the leftmost wall
    let right = walls.length - 1;  // Pointer starting at the rightmost wall
    
    while (left < right) {
        // Calculate dimensions for current pointers
        const width = right - left;
        const height = Math.min(walls[left], walls[right]);
        const area = width * height;
        
        // Update max area if current container holds more water
        maxArea = Math.max(maxArea, area);
        
        // Key Logic: Shift the pointer at the shorter wall inward.
        // Reason: The container's height is bottlenecked by the shorter wall. 
        // Keeping the shorter wall while reducing width can never produce a larger area.
        if (walls[left] < walls[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
};

console.log(maximumWaterBetweenWalls1([1, 4, 2, 3])); // Output: 6
