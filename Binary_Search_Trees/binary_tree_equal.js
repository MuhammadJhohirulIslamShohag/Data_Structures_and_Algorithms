/*
  Binary Tree Equal

Given the root nodes of two binary trees, a and b, determine whether the two trees are equal.

Two binary trees are considered equal if they have the same structure and the corresponding nodes in both trees have the same values.

*/
/**
 * Determines whether two binary trees are structurally identical and have equal node values.
 * 
 * @param {Object|null} a - Root node of the first binary tree.
 * @param {Object|null} b - Root node of the second binary tree.
 * @returns {boolean} True if both trees are identical, false otherwise.
 * 
 * Time Complexity:  O(N) - where N is the minimum number of nodes in tree A or tree B.
 * Space Complexity: O(H) - where H is the height of the tree (call stack depth).
 */

const binaryTreeEqual = (a, b) => {
    // Base Case 1: Both nodes are null — reached the end of both branches simultaneously
    if (a === null && b === null) {
        return true; 
    }
    
    // Base Case 2: One node is null while the other is not — structural mismatch
    if (a === null || b === null) {
        return false;
    }
    
    // Base Case 3: Values differ — value mismatch at current node
    if (a.val !== b.val) {
        return false;
    }
    
    // Recursive Step: Both left subtrees AND right subtrees must be identical
    return binaryTreeEqual(a.left, b.left) && binaryTreeEqual(a.right, b.right);
};


