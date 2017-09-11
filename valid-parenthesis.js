/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

// Map of opening and closing parenthesis.
const charMap = {
  '(': ')',
  '{': '}',
  '[': ']'
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack  = [ ];
  const length = s.length;
  for(let i = 0; i < length; i += 1) {
    const char = s[i];

    // If this is an opening character, append closing character to stack.
    if(char in charMap) {
      stack.push(charMap[char]);
    }
    else { // Verify the character is indeed the expected closing character.
      const el = stack.pop();
      if(el !== char) { // Incorrect character.
        return false;
      }
    }
  }

  // At this point, the stack should be empty (i.e. no opening characters left
  // unclosed).
  return 0 === stack.length;
};
