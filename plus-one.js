/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const lastDigit = digits.length - 1;

  // Plus one.
  digits[lastDigit] += 1;

  // Ensure storage.
  let carry = 0;
  for(let i = lastDigit; i >= 0; i -= 1) {
    // Update digit.
    digits[i] = digits[i] + carry;

    // If the new digit is 10, carry over.
    if(digits[i] === 10) {
      digits[i] = 0;
      carry = 1;
    }
    else { // Reset carry.
      carry = 0;
    }
  }

  // If we have a leftover carry, prepend it to the digits.
  if(carry === 1) {
    digits.unshift(1);
  }

  // Return the digits.
  return digits;
};
