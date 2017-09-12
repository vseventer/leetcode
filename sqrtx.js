/**
 * Time complexity: O(log n)
 * Space complexity: O(1)
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let result = x;
  while(result * result > x) {
    result = Math.floor((result + x / result) / 2);
  }
  return result;
};
