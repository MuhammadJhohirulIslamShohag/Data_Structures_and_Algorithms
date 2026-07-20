/**
 * APPROACH 1: Recursive (Brute Force)
 * ------------------------------------
 * Explores all possible subsequences using decision-tree recursion.
 * 
 * Time Complexity:  O(2^(m+n)) - Exponential! Recomputes overlapping subproblems.
 * Space Complexity: O(m + n)   - Call stack depth in the worst case.
 */

const longestCommonSubsequence = (str1, str2) => {
  function helper(i = 0, j = 0) {
    // Base Case: If either index reaches the end of its string, no more characters can match
    if (i === str1.length || j === str2.length) {
      return 0;
    }

    // Match Case: If characters match, count 1 point and move both pointers forward
    if (str1[i] === str2[j]) {
      return 1 + helper(i + 1, j + 1);
    }

    // Mismatch Case: Try skipping a character in str1 vs skipping in str2, then pick the maximum
    const skipStr1 = helper(i + 1, j);
    const skipStr2 = helper(i, j + 1);

    return Math.max(skipStr1, skipStr2);
  }

  return helper(0, 0);
};

console.log(longestCommonSubsequence('xyz', 'axabz')); // Output: 1 ('z')


/**
 * APPROACH 2: Dynamic Programming (Bottom-Up Tabulation)
 * -----------------------------------------------------
 * Builds a table storing solutions to smaller subproblems to avoid redundant work.
 * 
 * Time Complexity:  O(m * n) - Two nested loops iterating over string lengths.
 * Space Complexity: O(m * n) - 2D grid of size (m + 1) x (n + 1).
 */

const longestCommonSubsequence = (str1, str2) => {
  const m = str1.length;
  const n = str2.length;

  // dp[i][j] will store the LCS length for substrings str1[0...i-1] and str2[0...j-1]
  // Dimensions are (m+1) x (n+1) to naturally handle base cases (empty strings filled with 0)
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // Build the lookup table bottom-up
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // Offset by 1 because dp array is 1-indexed relative to string positions
      if (str1[i - 1] === str2[j - 1]) {
        // If characters match, add 1 to the result without these two characters (top-left diagonal)
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // If they don't match, take the best result from excluding current char of str1 (top) 
        // or excluding current char of str2 (left)
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // The bottom-right cell contains the answer for the full lengths of both strings
  return dp[m][n];
};

console.log(longestCommonSubsequence1('xyz', 'axabz')); // Output: 1 ('z')
