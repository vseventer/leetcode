/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result = 0;

  // XOR each number, as the double numbers will cancel each other out.
  // Remainder will yield the unique number.
  const length = nums.length;
  for(let i = 0; i < length; i += 1) {
    result ^= nums[i];
  }
  return result;
};
