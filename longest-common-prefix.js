/**
 * Time complexity: O(m*n)
 * Space complexity: O(1)
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = '';

  // Sanity check.
  const length = strs.length;
  if(0 === length) {
    return result;
  }

  // Walk through all words, until character mismatch.
  const wordLength = strs[0].length;
  for(let i = 0; i < wordLength; i += 1) {
    const char = strs[0][i];
    for(let j = 1; j < length; j += 1) {
      // Mismatch, longest common prefix broken.
      if(strs[j][i] !== char) {
        return result;
      }
    }

    // Append to longest common prefix.
    result += char;
  }
  return result;
};
