/**
 * Time complexity: O(n), where n is max(l1, l2)
 * Space complexity: O(n), where n is max(l1, l2)
 */

/**
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // Initialize a new singly-linked list, and keep a pointer to the head.
  // Note the algorithm below does not modify the original lists l1 and l2.
  let node = new ListNode();
  const head = node;

  // Iterate through l1 and l2 (both are non-empty at start).
  // Continue until all lists are empty, and there is no carry.
  let carry = 0;
  do {
    const l1Value = null !== l1 ? l1.val : 0;
    const l2Value = null !== l2 ? l2.val : 0;
    const sum = l1Value + l2Value + carry;
    node.next = new ListNode(sum % 10);
    carry = parseInt(sum / 10, 10);

    // Advance lists.
    if(null !== l1) l1 = l1.next;
    if(null !== l2) l2 = l2.next;
    node = node.next;
  }
  while(null !== l1 || null !== l2 || 0 !== carry);

  // Note in the do-while loop, the initial node with a value is actually
  // head.next.
  return head.next;
};
