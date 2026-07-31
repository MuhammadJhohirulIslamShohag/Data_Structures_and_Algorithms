/*
    Binary Tree Maximum Depth

Given the root of a binary tree, determine the depth of the tree, which is defined as the number of nodes along the longest path from the root to the most distant leaf node.

*/

/**
 * RECURSIVE DFS APPROACH (Post-Order Traversal)
 * ---------------------------------------------
 * Time Complexity:  O(N) - visits every node in the tree exactly once
 * Space Complexity: O(H) - call stack memory proportional to tree height H 
 *                          (O(N) for a skewed tree, O(log N) for a balanced tree)
 * 
 * @param {TreeNode|null} root - The root node of the binary tree
 * @returns {number}           - The maximum depth (height) of the binary tree
 */
const binaryTreeMaximumDepth = (root) => {
    // Step 1: Base Case — An empty node contributes 0 to the tree's depth
    if (root === null) {
        return 0;
    }
    
    // Step 2: Recursively compute the maximum depth of the left subtree
    const leftDepth = binaryTreeMaximumDepth(root.left);
    
    // Step 3: Recursively compute the maximum depth of the right subtree
    const rightDepth = binaryTreeMaximumDepth(root.right);
    
    // Step 4: Add 1 (for current node) to the maximum depth between left & right subtrees
    return 1 + Math.max(leftDepth, rightDepth);
};
