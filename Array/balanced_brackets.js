/*
  Balanced Brackets
*/

// ==========================================
// Brute Force Approach
// Time Complexity: O(n²)
// Space Complexity: O(n)
// ==========================================

function isBalancedBrute(str) {
    // Create a copy of the input string
    let s = str;
    let prevLength;

    // Keep removing matching bracket pairs until
    // no more replacements can be made.
    do {
        prevLength = s.length;

        // Remove one occurrence of each valid pair
        s = s
            .replace("()", "")
            .replace("[]", "")
            .replace("{}", "");

    } while (s.length !== prevLength);

    // If every bracket was removed, the string is balanced
    return s.length === 0;
}

console.log(isBalancedBrute("([]){}"));


// ==========================================
// Stack (Optimal) Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
// ==========================================

function isBalancedOptimal(str) {
    // Stack to store opening brackets
    let stack = [];

    // Maps every closing bracket to its matching opening bracket
    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    // Traverse each character in the string
    for (let char of str) {

        // If it's an opening bracket, push it onto the stack
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            // If stack is empty or brackets don't match,
            // the string is not balanced
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    // String is balanced only if no unmatched opening brackets remain
    return stack.length === 0;
}

console.log(isBalancedOptimal("([]){}"));