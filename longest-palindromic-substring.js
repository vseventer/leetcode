/**
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // Init.
  let start = 0;
  let end = 0;

  for(let i = 0; i < s.length; i += 1) {
    // Calculate palindrome length around center (single char & two chars).
    const len1 = getPalindromeLength(s, i, i);
    const len2 = getPalindromeLength(s, i, i + 1);
    const len  = Math.max(len1, len2);

    // Update start if it is the biggest palindrome substring so far.
    if(len > end - start) {
      start = Math.ceil(i - (len - 1) / 2); // Current index, minus half length.
      end   = Math.floor(i + len / 2); // Current index, plus half length.
    }
  }

  // Return the substring (NOTE: end is up until but not including, so add 1).
  return s.substring(start, end + 1);
};

/**
 * Returns palindrome length starting at <start, end>.
 */
const getPalindromeLength = (s, start, end) => {
  while(start >= 0 && end < s.length && s[start] === s[end]) {
    start -= 1;
    end += 1;
  }
  return end - start - 1;
};
