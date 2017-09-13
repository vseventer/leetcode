/**
 * Time complexity: O(1)
 * Space complexity: O(1)
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let result = 0;
  for(i = 0; i < 32; i += 1) {
    if(n >> i & 1 === 1) result += 1;
  }
  return result;
};
