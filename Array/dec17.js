/* 
  Given an int to represent how cents in change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @return {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

function fewestCoinChange(cents) {
  var result = {};
  
    if(cents>=25) {
      result["quarter"] = Math.floor(cents / 25);
      cents = cents % 25;
      // console.log(temp);
      
    }
    if(cents >= 10) {
      result["dime"] = Math.floor(cents / 10);
      cents = cents % 10;
      // console.log(temp);
    }
    if(cents >= 5) {
      result["nickel"] = Math.floor(cents / 5);
      cents = cents % 5;
      // console.log(temp);
    }
    if(cents >= 1) {
      result["penny"] = cents;
    }
  
  return result;
} 
    
console.log(fewestCoinChange(cents1));
console.log(fewestCoinChange(cents2));
console.log(fewestCoinChange(cents3));
console.log(fewestCoinChange(cents4));

function fewestCoinChange1(cents){
  var result={};
  const change = {
  "quarter":25,
  "dime": 10,
  "nickel": 5,
  "penny": 1
  } 

  for(let key in change) {
    if(cents>=change[key]){
      result[key] = Math.floor(cents / change[key]);
      cents = cents % change[key];
    }
  }
  return result;
}

console.log(fewestCoinChange1(cents1));
console.log(fewestCoinChange1(cents2));
console.log(fewestCoinChange1(cents3));
console.log(fewestCoinChange1(cents4));


module.exports = { fewestCoinChange };
Bonus algo (Mathy bonus algo!)
/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

/* 
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

const nums3 = [2, -4, 0, -3, -2, 1];
const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
const expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @return {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */
function missingValue(unorderedNums) {
    
}

module.exports = { missingValue };