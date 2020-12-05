// Algo 1:
/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @return {boolean} Whether the given str is a palindrome or not.
 */

// function isPalindrome(str) {
//   for(i = 0; i < length/2; i++) {
//     if(arr[i] != arr[arr.length-1-i]){
//       return false;
//     }
//   return true;
// }
function isPalindrome(str) {
  let leftIdx = 0, rightIdx = str.length - 1;
  while (str[leftIdx] === str[rightIdx]) {
      leftIdx += 1;
      rightIdx -= 1;
      if (leftIdx >= rightIdx) {
          return true;
      }
  }
  return false;
}
module.exports = { isPalindrome };

/*****************************************************************************/
// Ninja Bonus Algo:
/* 
  Longest Palindrome
  For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
  Strings longer or shorter than complete words are OK.
  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

const { isPalindrome } = require("./isPalindrome");

const str1 = "what up, daddy-o?";
const expected1 = "dad";

const str2 = "uh, not much";
const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @return {string} The longest palindromic substring from the given string.
 */

// function longestPalindromicSubstring(str) {
//   for (var i = 0; i < str.length; i++) {
//     if(str[i] == str[str.length -1-i]) {
//       var idx = i;
//       var j = str.length - i;
//       while(j>0 && str[i+j] == str[j]){
//         var count +=1;
//         temp = j;
//         j -= 1;
//       }
//       i += temp;
//     }
//   }     
//   var newStr = substring(idx, count);
//   return newStr;
// }

// module.exports = { longestPalindromicSubstring };

function longestPalindrome(str) {
  let palStr = "", palArr = [], maxLen = 0, valid = false;
  let tempL, tempR, rightIdx;
  if (str.length === 1) {
      return str;
  }
  for (let i = 0; i < str.length-1; i++) {
    let j = str.length - 1;
    if (j-i+1 < maxLen) {
      break;
    } 
    while (i < j) {
      console.log(`str[${i}]=${str[i]} str[${j}]=${str[j]}`);
      if (j-i+1 < maxLen) {
        break;
      }
      if (str[i] === str[j]) {
        tempL = i;
        tempR = rightIdx = j;
        while (str[tempL] == str[tempR]) {
          console.log(`tempL=${tempL} tempR=${tempR}`);
          tempL += 1;
          tempR -= 1;
          if (tempL >= tempR) {
              valid = true;
              break;
          }
        }
        if (valid) {
          palStr = str.substring(i, rightIdx+1);
          if (palStr.length > maxLen) {
            maxLen = palStr.length;
            palArr.length = 0;
          }
          palArr.push(palStr);
          console.log('Arr=', palArr);
          valid = false;
          break;
        }
      }
      j -= 1;
    }
  }
  return palArr.join(', ');
}
