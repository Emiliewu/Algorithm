//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my sho"
const rotateString = (str, num) => {
  //iterate through the string
  // have a counter to check the rotate point
  // once the rotate point is met, assign the rest of str values to the other temp str
  leftstr = "";
  rightstr = "";
  count = 0; 
  for (let i = 0; i < str.length; i ++) {
    if(count < str.length-num) {
      leftstr += str[i];
      count++;
    } else {
      rightstr += str[i];
      count++;
    }
  } 
  return rightstr+leftstr;
}

let testString = "012345";
console.log(rotateString(testString, 3));
let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 9));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my sho")
// -> returns true
const isRotation = (str1, str2) => {
  // if the two strings does not have the same length, return false
  if(str1.length !== str2.length) {
    return false;
  }

  let tempstr = "";
  let tempstr2 = "";
  let i = 0;
  let j = 0;
  //iterate through the second string until find the match point
  //then check if the rotated string are the same
  while(str2.length>j){
    if(str2[j] !== str1[i]){
      tempstr +=str2[j];
      j++;
    } else {
        tempstr2 += str2[j];
        i++;
        j++;
    }
  }
  if(str1 === tempstr2+tempstr){
    return true;
  } else {
    return false;
  }
}

console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"))