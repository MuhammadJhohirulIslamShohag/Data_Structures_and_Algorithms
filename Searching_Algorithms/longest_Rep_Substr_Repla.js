/*

  Longest Repeating Substring After Replacements

*/

/**
 * Finds the length of the longest substring containing the same letter
 * after replacing at most 'k' characters.
 * 
 * @param {string} str - The input string (uppercase English letters A-Z).
 * @param {number} k - The maximum number of character replacements allowed.
 * @returns {number} The maximum length of the valid substring.
 */

const longestSubstringReplacements = (str, k) => {
    const sl = str.length;
    let left = 0;
    let maxLength = 0;
    let maxFreq = 0; // Tracks the highest frequency of any single character in the current window
    
    // Frequency array to count occurrences of each uppercase character ('A' - 'Z')
    let count = new Array(26).fill(0);
    
    // Expand the window using the 'right' pointer
    for (let right = 0; right < sl; right++) {
        // Map character to index (0 for 'A', 1 for 'B', ..., 25 for 'Z')
        const idxChar = str.charCodeAt(right) - 65;
        
        // Update character count and keep track of the most frequent character in the window
        count[idxChar]++;
        maxFreq = Math.max(maxFreq, count[idxChar]);
        
        // Current window size
        let window = right - left + 1;
        
        // If the number of characters to replace (window size - maxFreq) exceeds 'k',
        // the current window is invalid, so shrink it from the left.
        if (window - maxFreq > k) {
            let leftIdx = str.charCodeAt(left) - 65;
            
            // Decrement the count of the character leaving the window
            count[leftIdx]--; // Removed post-decrement on leftIdx variable itself
            left++;           // Move left boundary forward
        }
        
        // Update maximum valid length found so far
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};

console.log(longestSubstringReplacements('AAAA', 2)); // Output: 4
