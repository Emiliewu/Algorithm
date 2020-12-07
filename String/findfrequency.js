/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @return {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 * * count = 1
 * result = {} --oject
 * need a for loop to go through whole array
 for(var i = 0; i < arr.length; i++)
 * if 
 * arr[i] is not in result object
 * result[arr[i]] = count
 * else if is in the result object
 * count += 1
 * result[arr[i]] = count
 *
 *  Object.hasOwnProperty("keyName")
 * 
 * 
 * method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.
 * 
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
 */
function frequencyTableBuilder(arr) {
  var result = {};

  for(let i = 0; i < arr.length; i++) {
  
    if (result.hasOwnProperty(arr[i]) === false){
      result[arr[i]] = 1;
    }
    else {
     result[arr[i]] += 1;
    }
  }
  return result;
}

console.log(frequencyTableBuilder(arr1));
console.log(frequencyTableBuilder(arr2));
console.log(frequencyTableBuilder(arr3));



module.exports = { frequencyTableBuilder };

