/**
 * Time complexity: O(m*n)
 * Space complexity: O(1)
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // Initialize length and return if the needle is empty.
  const lastIndexOfNeedle = needle.length - 1;
  if(-1 === lastIndexOfNeedle) return 0;

  // Initialize needle pointer.
  let pointer = 0;

  // Walk through haystack, checking for needle.
  const length = haystack.length;
  for(let i = 0; i < length; i += 1) {
    const char = haystack[i];

    // If the current character is the one we are looking for, continue.
    if(char === needle[pointer]) {
      // If we reached the end of the needle, return the start position.
      if(pointer === lastIndexOfNeedle) {
        return i - lastIndexOfNeedle;
      }

      // In the middle of the needle, keep checking.
      pointer += 1;
    }

    // Current character is not the one we are looking for, but one of the
    // previous characters was. We need to reset the pointer and starting
    // position.
    else if(pointer !== 0) {
      i -= pointer; // Rewind i to where we started (wrongfully) matching.
      pointer = 0; // Reset pointer, as we need to check from the start.
    }
  }

  // No result found.
  return -1;
};
