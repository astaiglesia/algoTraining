/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number

  input: [] of nums, target: num
  output: bool
  givens:
  - returns true if any two numbers add up to the target else false
  - can't use element twice
  - assume only max one solution per input

  approach: brute force with nested iteration
  - maintain difference table (cleaner and faster)
    - evaluate each element against the target and find the difference
    - check if difference exists as a key in table
    - return true on hit, else store the difference as a key with a val 

  edges: 
  - nested arrays?
  - invalid inputs
  - handle negs

  timespace: linear time, linear space
*/


const twoSum = (nums, target) => {
  const diffTable = {};

  for (const num of nums) {
    const currentDiff = target - num;
    if (diffTable[num]) return true;
    diffTable[currentDiff] = true;
  }

  return false
}

// test cases
const nums = [1, 4, 7, 2, 9, 0];
console.log(twoSum(nums, 8)); //> true

const arr = [1, 4, 7, 2, 9, 0];
console.log(twoSum(arr, 17)); // false

const arr2 = [-1, -1, -2, -4, -5];
console.log(twoSum(arr2, -2)); //(true);



/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

const threeSum = (arr, target) => { 

}





module.exports = { twoSum, threeSum };