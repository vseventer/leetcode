/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0; // Init.

  // Walk through every day, updating maxProfit if price has risen.
  const days = prices.length;
  for(let i = 1; i < days; i += 1) {
    const price = prices[i];
    const yesterday = prices[i - 1];

    if(price > yesterday) {
      maxProfit += price - yesterday;
    }
  }

  // Return the maximum profit.
  return maxProfit;
};
