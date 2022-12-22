/** ******** TWOSUM *********
 * 
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * You can return the answer in any order.
 * 
        Example 1:

        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
        Example 2:

        Input: nums = [3,2,4], target = 6
        Output: [1,2]
        Example 3:

        Input: nums = [3,3], target = 6
        Output: [0,1]
        

        Constraints:

        2 <= nums.length <= 104
        -109 <= nums[i] <= 109
        -109 <= target <= 109
        Only one valid answer exists.
        

        Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 * @param     nums: [num], target: num
 * @return    output: [num]
 * givens: 
 * - nums must have at least 2 elements
 * - only one valid answer must exist
 * - evaluates the input array for the two numbers that add up to the element
 * - returns the indices of those numbers
 * 
 * approach: iterate with a cache?
 * - set up a cache to store props where key: target value less current, value: currenIdx
 * 
 * - iterate with an idx
 *   - search for current element's match in cache, return its value and curent idx on cache hit
 *    - check if key exists 
 *    - if true return value and current idx as a tuple
 *    - else store new prop cache on cache miss to set the current element's match
 * no error handling - assume valid answer exists
 * 
 * edges:
 * invalid inputs
 * 
 * timespace:
 * linear time - pass thru each element as a worst case
 * linear space - store to cache
 * 
  console.log('new pass -------> current cache: ', cache, 'current idx: ', currentIdx, 'nums[currentIdx]: ', nums[currentIdx])
*/

const twoSum = (nums, target) => {
  const cache = {[target - nums[0]]: 0}
  let currentIdx = 1

  while (currentIdx < nums.length) {
    if (cache[nums[currentIdx]] !== undefined) return [currentIdx, cache[nums[currentIdx]]]

    cache[target - nums[currentIdx]] = currentIdx
    currentIdx += 1
  }
}

// test cases
nums = [4, 5], target = 9
console.log(twoSum(nums, target));


module.exports = {twoSum}
