/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  // If the node is empty, or has no next, we are done.
  if(null === head || null === head.next) {
    return head;
  }

  // If the current value matches the next value, remove the current node and
  // recurse.
  if(head.val === head.next.val) {
    return deleteDuplicates(head.next);
  }

  // If the current value does not match the next, recurse with the next node.
  head.next = deleteDuplicates(head.next);
  return head;
};
