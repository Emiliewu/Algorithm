/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/


/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @return {string} The given string with any duplicate characters removed.
 * for loop go through the whole array
 * another loop for comparison
 * if duplicate, jump out of the loop and continue
 */
const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
  let newStr = "";
  let temp = {};
  for(let i = str.length-1; i >= 0; i--) {
    for (let c of str) {
        if (!temp[c]) {
            temp[c] = 1;
            newStr += c;
        }
      }
    }
    return newStr;
}
console.log(stringDedupe(str1));
console.log(stringDedupe(str2));

module.exports = { stringDedupe };

/*****************************************************************************/