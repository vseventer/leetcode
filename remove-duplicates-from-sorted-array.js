/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let index = 1;

  // Loop through every element.
  const length = nums.length;
  for(let i = index; i < length; i += 1) {
    // If number is not a duplicate, re-insert it at the current position.
    if(nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index += 1;
    }
  }

  // The last position to be inserted is our new length.
  return index;
};
