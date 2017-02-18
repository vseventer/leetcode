/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // Prepare map to store nums in (value => index).
  const map = { };

  // Loop through nums, checking for its complement as we go.
  const length = nums.length;
  for(let i = 0; i < length; i += 1) {
    const value = nums[i];
    const complement = target - value;

    // If we have the complement in the map, return it. Note that, at this
    // point, the component index is always smaller then i. Therefore, return
    // [ component, i ].
    if(complement in map) return [ map[complement], i ];
    map[value] = i; // Add to map.
  }

  // No solution. We should never get here, given the exercise assumption there
  // will always be one solution.
  return false;
};
