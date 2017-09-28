/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // Init.
  let minPrice  = Infinity;
  let maxProfit = 0;

  // Walk through every day, adjusting minPrice and maxProfit.
  const days = prices.length;
  for(let i = 0; i < days; i += 1) {
    const price = prices[i];
    if(price < minPrice) {
      minPrice = price;
    }
    else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  }

  // Return the maximum profit.
  return maxProfit;
};
