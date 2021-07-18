/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
const expected3 = [1, 2, 3];

const nums4 = [7, 7, 8, 8, 9, 9];
const k4 = 3;
const expected4 = [7, 8, 9];
/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
 function kMostFrequent(nums, k) {
  let result = [];
  let dicobj = {};
  let idx = 0;
  for (let i = 0; i < nums.length; i ++) {
    dicobj[nums[i]] === undefined ? dicobj[nums[i]] = 1 : dicobj[nums[i]] += 1;
    if (dicobj[nums[i]] > idx) idx = dicobj[nums[i]];
  }
  while(k > 0 && idx > 0) {
    for (let key in dicobj) {
      if (dicobj[key] === idx) {
        result.push(+key);
        k--;
      }
    }
    if (k < 0) return [];
    idx--;
  }
  return result;
}

console.log(kMostFrequent(nums1, k1));
console.log(kMostFrequent(nums2, k2));
console.log(kMostFrequent(nums3, k3));
console.log(kMostFrequent(nums4, k4));

function kMostFrequent2(nums, k) {
  let obj = {}, freqObj = {}, result = [];
  for (let n of nums) {
    obj[n] ? obj[n]+=1 : obj[n]=1;
  }
  for (let k of Object.keys(obj)) {
    freqObj[obj[k]] ? freqObj[obj[k]].push(+k) : freqObj[obj[k]]=[+k];
  }
  let freqArr = Object.values(freqObj);
  for (let i = freqArr.length-1; i >= 0; i--) {
    k -= freqArr[i].length;
    if (k < 0) return [];
    result.push(...freqArr[i]);
    if (k === 0) return result;
  }
  return result;
}

console.log(kMostFrequent2(nums1, k1));
console.log(kMostFrequent2(nums2, k2));
console.log(kMostFrequent2(nums3, k3));
console.log(kMostFrequent2(nums4, k4));