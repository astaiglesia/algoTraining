const { twoSum } = require('../../arrays_hashing/twoSum.js')

describe('testing array search for indices of the two elements whose sum equals a target',  () => {
  let nums, target

  it('function should handle 2 value array', () => {
    nums = [4, 5], target = 9
    expect([[0, 1], [1, 0]]).toContainEqual(twoSum(nums, target))
  })
  it('function should handle larger array', () => {
    nums = [3, 7, 4, 12, 9, 1, 23, 13], target = 20
    expect([[1, 7], [7, 1]]).toContainEqual(twoSum(nums, target));
  })

})