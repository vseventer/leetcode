/**
 * Time complexity: O(n), where n is min(p, q)
 * Space complexity: O(1)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // Check whether p and q are empty.
  if(p === null) {
    return q === null;
  }

  // At this point, if q is empty, p is not. Return false.
  if(q === null) {
    return false;
  }

  // Compare value and left and right trees.
  return p.val === q.val
   && isSameTree(p.left, q.left)
   && isSameTree(p.right, q.right);
};
