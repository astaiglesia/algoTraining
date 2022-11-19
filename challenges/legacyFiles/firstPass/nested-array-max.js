
/* 

Write a function to find the largest number in an arbitrarily nested array. 
The function should return the largest number contained anywhere in the array, 
regardless of how deeply nested it is.
Assume all elements in each array are numbers.

Ex:

const arrFlat = [1, 3, 10, 6];
nestedArrMax(arrFlat);
-> 10

const arrNested = [1, [3, [10], 6]];
nestedArrMax(arrNested);
-> 10

*/
// function accepts an array; returns a num
// --- iterate through the array determine the largest number
// --- set up a results var to be assigned the greater of ele[0] and result 
// ### assume non-array elements are numbers
const nestedArrMax = (arr, result = 0) => {
//   return Math.max(arr.flat(Infinity));
  
  if (arr.length === 0) return result;
  if (arr[0] === undefined) return nestedArrMax;
  
  // console.log(result);
  // --- if ele is an array, recursive call on element
  if (Array.isArray(arr[0])) {
    nestedArrMax(arr[0], result)
  }

  // --- if ele is a number -> conditional reassignment of results (if greater than current result)
  else {
    if (arr[0] > result) result = arr[0];
  }

  return nestedArrMax(arr.slice(1), result)
};

// test cases
const arrFlat = [1, 3, 10, 6];
console.log(nestedArrMax(arrFlat));
// -> 10

const arrNested = [1, [3, [10], 6]];
console.log(nestedArrMax(arrNested));
//-> 10


/*

Extension:
Write a function to find the largest number in a nested array, up to and including a given level. 
Return the largest number without going deeper in the nested array than the specified level.
Assume all elements in each array are numbers.

The original array is considered to be at depth 1, any inner array is depth 2, etc.

Ex:

const arrNested = [1, [3, [10], 6]];
nestedArrMaxLevel(arrNested, 1);
-> 1

nestedArrMaxLevel(arrNested, 2);
-> 6

nestedArrMaxLevel(arrNested, 3);
-> 10

*/

const nestedArrMaxLevel = (arr, level) => {

};

module.exports = {nestedArrMax, nestedArrMaxLevel};