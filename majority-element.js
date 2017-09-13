/**
 * Time complexity: O(n log n)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // Sort and pick the middle number
  // (since the majority element is present more than n/2 times).
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
};
