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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return isMirror(root, root);
};

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isMirror = function(p, q) {
  if(p === null) return q === null;
  if(q === null) return p === null;

  return p.val === q.val && isMirror(p.left, q.right) && isMirror(p.right, q.left);
};
