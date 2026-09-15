/*

****** Bit Counting ******

Given a non-negative integer n, write a function that takes the non-negative integer n and return an array result of size n + 1 where result[i] represents the number of active bits (set bits to 1) in the binary representation of the integer i (where 0 <= i <= n).

*/

/**
 * Helper: Counts the number of set bits (1s) in a non-negative integer.
 * 
 * Time Complexity:  O(log num) — process each bit position of `num` (at most 32 bits for standard integers).
 * Space Complexity: O(1)       — uses a constant amount of extra memory.
 */

function countBits(num) {
  let count = 0;

  while (num > 0) {
    // Check if the least significant bit (LSB) is 1 and add to count
    count += num & 1;

    // Shift bits to the right by 1 position (equivalent to dividing by 2)
    num = num >> 1;
  }

  return count;
}

/**
 * Main: Calculates set bit counts for every number from 0 up to `n`.
 * 
 * Overall Time Complexity:  O(n log n) — loops n times, performing an O(log i) operation per iteration.
 * Overall Space Complexity: O(n)       — returns an array containing (n + 1) elements.
 */

function bitCountingBruteForce(n) {
  const result = [];

  for (let i = 0; i <= n; i++) {
    result.push(countBits(i));
  }

  return result;
}

console.log(bitCountingBruteForce(5)); 
// Output: [0, 1, 1, 2, 1, 2]


