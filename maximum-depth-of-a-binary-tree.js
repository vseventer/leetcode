/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  // Stop condition: empty node means we reached the maximum depth for this branch.
  if(root === null) return 0;

  // Return with maximum depth for left and right branches.
  return 1 + Math.max(
    maxDepth(root.left),
    maxDepth(root.right)
  );
};
