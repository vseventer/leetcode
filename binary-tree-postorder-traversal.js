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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  // Post order: left, right, root.

  // Edge case.
  if(root === null) return [ ];

  // Init.
  let result = [ ];
  const stack = [ ];

  // Maintain stack with nodes to be processed.
  stack.push(root);
  while(stack.length) {
    const el = stack[stack.length - 1]; // Peek.

    // If the element has no children, add value to result.
    if(el.left === null && el.right === null) {
      result.push(el.val);
      stack.pop(); // Remove element from stack.
    }

    // Add children (push right first, so left is on top of stack).
    if(el.right !== null) {
      stack.push(el.right);
      el.right = null; // Unset.
    }
    if(el.left !== null) {
      stack.push(el.left);
      el.left = null; // Unset.
    }
  }

  // Return the result.
  return result;
};
