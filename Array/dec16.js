/* 
  Array: Remove Duplicates
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/
/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @return {Array<number>} The given array deduped.
 */


const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

// function removeDuplicates(nums) {
//   // obj = Object.assign({}, nums);
//   var idx = 0;
//   var newarr = [];
//   newarr.push(nums[idx]);
//   for(let i = 1; i < nums.length; i++) {
//     if(nums[i] != newarr[idx]) {
//       newarr.push(nums[i]);
//       idx += 1;
//     }
//   }
//   return newarr;
// }

function removeDuplicates(nums) {
  let val = nums[0], idx = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[idx] = nums[i];
      val = nums[i];
      idx += 1;
    }
  }
  nums.length = idx;
  return nums;
}
console.log(removeDuplicates(nums1));
console.log(removeDuplicates(nums2));
console.log(removeDuplicates(nums3));




/*****************************************************************************/