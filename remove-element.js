/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // Avoid array.splice, as this is a JavaScript-specific function, and not the
  // point of this exercise.

  // Also, in case the problem is unclear, it is OK to leave the removed values
  // in the array, as long as their indixes > new length.

  // Keep two pointers.
  let start = 0;
  let end = nums.length - 1;

  // Walk through nums.
  while(start < end) {
    // If the number is to be removed, overwrite it with the last (non-removed)
    // num.
    if(nums[start] === val) {
      nums[start] = nums[end];
      end -= 1; // end is now removed, decrease.
    }
    else {
      // Only increment start if we did not overwrite. If we did, the new value
      // has to be checked as well.
      start += 1;
    }
  }

  // Start now points to the last non-removed element + 1, which equals the new
  // length.
  return start;
};
