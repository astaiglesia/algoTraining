/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/


/* |===> Solution <===|
  input: number[] -> unsorted array of all values 1 through n, plus 1 duplicate
  output: duplicate:number
  approach: sort the array
  	. initialize a cache variable to the 1st element 
    . iterate through the sorted array
    . conditional return -> if next element is equal to the first, return the cache
    .       else reassign the cache and continue
    .
  edges:  ASSUME WE CAN SORT THE ARRAY, assume valid inputs, assume there is a valid duplicate
  time: n + n = 2n = O(n)
  refactored time: 
*/

// const duplicateNumber = (array, sorted = array.sort()) => {
//   if (sorted[0] === sorted[1]) return sorted[0]
//   return duplicateNumber(array, sorted.slice(1)) // [1, 2, 2, 3, 4, 5, 6]
// }
// refactor
const duplicateNumber = ( array, sorted = array.sort() ) => sorted[0] === sorted[1] ? sorted[0] : duplicateNumber( array, sorted.slice(1) );
  

// test cases:
// console.log(duplicateNumber([1,5,4,3,6,2,4,7])) // should return 4





/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.

(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.

ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/


/* |===> Solution <===|
  input: number[] -> contains n+1 unsorted elements values ranging from k to k + n -1
  variables:  
    . if n=6, k=1 => 6 elements ranging from 1 to 6... + 1 duplicate
    . if n=6, k=3 => 6 elements ranging from 3 to 8... + 1 duplicate
  output: eval: number
  approach: duplicateNumber() solves this in O(n) time and space complexity
  	. use a storage object to achieve 0(1) space complexity
    . iterate through the array, conditionally creating properties with elements as keys
    . if key doesn't exist create key
    . else return element
    .
  edges: invalid inputs -> need only check if isArray, approach is valid for array of any, assume that every array contains a duplicate
  time: O(n)
  refactored time:
*/

const duplicateNumberAdvanced = ( array, storage = {} ) => {
  for (let i = 0; i < array.length; i++) {
    let current = array[i];

    if (storage[current]) return current
    else storage[current] = current
  }
}

// test cases:
console.log(duplicateNumberAdvanced([3, 4, 7, 6, 8, 5, 6] )) // should return 6

// module.exports = { duplicateNumber, duplicateNumberAdvanced };
