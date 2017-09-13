/**
 * Time complexity: O(T*C)
 * Space complexity: O(T*C)
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [ ];
  combinationPartialSum(candidates, target, 0, [ ], result);
  return result;
};

var combinationPartialSum = function(candidates, target, index, trail, result) {
  // If target is 0, a result was found. Append it to the result list.
  if(target == 0) return result.push(trail);
  if(index >= candidates.length) return false; // No result.

  let amountWithCandidate = 0;
  while(amountWithCandidate <= target) {
    const remaining = target - amountWithCandidate; // Update.

    // Recurse with a copy of trail to avoid interfering with other recursions.
    combinationPartialSum(candidates, remaining, index + 1, trail.concat([ ]), result);

    // Use candidate one more time.
    amountWithCandidate += candidates[index];
    trail.push(candidates[index]); // Append candidate to trail.
  }
};
