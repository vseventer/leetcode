/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  // Push empty height to ensure stack below will be empty after last iteration.
  heights.push(0);

  // Init.
  let largestRectangle = 0;
  const stack = [ ];

  const length = heights.length;
  for(let i = 0; i < length; i += 1) {
    while(stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const index  = stack.pop(); // Remove last element.
      const offset = stack.length ? stack[stack.length - 1] + 1 : 0; // Left start position.
      largestRectangle = Math.max(largestRectangle, heights[index] * (i - offset));
    }
    stack.push(i);
  }

  // Return largest rectangle.
  return largestRectangle;
};
