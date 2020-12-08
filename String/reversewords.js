/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/


/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @return {string} The given string with each word's letters reversed.
 */
const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";
function reverseWords(str) {
  var newStr = "";
  var idx = 0;
  var place = 1;
  var space = " ";
  for(let i = 0; i < str.length; i++) {
    if(i === str.length -1) {
      place = 0;
      space = "";
    }
    if(str[i] == " "|| i === str.length-1) {
      for(let j = i-place; j >= idx; j--) {
        newStr += str[j];
      }
      newStr += space;
      idx = i+1;
    }
  }
  return newStr;
}
console.log(reverseWords(str1));
console.log(reverseWords(str2));
console.log(reverseWords(str3));
// module.exports = { reverseWords };

/*****************************************************************************/