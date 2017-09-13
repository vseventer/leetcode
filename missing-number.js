/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let result = 0;
  const length = nums.length;
  for(let i = 0; i < length; i += 1) {
    result = result ^ i ^ nums[i]; // i ^ nums[i] should cancel out.
  }
  return result ^ length;
};
