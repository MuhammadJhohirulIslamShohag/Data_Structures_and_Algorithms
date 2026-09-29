/**
 * Binary Search Tree Lowest Common Ancestor
 *
 * Given the root of a Binary Search Tree (BST), find the lowest common
 * ancestor (LCA) of two given nodes a and b.
 *
 * The LCA is the lowest node in the tree that has both a and b as
 * descendants. A node can be a descendant of itself.
 *
 * TreeNode interface:
 *   interface TreeNode {
 *     val: number;
 *     left: TreeNode | null;
 *     right: TreeNode | null;
 *   }
 *
 * Examples:
 *   Input:  root = [3,1,7,null,2,6,10], a = 7, b = 6
 *   Output: 7
 *   Why: 7 is the ancestor of 6.
 *
 *   Input:  root = [5,3,8,2,4,7,9], a = 3, b = 9
 *   Output: 5
 *   Why: 5 is the root, and 3 and 9 are on opposite sides.
 *
 *   Input:  root = [7,3,10,2,5,8,12], a = 8, b = 12
 *   Output: 10
 *   Why: 10 is the parent of both nodes.
 *
 * Constraints:
 *   - 1 <= number of nodes <= 1,024
 *   - 1 <= TreeNode.val <= 1,000,000
 *   - a and b are guaranteed to exist in the BST
 *   - All TreeNode.val are unique
 *
 * Approach:
 *   Use the BST property (left < node < right).
 *   - If both a and b are smaller than the current node, go left.
 *   - If both a and b are bigger than the current node, go right.
 *   - Otherwise, the paths split here, so this node is the LCA.
 *
 * Complexity:
 *   Time:  O(h), where h is the height of the tree
 *   Space: O(1), iterative solution
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} a
 * @param {TreeNode} b
 * @return {TreeNode | null}
 */
export default function BSTLowestCommonAncestor(root, a, b) {
  // Step 1: Start from the root
  let node = root;

  // Step 2: Keep searching while we have a node
  while (node) {
    // Case 1: Both are smaller, so both are in the left subtree
    if (a.val < node.val && b.val < node.val) {
      node = node.left;
    }
    // Case 2: Both are bigger, so both are in the right subtree
    else if (a.val > node.val && b.val > node.val) {
      node = node.right;
    }
    // Case 3: Paths split here (or one of them is this node)
    // So this node is the LCA
    else {
      return node;
    }
  }

  // Step 3: Unreachable, since a and b are guaranteed to exist
  return null;
}

/**
 * Recursive alternative (O(h) space because of the call stack):
 *
 * export default function BSTLowestCommonAncestor(root, a, b) {
 *   if (!root) return null;
 *   if (a.val < root.val && b.val < root.val)
 *     return BSTLowestCommonAncestor(root.left, a, b);
 *   if (a.val > root.val && b.val > root.val)
 *     return BSTLowestCommonAncestor(root.right, a, b);
 *   return root;
 * }
 */