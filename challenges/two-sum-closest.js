/*

Given an array nums of n integers and an integer target, find two integers in
nums such that the sum is closest to target. Return the sum of the two
integers. You may assume that each input would have exactly one solution, and
that the array will have at least two elements.

Example:



Solve this problem using any strategy you would like: a naive solution is fine.

Extension:
The naive solution for this problem has O(n^2) time complexity. Can you come up
with a different solution with better time complexity? Hint: first sort the
array, which is O(n*log(n)) time, and see if you can post-process the array in
O(n) time.

*/


// !!!! REFACTOR!!!! the SUM should be closest to the target, not the integers
// |===> Solution <===|
// input: array of inetegers, integer ; output: integer
// givens: an array of integers + a target integer
// find: the sum of the 2 integers in the array that are closest to the target
// assumptions: each input has exactly one solution, array contains at least 2 elements, no solultion constraints

// breakdown: determine the closest numbers to the target -> create 2 vars
// approach: 
// - declare 2 vars for closest nums + output array
// - iterate through the array and check if the diff between the target and ele is less than either current checker   
// - if new lower diff -> reassign the var and splice to output array <--- use object?
// - return the sum of the array    
// edge cases: 
// <pseudocode>


// ------- Code --------
const twoSumClosest = (nums, target) => {
  let check1 = Infinity;
  let check2 = Infinity;
  let cache1;
  let cache2;

  for (let i = 0; i < nums.length; i++) {
    const diff1 = Math.abs(target - nums[i]);
    const diff2 = Math.abs(target - nums[i]);
    
    if (diff1 < check1) {
        check1 = diff1;
        cache1 = nums[i]
    }
    else if (diff2 < check2) {
        check2 = diff2; 
        cache2 = nums[i]
    };
    console.log(check1, check2, cache1, cache2);
  }

  return cache1 + cache2;
};


// test cases:
/*
Given array nums [2, -2, 1] and target = 4.
The sum that is closet to the target is 3. (2 + 1 = 3).

Given array nums = [2, -3, -6, 7, 4] and target = 3.
The sum that is closest to the target is 4. (-3 + 7 = 4).

Given array nums = [3, 1, 4, 3] and target = 6.
The sum that is closest to the target is 6. (3 + 3 = 6).
*/

console.log(twoSumClosest([2, -2, 1], 4)); // <--- expect 3
console.log(twoSumClosest([2, -3, -6, 7, 4] , 3)); // <--- expect 4
console.log(twoSumClosest([3, 1, 4, 3], 6)); // <--- expect 6

// time complexity of current solution:
// optimization, alternate approaches + tradeoffs
// ------- Refactor --------


module.exports = {twoSumClosest};

