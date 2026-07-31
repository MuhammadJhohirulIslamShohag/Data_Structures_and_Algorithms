/*
   String Anagram

Given two strings str1 and str2, determine if str2 is an anagram of str1 and return true if it is, and false otherwise.

*/

/**
 * BRUTE FORCE APPROACH (Sorting)
 * ------------------------------
 * Time Complexity:  O(N log N) - driven by JavaScript's Array.prototype.sort()
 * Space Complexity: O(N)       - creates intermediate arrays via split() and new joined strings
 */
const isStringAnagramBrute = (str1, str2) => {
    // Step 1: Check length guard condition
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Step 2: Transform str1 ("listen" -> ["l","i","s","t","e","n"] -> ["e","i","l","n","s","t"] -> "eilnst")
    const sortStr1 = str1.split('').sort().join('');
    
    // Step 3: Transform str2 ("silent" -> ["s","i","l","e","n","t"] -> ["e","i","l","n","s","t"] -> "eilnst")
    const sortStr2 = str2.split('').sort().join('');
    
    // Step 4: Compare "eilnst" === "eilnst"
    return sortStr1 === sortStr2;
};

console.log(isStringAnagramBrute("listen", "silent")); // Output: true

/**
 * OPTIMAL APPROACH (Fixed-size Array / Frequency Counter)
 * -------------------------------------------------------
 * Time Complexity:  O(N) - single iteration over string length N
 * Space Complexity: O(1) - fixed array of 26 integers, regardless of input length
 */
const isStringAnagramOptimal = (str1, str2) => {
    // Step 1: Check length guard condition
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Step 2: Initialize a frequency array of size 26 (indices 0 to 25 represent 'a' through 'z')
    let count = new Array(26).fill(0);
    
    // Step 3: Iterate through both strings at the same time
    for (let i = 0; i < str1.length; i++) {
        // str1.charCodeAt(i) gives ASCII code (e.g., 'a' = 97, 'b' = 98)
        // Subtracting 97 maps ASCII values to 0-25 array index bounds
        
        // Add 1 for character in str1
        count[str1.charCodeAt(i) - 97]++;
        
        // Subtract 1 for character in str2
        count[str2.charCodeAt(i) - 97]--;
    }
    
    // Step 4: If all frequency counts balanced back to zero, it's a valid anagram
    return count.every(c => c === 0);
};

console.log(isStringAnagramOptimal("listen", "silent")); // Output: true




