/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  // Keep translation tables.
  const sTranslationTable = { };
  const tTranslationTable = { };

  // Walk through strings.
  const length = s.length;
  for(let i = 0; i < length; i += 1) {
    const sChar = s[i];
    const tChar = t[i];

    // If the character has already been translated, and it now maps to a
    // different character, return false.
    if(sTranslationTable[sChar] && sTranslationTable[sChar] !== tChar) return false;
    if(tTranslationTable[tChar] && tTranslationTable[tChar] !== sChar) return false;

    // Update transation tables.
    sTranslationTable[sChar] = tChar;
    tTranslationTable[tChar] = sChar;
  }

  // Translations are OK, return true.
  return true;
};
