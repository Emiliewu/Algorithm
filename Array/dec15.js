/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return the index of that value, or -1 if not found.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/


const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = -1;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = 1;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = 0;

const nums4 = [1, 3, 5, 8, 9, 12, 16, 19, 22, 25, 27];
const searchNum4 = 9;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @return {number} The index of the given num in in the given array or -1 if absent.
 */
function binarySearch(sortedNums, searchNum) {
  var left = 0;
  var right = sortedNums.length-1;
  while (left <= right) {
    let mid = Math.floor((left+right)/2);    // possible overflow bug! use: mid = Math.floor(left + (right-left)/2);
    if (searchNum === sortedNums[mid]) {
      return mid;
    }
    if (searchNum < sortedNums[mid]) {
      right = mid - 1;
    }
    if (searchNum > sortedNums[mid]) {
      left = mid + 1;
    }
  }
  return -1;
}
console.log(binarySearch(nums1, searchNum1));
console.log(binarySearch(nums2, searchNum2));
console.log(binarySearch(nums3, searchNum3));
console.log(binarySearch(nums4, searchNum4));



/*****************************************************************************/
// recursive function
function binarySearch2(sortedNums, searchNum) {
  return _binarySearch(sortedNums, 0, sortedNums.length-1, searchNum);
}

function _binarySearch(array, left, right, target) {
  if (left > right) {  // end case goes first!
    return -1;
  }
  let mid = Math.floor(left + (right-left)/2);
  if (target === array[mid]) {
    return mid;
  }
  if (target < array[mid]) {
    return _binarySearch(array, left, mid-1, target);
  } else {
    return _binarySearch(array, mid+1, right, target);
  }
}