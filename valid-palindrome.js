/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const length = s.length;

  let minPointer = 0;
  let maxPointer = length - 1;

  while(minPointer < maxPointer) {
    if(!isAlphanumeric(s[minPointer])) {
      minPointer += 1;
    }
    else if(!isAlphanumeric(s[maxPointer])) {
      maxPointer -= 1;
    }
    else {
      if(s[minPointer].toLowerCase() !== s[maxPointer].toLowerCase()) return false;
      minPointer += 1;
      maxPointer -= 1;
    }
  }

  return true;
};

var isAlphanumeric = function(c) {
  const charCode = c.charCodeAt(0);
  const number = charCode - '0'.charCodeAt(0);
  const lower = charCode - 'a'.charCodeAt(0);
  const upper = charCode - 'A'.charCodeAt(0);

  return number >= 0 && number <= 9
   || lower >= 0 && lower <= 25
   || upper >= 0 && upper <= 25;
};
