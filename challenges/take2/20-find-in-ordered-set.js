/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

const findInOrderedSet 

// testcases

const nums = [-3, 0, 8, 13, 37]
console.log(findInOrderedSet(nums, 0));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false

const arr = [-41, -2, 0, 1, 3, 13, 72];
console.log(findInOrderedSet(arr, -500)); //(false));
console.log(findInOrderedSet(arr, 64));   // (false)
console.log(findInOrderedSet(arr, 13));   // (true));

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

*/

// check the middle element of the middle array
// --- determine if target is equal to, greater or less than middle element
// --- check if targety is equal to, greater or less than edge element in the array
// --- if target is within the array's range, recurse within
// --- if target is outside of the array range, recurse outside


const findIn2dMatrix = (matrix, target) => {

};

module.exports = { findInOrderedSet, findIn2dMatrix };
