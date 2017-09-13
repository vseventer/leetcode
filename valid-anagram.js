/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // Anagrams have the same length.
  if(s.length !== t.length) return false;

  // Keep track of used characters.
  const charMap = { };
  for(let i = 0; i < s.length; i += 1) {
    // Track char in s.
    const sChar = s[i];
    if(charMap[sChar] == null) charMap[sChar] = 0; // Init.
    charMap[sChar] += 1;

    // Track char in t.
    const tChar = t[i];
    if(charMap[tChar] == null) charMap[tChar] = 0; // Init.
    charMap[tChar] -= 1;

    // Clean-up maps, so we can easily check the length later.
    if(charMap[sChar] === 0) delete charMap[sChar];
    if(charMap[tChar] === 0) delete charMap[tChar];
  }

  return Object.keys(charMap).length === 0;
};
