/**
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let currentMax = 0; // Overall maximum.
  const max = [ ]; // Maximum per element.

  // Compute maximum per element.
  const length = nums.length;
  for(let i = 0; i < length; i += 1) {
    max[i] = 1; // Init with current element only.

    // Update current maximum with maximum of smaller elements prior to i.
    for(let j = 0; j < i; j += 1) {
      if(nums[j] < nums[i]) {
        max[i] = Math.max(max[i], max[j] + 1);
      }
    }

    // Update overall maximum.
    currentMax = Math.max(max[i], currentMax);
  }

  // Return overall maximum.
  return currentMax;
};