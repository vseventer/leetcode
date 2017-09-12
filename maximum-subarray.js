/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const length = nums.length;
  if(0 === length) return false;

  let maxEndingHere, maxSoFar;
  maxEndingHere = maxSoFar = nums[0];

  for(let i = 1; i < length; i += 1) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
};
