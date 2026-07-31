/*
   Flip Binary Tree

Given the root node of a binary tree, flip the tree by swapping each node's left and right children, then return the root of the flipped tree.

*/
/**
 * RECURSIVE APPROACH (Depth-First Search - DFS)
 * ---------------------------------------------
 * Time Complexity:  O(N) - visits every node exactly once
 * Space Complexity: O(H) - implicit call stack space, where H is tree height 
 *                          (O(N) in worst-case skewed tree, O(log N) in balanced tree)
 * 
 * @param {TreeNode|null} root - The root node of the binary tree
 * @returns {TreeNode|null}    - The root node of the inverted binary tree
 */
const flipTreeBruteForce = (root) => {
    // Step 1: Base Case — If the current node is null, we reached the end of a branch
    if (root === null) {
        return null;
    }
    
    // Step 2: Swap the left and right child pointers of the current node
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    // Step 3: Recursively invert the new left subtree
    flipTreeBruteForce(root.left);
    
    // Step 4: Recursively invert the new right subtree
    flipTreeBruteForce(root.right);

    // Step 5: Return the modified root node
    return root;
};

/**
 * ITERATIVE APPROACH (Breadth-First Search - BFS / Level-Order)
 * -------------------------------------------------------------
 * Time Complexity:  O(N) - visits every node exactly once
 * Space Complexity: O(W) - queue holds up to the max width W of the tree 
 *                          (up to N/2 nodes on the bottom level of a balanced tree)
 * 
 * @param {TreeNode|null} root - The root node of the binary tree
 * @returns {TreeNode|null}    - The root node of the inverted binary tree
 */
const binaryTreeFlipOptimal = (root) => {
    // Step 1: Base Case / Guard clause — check for an empty tree
    if (root === null) {
        return null;
    }
    
    // Step 2: Initialize a FIFO queue with the root node
    const queue = [root];
    
    // Step 3: Process nodes level-by-level until the queue is empty
    while (queue.length > 0) {
        // Step 3a: Remove the first node from the queue
        const node = queue.shift();
        
        // Step 3b: Swap the current node's left and right children
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        // Step 3c: If a left child exists, push it to the queue for processing
        if (node.left !== null) {
            queue.push(node.left);
        }
        
        // Step 3d: If a right child exists, push it to the queue for processing
        if (node.right !== null) {
            queue.push(node.right);
        }
    }
    
    // Step 4: Return the root node of the inverted tree
    return root;
};

/**
 * ITERATIVE DFS APPROACH (Depth-First Search using Stack)
 * --------------------------------------------------------
 * Time Complexity:  O(N) - visits every node exactly once
 * Space Complexity: O(H) - stack holds at most H nodes (height of tree), 
 *                          making it more memory-efficient than BFS for wide trees
 * 
 * @param {TreeNode|null} root - The root node of the binary tree
 * @returns {TreeNode|null}    - The root node of the inverted binary tree
 */
const flipTreeStack = (root) => {
    // Step 1: Base Case / Guard clause — check for an empty tree
    if (!root) {
        return null;
    }
    
    // Step 2: Initialize a LIFO stack with the root node
    const stack = [root];
    
    // Step 3: Process nodes branch-by-branch until the stack is empty
    while (stack.length > 0) {
        // Step 3a: Pop the top node off the stack — O(1) operation
        const node = stack.pop();
        
        // Step 3b: Swap the current node's left and right children
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        // Step 3c: If a left child exists, push it onto the stack
        if (node.left) {
            stack.push(node.left);
        }
        
        // Step 3d: If a right child exists, push it onto the stack
        if (node.right) {
            stack.push(node.right);
        }
    }
    
    // Step 4: Return the root node of the inverted tree
    return root;
};
