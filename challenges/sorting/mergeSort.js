/** MERGESORT Algorithm
 * 
 * timespace: 
 * - log linear runtime:  avg && worst
 * - constant memspace
 * 
 * approach: divide and conquer
 * > recursively break down problem into simpler sub-problems and merge back together
 * > - the number of breakdowns (recursive splits) is a log of the number of items in the array
 * 
 * 2 parts:
 * - recursively split array (left, right) until single ele arrays
 * - merge the two halves
 */

const { memoryUsage } = require("process")

/** ---------------------------------------------------------------- Part 1 - Merge Utility
 * You are given two sorted arrays of numbers, arrA and arrB. 
 * - A has a large enough buffer at the end to hold B
 * 
 * Merge B into A in sorted order (mutate the inputs is allowable)
 * - i.e. Do NOT create a new composite structure
 * - returned array should reference arrA's input arg's memspace
 *  
 */

/** mk1 - mutates the input arrays (full merge of B into A)
 * treat arrB like a queue -> shift and process each ele: currB
 * iterate through A
 * - if currB is greater than A[idx] continue
 * - else splice(start=idx,  delete=0, currB) in currB
 * - update currB
 * 
 * ## handle equal vals
 * ## handle B values greater than last idxA
 */

// const mergeSortedArrays = (arrA, arrB) => {                                               // merge in place - constant memspace
//   if (!arrA || !arrA.length) return (arrA.push(...arrB), arrA)
    
//   let idx = 0, currentA, currentB = arrB?.shift();                                        // arrB acts as a queue for arrA insertions
//   while (currentB || currentB === 0) {                               
//     currentA = arrA[idx];
//     (currentB <= currentA) && (arrA.splice(idx, 0, currentB), currentB = arrB.shift());   // inserts smaller bVals into sorted position
//     (idx === arrA.length - 1) && (arrA.push(currentB, ...arrB), currentB = null);         // handles arrB longer than arrA
//     idx++;
//   }

//   return arrA

// }


/** Mk2 RECURSIVE */
function mergeSortedArrays(a, b, idx = 0) {
  return (!a.length) ? b                                                                      // handle empty lists + unequal lengths
    : (!b.length) ? a
    : (idx > a.length) ? (a.push(...b), a)
    : (b[0] <= a[idx]) ? (a.splice(idx, 0, b[0]), mergeSortedArrays(a, b.slice(1), idx + 1))  // merges b into a in-place
    : mergeSortedArrays(a, b, idx + 1)
}
let a = [0, 5, 10, 15]
let b = [2, 4, 8, 20]

// console.log('-----', mergeSortedArrays(a, b))
 

/** mk3 - not constant space 
 * returns a reference to new composite in memspace (sorted)
 * - repeatedly compare head vals 
 * -- shift and push the smaller to sorted
 * - stale data left in memory
 */ 
// const mergeSortedArrays = (arr1, arr2) => {
//   const sorted = [];
  
//   while (arr1.length && arr2.length) {
//     (arr1[0] < arr2[0]) 
//       ? sorted.push(arr1.shift())
//       : sorted.push(arr2.shift())
//   }

//   return sorted.concat(...arr1, ...arr2)     // concats any remaining items 
// }


// testcases
const testA = [2, 5, 10, 57, 99];
const testB = [9, 14, 23 ];
const expected = [2, 5, 9, 10, 14, 23, 57, 99]
const result = mergeSortedArrays(testA, testB);

console.log(`expect ${result} to equal ${expected}: 
//   ${JSON.stringify(result) === JSON.stringify(expected) ? 'PASS!!!' : 'FAIL!!!'}`)
console.log(`expect ${result} to be ${testA}: ${result === testA ? 'PASS!!!' : 'FAIL!!!'}`)





/** -------------------------------------------------------------- Part 2 - MergeSort
 * 
 * We have an array of unsorted array of numbers
 * 
 * Implement mergesort algorithm
 * - function should mutate and return reference to argument array
 * 
 * approach: 
 * recursively splice out right arrays til length is less than 2
 * - merge left and right using utility
 * (alt - non-mutating) slice left and right arrays
 * 
 */

const mergeSort = arrOfNums => {
  const len = arrOfNums.length;
  if (len < 2) return arrOfNums;

  const midPt = Math.floor(len / 2),
        right = mergeSort(arrOfNums.splice(0, midPt))
        left = mergeSort(arrOfNums)

  return mergeSortedArrays(left, right)
}



// testcases:
const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];
const ms_result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
// const expected2 = mergeSort(unsortedArr)

// console.log(`expect ${expected2} to equal ${ms_result} : 
//   ${JSON.stringify(expected2) == JSON.stringify(ms_result) ? 'PASS!!!' : 'FAIL!!!'}`);
// console.log(`<><><><> expect output to reference the same space in memory as the input: ${expected2 === unsortedArr ? 'PASS!!!' : 'FAIL!!!'}`)

