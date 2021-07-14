/**
 * Picks a random pivot index and partitions the array's values around it.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @param {number} startIdx the starting index
 * @param {number} endIdx the end index
 * @returns {number} the final pivot index
 * 
 * Note: The array should be mutated (this is in place)
 */
function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
  // your code here
  let pivotIndex = Math.ceil(Math.random() * (endIdx - startIdx) + startIdx);
  //Math.floor(Math.random() * (1 + High - Low)) + Low
  let pivot = arr[pivotIndex];
  //[1, 5, 8, 4, 2, 6]
  //[]
  while(startIdx < endIdx){
      while(arr[startIdx] < pivot){
          startIdx++;
      }
      while(arr[endIdx] > pivot){
          endIdx--;
      }
      if (startIdx < endIdx){
          let temp = arr[startIdx];
          arr[startIdx] = arr[endIdx];
          arr[endIdx] = temp;
      }
  }
  console.log("final Pivot Index: " + startIdx);
  console.log("Array: " + arr);
  console.log("-----------------------------------")
  return startIdx;

}

const arr = [1, 5, 8, 4, 2, 6]
console.log("Pivot Value: " + arrayPartition(arr));
console.log(arr);


// // Math.random() returns a number from 0 up to but excluding 1
// // Math.floor(5.614) returns 5

// const arr = [1, 5, 8, 4, 2, 6]
// console.log(arrayPartition(arr)); // should log an index between 0 and 5
// console.log(arr); // should be mutated and partitioned around the returned index

// all values should be partitioned around the returned pivot index
// for example, if your function chooses a pivot index of 3,
// the returned pivot should be 2 (the updated pivot index)
// the array might now be [1, 2, 4, 8, 5, 6]
// 4 has all smaller values to its left and all greater values to its right