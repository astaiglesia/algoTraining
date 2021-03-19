/*
You are given an array of integers with both positive and negative numbers.
A valid subarray is any slice of consecutive elements from the array.
(
  e.g. the following are some valid subarrays of [3, 11, 2, 7, 4]
  [3, 11, 2]
  [11, 2, 7]
  [2]
  [3, 11, 2, 7, 4]
)
Find the subarray with the largest sum from the input array.

e.g.

*/

// |===> Solution <===|
// input:	array (of integers); output: array (of integers)
// given: input array contains both pos & neg integers
//        subarrays are any slices from an array comprised of consecutive elements from the input
// find: subarray with the largest sum
// assumptions: 
// breakdown: create and reduce(sum) all valid subarrays -> RETURN THE SUBARRAY that evaluates to the greatest sum
//            -or- slice the smallest value and return that array
// edge cases: invalid inputs, ?input array contains 0?

// approach: 
// set up an output array
// IF all elements in the input are non-zero return the input
// ELSE ??? determine the smallest element??
// Math.min the array, get the index of -> this negative integer should not be part of the subarray
// splice results to left and right of min val 
// and recurse left and right ... finish determining logic
// return the resulting array

// ------- Code --------

const maxSubarray = (arr, output = []) => {
  

}

// test cases:
input = [1, -2, 3, 10, -4, 7, 2, -5]; 
input2 = [15, 20, -5, 10]; 

console.log(maxSubarray(input)); // <--- expect returns 18 from subarray [3, 10, -4, 7, 2]
console.log(maxSubarray(input2)); // <--- expect returns 40 from subarray [15, 20, -5, 10]


// ------- Refactor --------


/*
  Extension: solve in linear time and constant space
  Hint: Kadane's Algorithm
*/

const kadanesMaxSubarray = (arr) => {
  
}

module.exports = { maxSubarray, kadanesMaxSubarray };
