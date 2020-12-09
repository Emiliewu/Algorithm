/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @return {boolean} Whether the parenthesis are valid.
 */


// Test Cases
//112122
const str1 = "(()())";
const expected1 = true;
              
const str2 = "(()";
const expected2 = false;
// Explanation: not every parenthesis is closed.
              
const str3 = "())(";
const expected3 = false;
// Explanation: because the underlined ")" is premature: there is nothing open for it to close.
              
const str4 = "())(()"
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing

module.exports = { parensValid };

/*****************************************************************************/

//Input: str
//Output: boolean
//Create function with a string as a parameter
//Create output variable that will store boolean
//counter var for (
//counter var for )
//for loop through string
  //conditional testing first element and last element (looking for open and close)
  //conditional for the center -- if it is this )(
//return output

// function parensValid(str) {
//   console.log('original str ->', str)
//   var isValid = false;
//   var paren_left = "(";
//   var paren_right = ")";
//   for (var i =0; i<str.length; i++) {
//     console.log(str[i])
//   }
  
// }
function parensValid(str) {
  console.log('\noriginal str->', str)
  var valid = 0;
  if(str.length % 2 != 0 ) {
    return false;
  }
  for(let char of str) {
    console.log('char ->', char)
    if(char === "(" ) {
      valid += 1;
    }
    else if (char === ")") {
      valid -= 1;
    }
    if (valid < 0 ) {
      console.log('--CHECK VALID < 0 == false')
      return false;
    }
  }
  return valid == 0;
  
}

console.log(parensValid(str1))
console.log(parensValid(str2))
console.log(parensValid(str3))
console.log(parensValid(str4))