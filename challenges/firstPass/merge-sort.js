/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.

*/

// given: array of integers; return: sorted array
// DO NOT USE NATIVE SORT METHOD
// split array in half until each element is in it's own array 
// compare a pair of arrays and combine into a sorted array - use reduce?
// return sorted array 
// edge cases:

const mergeSort = array => {
  const splitArray = [];
  const output = [];

  array.forEach( ele => splitArray.push([ele]));
  // console.log(splitArray);

  for (let i = 1; i < output.length; i++){
    if (ele[0] < accum[i]) output.unshift(ele[0]);
  }

  // return splitArray.reduce((accum, ele) => {
    // if (!accum) {
    //   accum.unshift(ele[0])
    // }
    // console.log(accum)

    // return accum
  // },[] );

  return output;
}

const tester = [8,7,5,3,9]
console.log(mergeSort(tester));

module.exports = { mergeSort };