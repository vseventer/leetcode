/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // Walk through nums until we find a number greater or equal to target.
  const length = nums.length;
  for(let i = 0; i < length; i += 1) {
    if(nums[i] >= target) return i;
  }

  // Item is larger than all other items, insert at last position.
  return length;
};
