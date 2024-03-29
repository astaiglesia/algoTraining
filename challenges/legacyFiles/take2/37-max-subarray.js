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


const maxSubarray 

// test cases:
input = [3, 10, -4, 7, 2]; 
input2 = [15, 20, -5, 10]; 

console.log(maxSubarray(input)); // <--- expect returns 18 from subarray [3, 10, -4, 7, 2]
console.log(maxSubarray(input2)); // <--- expect returns 40 from subarray [15, 20, -5, 10]


/*
  Extension: solve in linear time and constant space
  Hint: Kadane's Algorithm
*/

const kadanesMaxSubarray = (arr) => {
  
}

module.exports = { maxSubarray, kadanesMaxSubarray };
