/**       --- Quick Sort ---
 * 
 * timespace:
 * - log-linear avg runtime | quadratic worst case 
 * - constant memory
 * 
 * 
 * approach: divide and conquer via partitioning
 * > partition input into subarrays around a pivot
 * > left contains elements < than the pivot
 * > right contains elments > than the the pivot
 * > sort recursively
 * ## choosing a pivot thats too small or large will cause a quadratic runtime
 * 
 * - pop a pivot element 
 * - partition the array around the pivot 
 * - recursive call on left and right
 * - combine the sorted subarrays 
 * 
 * 
 * use-cases:
 * - handles large data sets well
 * - performs well on randomly ordered data
 *    (when data is random, the pivot is statistically likely to be closer to the median)
 * - parallel processing on multicore processors
 *    (by recursively dividing the data into smaller subarray, algo can be executed on multiple cores simultaneously)
 * - external sorting - can be used as an external sorting algo for datasets too large to fit in memory
 *    ( data is sorted into chunks, which are then merged using merge-sort)
 * - data compression
 * 
 */

// mk1 - recursive
const quickSort = (items) => {
  if (!items.length) return items;                        // terminate recursion on empty inputs

  const pivot = items.pop(),                              // pop a pivot 
        left = [],
        right = [];

  for (const item of items) {
    item < pivot ? left.push(item) : right.push(item)     // partition the array
  }

  return quickSort(left).concat(pivot, quickSort(right))  // return out a merge of the partitions and pivot
}


// test cases
const tester = [4, 19, -23, 0, -154, 987, 345, 678]
const expected = [-154, -23,  0, 4, 19, 345, 678, 987]
console.log(`expect ${quickSort(tester)} should equal ${expected}`)

const tester2 = [678]
const expected2 = [678]
console.log(`expect ${quickSort(tester2)} should equal ${expected2}`)