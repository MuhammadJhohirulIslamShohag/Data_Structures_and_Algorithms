/*
  Palindromic Substrings

  Given a string str, determine the total number of substrings that are palindromes.
*/
/**
 * Counts all palindromic substrings in a given string using a brute-force approach.
 * 
 * Time Complexity: O(n³) — O(n²) to generate all substrings * O(n) to check palindrome status
 * Space Complexity: O(n) — memory allocated by `str.slice()`
 * 
 * @param {string} str - The input string to evaluate.
 * @return {number} - The total count of palindromic substrings.
 */
function countPalindromicSubstringsBrute(str) {
  // Step 1: Initialize a counter for tracking palindromes and get the string length
  let count = 0;
  const n = str.length;

  // Step 2: Set the starting index for potential substrings
  for (let start = 0; start < n; start++) {
    
    // Step 3: Set the ending index (inclusive) to form every possible substring starting from 'start'
    for (let end = start; end < n; end++) {
      
      // Step 4: Extract the current substring from index 'start' up to 'end'
      const substring = str.slice(start, end + 1); 
      
      // Step 5: Check if the extracted substring is a palindrome
      if (isPalindrome(substring)) {           
        // Step 6: Increment the counter if a valid palindrome is found
        count++;
      }
    }
  }

  // Step 7: Return the final count of all palindromic substrings
  return count;
}


/**
 * Helper function: Checks if a given string reads the same forwards and backwards.
 * 
 * @param {string} s - The substring to test.
 * @return {boolean} - Returns true if the string is a palindrome, false otherwise.
 */
function isPalindrome(s) {
  // Step 1: Initialize two pointers—one at the beginning and one at the end of the string
  let left = 0;
  let right = s.length - 1;

  // Step 2: Loop until the two pointers meet or cross at the middle
  while (left < right) {
    // Step 3: Compare characters at the current pointers; if they don't match, it's not a palindrome
    if (s[left] !== s[right]) return false;
    
    // Step 4: Move the left pointer rightward and the right pointer leftward
    left++;
    right--;
  }
  
  // Step 5: If all opposing character pairs match, confirm it is a palindrome
  return true;
}

/**
 * Counts all palindromic substrings in a given string using the Expand Around Center approach.
 * 
 * Time Complexity: O(n²) — We iterate through 2n - 1 centers, and each expansion takes up to O(n) time.
 * Space Complexity: O(1) — Constant extra space (no memory allocated for substring slices).
 * 
 * @param {string} str - The input string to evaluate.
 * @return {number} - The total count of palindromic substrings.
 */
function countPalindromicSubstringsOptimal(str) {
  // Step 1: Initialize a counter for tracking palindromes and get the string length
  let count = 0;
  const n = str.length;

  // Step 2: Iterate through every character index, treating each position as a potential center
  for (let center = 0; center < n; center++) {
    
    // Step 3: Count odd-length palindromes (single-character center, e.g., "aba" centered at 'b')
    count += expandAroundCenter(str, center, center);
    
    // Step 4: Count even-length palindromes (two-character center, e.g., "abba" centered between 'b' and 'b')
    count += expandAroundCenter(str, center, center + 1);
  }

  // Step 5: Return the total count of all palindromic substrings found
  return count;
}


/**
 * Helper function: Expands outward from a center and counts valid palindromic substrings.
 * 
 * @param {string} str - The full input string.
 * @param {number} left - The starting left index pointer.
 * @param {number} right - The starting right index pointer.
 * @return {number} - The number of valid palindromes expanding from this center.
 */
function expandAroundCenter(str, left, right) {
  // Step 1: Initialize a counter for palindromes expanded from the current center
  let count = 0;

  // Step 2: Expand outward as long as pointers stay within bounds and characters match
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    
    // Step 3: Increment count since matching characters on both sides form a valid palindrome
    count++;
    
    // Step 4: Expand the window outward (move left pointer left, right pointer right)
    left--;
    right++;
  }

  // Step 5: Return the count of valid palindromes expanded from this specific center
  return count;
}

