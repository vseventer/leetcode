/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let max = 0; // Init.

  const stack = [ -1 ];
  for(let i = 0; i < s.length; i += 1) {
    if(s.charAt(i) === '(') {
      stack.push(i); // Insert start position.
    }
    else {
      stack.pop(); // Close set.
      if(0 === stack.length) stack.push(i); // New starting position.
      else max = Math.max(max, i - stack[stack.length - 1]); // Update max.
    }
  }
  return max;
};
