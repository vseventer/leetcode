/**
 * Time complexity: O(n).
 * Space complexity: O(1).
 */

// Map mapping roman numbers to integers.
const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let result = 0;

  const length = s.length;
  for(let i = 0; i < length; i += 1) {
    const int = romanNumerals[s[i]];

    // If the following character represents a higher number, the current number
    // should be subtracted instead.
    const next = romanNumerals[s[i + 1]];
    if(next > int) {
      result -= int;
    }
    else {
      result += int;
    }
  }

  return result;
};
