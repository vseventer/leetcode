/**
 * Time complexity: O(n), where n is min(p, q)
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // If either of the trees are null, the other one should be too.
  if(p === null) {
    return q === null;
  }
  if(q === null) {
    return p === null;
  }

  // At this point, neither trees are null. Compare value, left, and right.
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
