/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/

const nums1 = [1, 2, 3, 4, 10];
const expected1 = true;
// Explanation: between indices 3 & 4

const nums2 = [1, 2, 4, 2, 1];
const expected2 = false;

/**
 * Determines if there is a balance point BETWEEN indexes where the sum of the
 *    left side is equal to the sum of the right side of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @return {boolean} Indicates if a balance point exists.
 */

function balancePoint(nums) {
  let sum = currSum = idx = 0;
  if (!nums.length) {
    return false;
  }
  for (let num of nums) {
      sum += num;
  }
  // if (sum % 2) {
  //   return false;
  // }
  while (currSum <= sum/2) {
    currSum += nums[idx];
    if (currSum === sum/2) {
      return `between indices ${idx} & ${idx+1}`;
    }
    idx += 1;
  }
  return false;
}

/*****************************************************************************/
/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @return {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
  let sum = currSum = idx = 0;
  if (nums.length < 3) {
    return -1;
  }
  for (let num of nums) {
      sum += num;
  }
  while (currSum <= sum-currSum-nums[idx]) {
    if (currSum == sum-currSum-nums[idx]) {
      return idx;
    }
    currSum += nums[idx];
    idx += 1;
  }
  return -1;
}

/*****************************************************************************/
// // Alt way, with CJ, Nicky, Andrew
// const nums1 = [-2, 5, 7, 0, 3];
// const expected1 = 2;

// function balanceIndex(nums) {
//   console.log("\n-------------\n", nums);
//   arr1sum = nums[0];
//   arr2sum = nums[nums.length - 1];
//   // add the sums of arr1 and compare to sums of arr2?
//   for (var i = 1; i < nums.length; i++) {
//     arr1sum += nums[i];
//     // second for loop going backwards
//     for (var j = nums.length - 2; j > i; j--) {
//       if (arr1sum == arr2sum) {
//         console.log("we found it at idx=", i + j - (j - 1));
//         return j - 1;
//       }
//       // if we haven't found a macth RE-assign arr2sum == last again
//       arr2sum = nums[nums.length - 1];
//     }
//   }
//   return -1;
// }
