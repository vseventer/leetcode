/**
 * Time complexity: O(1)
 * Space complexity: O(1)
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return (n & (n - 1)) === 0 && n > 0;
};
