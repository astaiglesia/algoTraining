/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

input: nums: array, target: num
output: bool
givens: 
- function to determine if target exists in nums array
- input sorted in ascending order
- solve in a better time than linear

approach:
- use a binary search on target
  - left, middle, right pointers
  - continue til target hit
  - terminate if left > right

edges:
- empty array
- invalid inputs
- target not in array
- handle nested arrays?

timespace: log time, constant space (linear space on recursive)

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

const findInOrderedSet = (sortedArr, target) => {
  let leftIdx = 0, 
      rightIdx = sortedArr.length - 1;
      
  while (leftIdx < rightIdx) {
    const center = Math.round((leftIdx + rightIdx) / 2);

    if (target === sortedArr[leftIdx] 
        || target === sortedArr[center] 
        || target === sortedArr[rightIdx]
    ) 
    return true;

    if (target < sortedArr[center]) rightIdx = center - 1;
    if (target >= sortedArr[center]) leftIdx = center + 1;
  }
  
  return false;
}

// testcases
const nums = [-3, 0, 8, 13, 37]
// console.log(findInOrderedSet(nums, 13));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false

const arr = [-41, -2, 0, 1, 3, 13, 72];
// console.log(findInOrderedSet(arr, -500)); //(false));
// console.log(findInOrderedSet(arr, 64));   // (false)
// console.log(findInOrderedSet(arr, 13));   // (true));



/*
Extension:

Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  

ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false

approach: nested iteration 
- nested iteration
  - iterate through input
  - call find in ordered set on each
  - return if true, else continue
- default return of false
*/

const findIn2dMatrix = (matrix, target) => {
  for (const subarray of matrix) if (findInOrderedSet(subarray, target)) return true;
  return false;
};


// testing
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
// console.log('expect', findIn2dMatrix(matrix, 13), 'to equal true')
// console.log('expect', findIn2dMatrix(matrix, 42), 'to equal false')

module.exports = { findInOrderedSet, findIn2dMatrix };
