/**
 * Time complexity: O(n)
 * Space complexity: O(n), where n is the number of unique characters in s
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // Prepare map to store chars in (char => index in string).
  const map = { };

  // Initialize variables.
  let max = 0;
  let startOfCurrentSubstring = 0;

  // Loop through the string, tracking the current longest substring as we go.
  const length = s.length;
  for(let i = 0; i < length; i += 1) {
    const char = s[i];

    // If the map holds the character, and it was added as part of our current
    // substring, we reached a duplicate character.
    if(map[char] >= startOfCurrentSubstring) {
      // Calculate final length of current substring, update max appropriately.
      const finalSubstringLength = i - startOfCurrentSubstring;
      max = Math.max(max, finalSubstringLength);

      // Start a new substring, starting at the character after the duplicate.
      startOfCurrentSubstring = map[char] + 1;
    }

    // Add character to the map.
    map[char] = i;
  }

  // The loop above did not check the final substring if the last character was
  // not a duplicate. Check here and return.
  const finalSubstringLength = length - startOfCurrentSubstring;
  return Math.max(max, finalSubstringLength);
};
