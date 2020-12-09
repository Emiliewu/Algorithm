function bookIndex(arr) {
  let output = '', flag = false;
  if (arr.length === 0) {
      return '';
  }
  if (arr.length === 1) {
      return arr[0];
  }
  for(let i = 0; i < arr.length-1; i++) {
      if (arr[i+1] - arr[i] === 1) {
          if(flag) continue;
          output += arr[i] + "-";
          flag = true;
      }
      else {
          output += arr[i] + ", ";
          flag = false;
      }
  }
  output += arr[arr.length-1];
  return output;
}

function bookIndex1(arr) {
  let output = '';
  if (arr.length === 0) {
      return '';
  }
  if (arr.length === 1) {
      return arr[0];
  }
  for(let i = 0; i < arr.length-1; i++) {
      if (arr[i+1] - arr[i] === 1) {
          output += arr[i] + "-";
          while (arr[i+1] - arr[i] === 1) {
              i += 1;
          }
          i -= 1;
      } else {
          output += arr[i] + ", ";
      }
  }
  output += arr[arr.length-1];
  return output;
}