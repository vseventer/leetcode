/**
 * Time complexity: O(n^2)
 * Space complexity: O()
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // Prepare result.
  const result = [ ];

  // Sort numbers first.
  nums.sort((x, y) => x - y);

  // Find pairs.
  const length = nums.length;
  for(let i = 0; i < length; i += 1) {
    // Avoid duplicate solutions.
    if(nums[i] === nums[i - 1]) continue;

    // Use two pointers to perform 2-sum.
    let minPointer = i + 1;
    let maxPointer = length - 1;

    // Keep sliding pointers until they meet or exceed.
    while(minPointer < maxPointer) {
      const min = nums[minPointer];
      const max = nums[maxPointer];
      const sum = nums[i] + min + max;

      if(sum === 0) { // Three-sum!
        result.push([ nums[i], min, max ]);
        minPointer += 1;
        maxPointer -= 1;

        // Avoid duplicate solutions.
        while(nums[minPointer] === nums[minPointer - 1]) {
          minPointer += 1;
        }
        while(nums[maxPointer] === nums[maxPointer + 1]) {
          maxPointer -= 1;
        }
      }
      else if(sum > 0) { // Too high, reduce max pointer.
        maxPointer -= 1;
      }
      else { // Too low, increase min pointer.
        minPointer += 1;
      }
    }
  }

  // Return the pairs.
  return result;
};