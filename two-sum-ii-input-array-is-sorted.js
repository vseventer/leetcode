/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let minPointer = 0;
  let maxPointer = numbers.length - 1;

  while(minPointer !== maxPointer) {
    const sum = numbers[minPointer] + numbers[maxPointer];
    if(sum === target) {
      return [ minPointer + 1, maxPointer + 1 ]; // indices are not zero-based.
    }
    else if(sum > target) maxPointer -= 1;
    else minPointer += 1;
  }

  return false;
};
