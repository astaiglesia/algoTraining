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


input: numsArray: []nums
output: []nums
given: 
- valid subarray is any SLICE of consecutive ele
- function evals for the subarray with the largest sum
- input contains positive and negative numbers
- MUST maintain input order
approach:
- iterate through the array
  - find subarrays
    - iteratively slice from index 0 to end
    - for each subarray
      - nested iteration on new subarrays, slicing from right 
    - calc the sum (arrReducer)
    - reassign as necessary

  cases ==

  - iteraively slice from index length to start
  - iteratively take center slices  
edges: 
- invalid inputs:
  - assume arrays are strictly typed
  - multiple max subs?
timespace:
- quadratic time
*/

const arrReducer = array => array.reduce((accum, current) => accum + current)

const maxSubarray = numsArray => {
  let currentSum = arrReducer(numsArray),
      maxSum = currentSum

  for (let i = 0; i < numsArray.length; i++){
    // create a new slice from input
    currentSub = numsArray.slice(i)
    currentSum = arrReducer(currentSub)
    if (currentSum > maxSum) maxSum = currentSum

    // nested iteration to create and eval slices of current subarray from right   
    for (let rightIdx = currentSub.length - 1; rightIdx > 0; rightIdx--){
      const innerSub = currentSub.slice(0, rightIdx),
      innerSum = arrReducer(innerSub)
      if (innerSum > maxSum) maxSum = innerSum
    }
  }
    
  return maxSum
}

// test cases:
input = [1, -2, 3, 10, -4, 7, 2, -5] 
input2 =  [-100, -20, 5, -10]

// console.log('expect', maxSubarray(input), 'to equal 18')
// console.log('expect', maxSubarray(input2), 'toEqual 5')


/*
  Extension: solve in linear time and constant space
  Hint: Kadane's Algorithm
  -  maintain a maxSum and current Sum
  -  iterate through array
    - incremet current sum by current num on each pass, reassign max num as necessary
    - if currentSum is less than 0, reset to 0 
    - (carrying forward negative sums can only reduce any sums to the right)

  linear time
*/

const kadanesMaxSubarray = numsArray => {
  let currentSum = 0,
      maxSum = -Infinity

  for (const num of numsArray) {
    currentSum += num
    if (currentSum > maxSum) maxSum = currentSum
    if (currentSum < 0) currentSum = 0
  }

  return maxSum
}


console.log('expect', kadanesMaxSubarray(input), 'to equal 18')
console.log('expect', kadanesMaxSubarray(input2), 'toEqual 5')

module.exports = { maxSubarray, kadanesMaxSubarray };
