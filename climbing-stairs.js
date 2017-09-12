/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

// Memoization.
const memo = { };

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n === 0 || n === 1) return 1;

  // Lookup in memoization map, or calculate if not done yet.
  if(null == memo[n]) {
    memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }
  return memo[n];
};
