/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA = [1, 2, 2, 2, 7];
const numsB = [2, 2, 6, 6, 7];
const expected = [1, 2, 2, 2, 6, 6, 7];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
  let multiset = [];
 // iterate through both array
 // for duplicate cases only take the longest duplication
  let runnerA = 0;
  let runnerB = 0;

  let a = sortedA.length;
  let b = sortedB.length;
  while(runnerA < a && runnerB < b) {
    if(sortedA[runnerA] < sortedB[runnerB] || runnerB === b-1) {
      multiset.push(sortedA[runnerA]);
      runnerA++;
    } else if (sortedA[runnerA] > sortedB[runnerB] || runnerA === a-1) {
      multiset.push(sortedB[runnerB]);
      runnerB++;
    } else if(sortedA[runnerA] === sortedB[runnerB]) {
      multiset.push(sortedA[runnerA]);
      runnerA++;
      runnerB++;
    }
  }
  return multiset;
}

console.log(orderedMultisetUnion(numsA, numsB))