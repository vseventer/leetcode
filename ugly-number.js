/**
 * Time complexity: O(log n)
 * Space complexity: O(1)
 */

const UGLY_FACTOR = [ 2, 3, 5 ];

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  // The remainder of the ugly number divided by the ugly factors should be 1.
  const length = UGLY_FACTOR.length;
  for(let i = 0; i < length; i += 1) {
    const factor = UGLY_FACTOR[i];
    while(num && num % factor === 0) num /= factor;
  }
  return num === 1;
};
