/*
   String Palindrome 
*/

/**
 * Checks if a string is a palindrome, ignoring non-alphanumeric characters
 * and case sensitivity.
 * 
 * @param {string} str - The input string to check
 * @returns {boolean} - Returns true if the string is a palindrome, false otherwise
 * 
 * @timeComplexity O(n) - Iterates through the string of length n at most once using two pointers
 * @spaceComplexity O(1) - Uses a constant amount of extra memory regardless of input size
 */


const isStringPalindrome = (str) => {

  let left = 0;
  let right = str.length - 1;

  // Helper function to check if a character is alphanumeric (A-Z, a-z, 0-9)
  const isAlphanumeric = (ch) => /[a-z0-9]/i.test(ch);

  // Use a two-pointer approach moving inwards from both ends
  while (left < right) {
    
    // Skip non-alphanumeric characters from the left
    while (left < right && !isAlphanumeric(str[left])) {
      left++;
    }
    
    // Skip non-alphanumeric characters from the right
    while (left < right && !isAlphanumeric(str[right])) {
      right--;
    }

    // Compare characters in a case-insensitive manner
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false; // Mismatch found, not a palindrome
    }

    // Move pointers inward for the next comparison
    left++;
    right--;
  }

  // All valid character pairs matched
  return true; 
}

console.log(isStringPalindrome("No 'x' in Nixon"))
