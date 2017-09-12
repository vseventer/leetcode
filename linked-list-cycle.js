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
 * @return {boolean}
 */
var hasCycle = function(head) {
  // Stop condition.
  if(head === null) return false;

  // If node is already visited, there is a cycle.
  if(head.visited) return true;

  // Keep traversing.
  head.visited = true; // Update flag.
  return hasCycle(head.next);
};
