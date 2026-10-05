class Solution {
    /**
     * Moves all zeroes in the array to the end while maintaining 
     * the relative order of non-zero elements.
     * 
     * Strategy: Two-pointer optimal swap approach in-place.
     * 
     * @param {number[]} nums - Input array of numbers to modify in-place
     * @returns {void}
     */
    moveZeroes(nums) {
        // Pointer tracking where the next non-zero element should be placed
        let insertPos = 0;

        // Iterate through each element in the array
        for (let i = 0; i < nums.length; i++) {
            // When a non-zero element is found
            if (nums[i] !== 0) {
                // Swap current element with the target insert position
                // Skip self-swapping if no zeroes have been encountered yet
                if (i !== insertPos) {
                    [nums[insertPos], nums[i]] = [nums[i], nums[insertPos]];
                }

                // Move target insert index forward for the next non-zero element
                insertPos++;
            }
        }
    }
}
