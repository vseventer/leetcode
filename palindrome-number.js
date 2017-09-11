/**
 * Time complexity: O(log n)
 * Space complexity: O(1)
 */

// Returns whether the provided number overflows.
// This is not an issue in JavaScript, but we need it for this exercise.
const MIN_INTEGER = 1 << 31; // Negative number (first bit is a 1).
const MAX_INTEGER = ~(1 << 31);
var overflows = function(num) {
  return num > MAX_INTEGER || num < MIN_INTEGER;
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // Reduce x until it is 0. Note, since we support negative numbers, we cannot
  // use x > 0.
  let result = 0;
  while(x !== 0) {
    const digit = x % 10;

    // Reduce x by digit, and then by factor 10.
    x -= digit;
    x /= 10;

    // Increment result by factor 10 and add digit.
    result *= 10;
    result += digit;
  }

  // Boundary check of the result.
  return overflows(result) ? 0 : result;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return x >= 0 && x === reverse(x);
};
