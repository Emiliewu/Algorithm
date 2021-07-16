//String dedupe
// Given a string, return a new string that has all duplicate letters removed -- do not count capital and lowercase as duplicates
// Ex: given: "Alabama" return "Alabm"
// Ex: given: "It's time to duel!" return "It's imeodul!" (notice a space was also counted as a letter)
//No built-in's last instance
const strDedupe = str => {
  let strDupe = ""
  for (let i = 0; i < str.length; i++) {
      let z = 0;//tracks status of duplicate
      for (let j = i + 1; j < str.length; j++) {
          if (str[i] === str[j]) {
              z = 1;
              break
          }
      }
      if (z == 0) {
          strDupe += str[i];
      }
  }
  return strDupe
}

//String deDupes no temp last instance
const strSDupes = str => {
  let i = 0;
  while (i < str.length) {
      for (let j = i+1; j < str.length; j++) {
          if (str[i] === str[j]) {
              str = str.substring(0, i) + str.substring(i + 1)
              i--
          }
      }
      i++
  }
  return str
}
//Last Instance Set
const strDedupeRevSet = str => {
  const set = new Set();
  for (let i = str.length - 1; i >= 0; i--) {
      if (!set.has(str[i]))
          set.add(str[i]);
  }
  return Array.from(set).reverse().join("");
}
//First Instance Set
const strDedupeSet = str => {
  const set = new Set();
  for (let i = 0; i < str.length; i++) {
      if (!set.has(str[i]))
          set.add(str[i]);
  }
  return Array.from(set).join("");
}

const removeDupes = str => [...new Set(str)].join('')

console.log(strSDupes("Snaps! crackles! pops!"))
console.log(strDedupe("Snaps! crackles! pops!"))
console.log(strDedupeRevSet("Snaps! crackles! pops!"))
console.log(strDedupeSet("Snaps! crackles! pops!"))
console.log(removeDupes("Check oops!"))
