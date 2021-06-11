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
*/

// func accepts array and num args; returns a bool
// -- iterate to see if 2 numbers in the array add up to the target (num arg)
// -- ### Assume each input has only 1 solution
// -- ### an element may not be used twice
// handle neg numbers!!
// edge cases: 
// empty array
// invalid input(s) -> non-number inputs

const twoSum = (arr, target, current = 0, next = 1, sum = 0) => { 
  // ---- edge cases
  if (typeof target !== 'number' || typeof arr[current] !== 'number') return false
  if (!arr[current]) return false
  // ---- base case
  sum = arr[current] + arr[next];     // reassign sum to current plus next
  // console.log('current sum of ', arr[current], arr[next], 'is:', sum)
  if (sum === target) return true     // check sum and return true if equal to target
  // ---- recursive case
  else next += 1;                     // if not, increment next

  if (next === arr.length) {          // if next will try to access an undefined element, reset counters
    current += 1;
    next = current + 1;
  } 

  return twoSum(arr, target, current, next, sum)
}

// test cases
const nums = [1, 4, 7, 2, 9, 0];
console.log(twoSum(nums, 7)); //> true

const arr = [1, 4, 7, 2, 9, 0];
console.log(twoSum(arr, 17)); // false

const arr2 = [-1, -1, -2, -4, -5];
console.log(twoSum(arr, -2)); //(true);

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