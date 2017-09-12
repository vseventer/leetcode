/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let counter = 0;

  const length = s.length;
  for(let i = 0; i < length; i += 1) {
    // If the current character is a space, and the next character starts a new
    // word, reset the counter.
    if(s[i] === ' ') {
      const next = i + 1;

      // Only if the next character is not a space also, reset the counter.
      if(next !== length && s[next] !== ' ') {
        counter = 0;
      }
    }
    else { // Non-space, increase length.
      counter += 1;
    }
  }
  return counter;
};
