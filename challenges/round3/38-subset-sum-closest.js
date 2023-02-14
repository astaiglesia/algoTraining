 /*

You are given an array of integers and a target number. Write a function that
returns the smallest absolute difference of the closest subset sum to the
target. A subset can be any size and the elements do not have to appear
consecutively in the array.

Positive, negative, and zero allowed. Some numbers may be duplicated.

subsetSumClosest([3, 7, 8, 2], 5) -> 0
Because 3 + 2 -> 5 exactly, the difference between the closest sum and the target
is 5 - 5 = 0.

subsetSumClosest([3, 7, 8, 2], 6) -> 1
The closest subset sum to 6 is either 7 -> 7, or 3 + 2 -> 5. Either of these has
an absolute difference from the target of 1.

subsetSumClosest([1, -3, 2], 5) -> 2
The closest subset sum to 5 is 1 + 2 -> 3, which has an absolute difference
from the target of 2.

subsetSumClosest([], 6) -> 6
An empty array "sums" to 0, which has an absolute difference from the target 6
of 6.

input: nums: [], target: num
output: num
givens:
- function returns the distance (abs value) from the target to the closest sum of any sized subset
- subset can be any size and of any order

approach:
- determine all possible combinations of sums for the nums array
- init closestSum defaulted to target
- iterate through nums
  - subtract current and reassign closest sum if smaller
  - 
edges: 
- 

*/

const subsetSumClosest = (nums, target) => {
  let closestDiff = target
  let totalSum = nums.reduce((accum, current) => accum + current)
  console.log("🚀 ~ file: 38-subset-sum-closest.js:46 ~ subsetSumClosest ~ totalSum", totalSum)
  let currentSum = 0

  const sorted = nums.sort((a, b) => a - b)
  console.log('sorted', sorted)
  
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i]
    const currentDiff = Math.abs(target - currentSum)
    if (currentDiff < closestDiff) closestDiff = currentDiff
    if (closestDiff === 0) break
  }

  return closestDiff
};

// testcases
const tester = [3, 0, -2, 9, -5, 7]


console.log('expect', subsetSumClosest(tester, 4), 'to equal 0')
console.log('expect', subsetSumClosest(tester, 15), 'to equal 1')


/*

Extension:

Given a set of candidate numbers (nums) (without duplicates) and a target
number (target), find all unique combinations in candidates where the candidate
numbers exactly sum to target.

The candidate numbers will always be presented in ascending order.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
The solution set may be returned in any order.

Input: nums = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]

Input: nums = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

Input: nums = [3, 4, 7, 8, 11], target = 5,
A solution set is:
[
]

*/

const generateCombinations = (nums, target) => {
  
};

module.exports = {subsetSumClosest, generateCombinations};
