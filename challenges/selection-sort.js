/*

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

We will sort the array using a strategy called selection sort, which works as
follows. First, put the smallest number in the array at position 0. Then, put
the second-smallest number in the array at position 1. Then, put the
third-smallest number in the array at position 2 etc. After going through the
whole array, the array will end up being sorted.

*/
// func accepts an array; returns an array
// -- input assumed to contain integers only
// -- ### sort in place
// -- iterate through the array, starting at index 1
// ---- if i < index 0 => swap
// ---- if i > i0 check against  

// ### think of the array as broken into 2 sections -> a sorted part and an unsorted par

// iterate through array to check for non-integers - exit if true 
const selectionSort = (array, counter = 1) => {
  // edgecases: array contains non-integers, empty array, not an array
  if (!Array.isArray(array)) return console.log("this is not an array");
  // base case -> iterated through array
  if (counter > array.length) return array;
  
  // recursive case
  console.log('counter at', counter, 'current array is:', array);
  
  if (array[counter] < array[0]) {
      console.log("true");
    [array[0], array[counter]] = [array[counter], array[0]];
  }
//   console.log(array);
  return selectionSort(array, counter + 1);
}


// test case
const tester =  [5, 25, 16, 48, 30];
console.log(selectionSort(tester));




/*

Extension:

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

For this extension, we will use a strategy called insertion sort, which works as
follows. Imagine that the first k - 1 numbers of the array are in ascending
order. We take the kth number and insert it into the correct position amongst
the k - 1 numbers such that now, the first k numbers of the array are in
ascending order. In other words:

The first value in the array is considered to be already fine.
The second value is either placed before/after the first value.
The third value is inserted in the correct position amongst the first two values.
The fourth value is inserted in the correct position amongst the first three values.
etc.

*/

const insertionSort = array => {
  
};

module.exports = {selectionSort, insertionSort};
