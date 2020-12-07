/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/



/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @return {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 * for each word once there is a space, we find a word
 * we concact it to the string
 * from length -1, find the first space and the index, the last word should be the length-i to length-1
 * add one space i + 1
 * next word should start from length-1-i---->take the index here
 * and the second word first letter index should be the length-i
 * add a space i +1
 * and 
 */
const str1 = "This is a test";
const expected1 = "test a is This";
function reverseWordOrder(wordsStr) {
  var temp = wordsStr.split(" ");
  var NewStr = "";
  let i = temp.length - 1;
  while(i>=0){
    NewStr = NewStr + " "+temp[i];
    i -= 1;
  }
  return NewStr;
}
console.log(reverseWordOrder(str1));
module.exports = { reverseWordOrder };