/**
 * Time complexity: O(n log n)
 * Space complexity: O(n)
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  // @see https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

  let count = 0; // Init.

  // Mark all numbers as prime.
  const isPrime = new Array(n).fill(true);

  // Walk through numbers, counting primes.
  const max = Math.sqrt(n);
  for(let i = 2; i < n; i += 1) {
    if(isPrime[i] === true) {
      count += 1;

      // Mark all factors of i as non-prime.
      for(let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Return the number of primes.
  return count;
};
