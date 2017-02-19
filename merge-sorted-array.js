/**
 * Time complexity: O(m+n)
 * Space complexity: O(m)
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // Reorganize the array from the end. Initialize pointers pointing to the end
  // of (original) nums1 and nums2, plus one that points to the end of the
  // nums1.
  let pointer1 = m - 1;
  let pointer2 = n - 1;
  let currentIndex = m + n - 1;

  // Continue until we processed all items in (original) nums1 and nums2.
  while(pointer1 >= 0 || pointer2 >= 0) {
    // If item from nums1 is bigger, or nums2 is empty, this item is the biggest
    // in the new list.
    if(-1 === pointer2 || nums1[pointer1] > nums2[pointer2]) {
      nums1[currentIndex] = nums1[pointer1];
      pointer1 -= 1; // We processed this item, move backwards.
    }
    else { // The other way around.
      nums1[currentIndex] = nums2[pointer2];
      pointer2 -= 1;
    }

    // Final element is now filled, move backwards.
    currentIndex -= 1;
  }
};
