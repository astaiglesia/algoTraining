/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

/* |===> Duplicate Number <===|

input: array of nums
output: num
givens: 
- input is unsorted
- array contains n numbers plus 1 duplicate

approach: 
# iterate and populate a cache, duplicate exists in cache

edges:  
- invalid inputs
- no duplicates

time: linear 
space: linear

*/ 


const duplicateNumber = arr => {
  const cache = {};

  for (const num of arr) {
    if (!cache[num]) cache[num] = true
    else return num;
  }
}
  

// test cases:
// console.log(duplicateNumber([1,5,4,3,6,2,4,7])) // expect to be 4



/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.

(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.

ex: [3, 4, 7, 6, 8, 5, 6] should return 6

input: array of nums with 1 duplicate
output: num
givens:
- input is unsorted
- range of input begins at k
CONSTRAINTS: 
- solve in linear time and constant space
approach:
- previous solution is linear timespace
- we know that the array elements should be a complete, sequential range (plus 1 dup)
- ### use the input as a hashmap ###
*/

/*
utilize input as a hashmap 
- iterate through the array
  - implement hash function where values are hashed to an index and flips the corresponding element to negative val
    - arr[  hashedIdx  ] *= -1 , where n = array length, hashedIdx = currentVal  % n
    - if value at hasheedIdx is negative then the current val has already been encountered
*/

const duplicateNumberAdvanced = arr => {
  const n = arr.length;

  // hashmap the array on itself         linear
  for (let i = 0; i < n; i++) {
    const currentVal = Math.abs(arr[i]);
    const hashedIdx = currentVal % n;

    if (arr[hashedIdx] < 0) return currentVal;
      
    arr[ hashedIdx ] *= -1;
  }

  return null;
}



// includes logs
// const duplicateNumberAdvanced = arr => {
//   const n = arr.length;
//   console.log(arr, n)
//   // find the smallest number            linear
//   let k = arr[0];
//   for (const num of arr) if (num < k) k = num;

//   // hashmap the array on itself         linear
//   for (let i = 0; i < n; i++) {
//     const currentVal = Math.abs(arr[i]);
//     const hashedIdx = currentVal % n;

//     if (arr[hashedIdx] < 0) return currentVal;
    
//     console.log('current value is :', arr[i], 'and will be hashed to idx',  hashedIdx)
  
//     arr[ hashedIdx ] *= -1;
//     console.log(arr)
//   }
  
//   return null;
// }

/* ### 
n = 7
arr at index 
arr[  arr[i]  % n  ] += n

// ex: [3, 4, 7, 6, 8, 5, 6] should return 6
i = 0:
  arr[  3  %  7  ] += n           // element val 3 is hash mapped to index 3
  arr[ 3 ] += 7
  => [3, 4, 7, 13, 8, 5, 6]

i = 1:
  arr[  4  %  7  ] += n           // element val 4  is hash mapped to index 4
  arr[ 4 ] += 7
  => [3, 4, 7, 13, 15, 5, 6]

i = 2:
  arr[  7  %  7  ] += n           // element val 7  is hash mapped to index 0
  arr[ 0 ] += 7
  => [10, 4, 7, 13, 15, 5, 6]

i = 3:
  arr[  13  %  7  ] += n           // element val 13 === 6 is hash mapped to index 6
  arr[ 6 ] += 7
  => [10, 4, 7, 13, 15, 5, 13]

i = 4:
  arr[  15  %  7  ] += n           // element val 15 === 8 is hash mapped to index 1
  arr[ 1 ] += 7
  => [10, 11, 7, 13, 15, 5, 13]

i = 5:
  arr[  5  %  7  ] += n           // element val 5 === 5  is hash mapped to index 5
  arr[ 5 ] += 7
  => [10, 11, 7, 13, 15, 12, 13]

i = 6:
  arr[  13  %  7  ] += n           // element val13 === 6  is hash mapped to index 6
  arr[ 6 ] += 7
  => [10, 11, 7, 13, 15, 12, 20]
*/

// test cases
// const testarr = [1,15,2,5,6,7,3,4,7,8,12,13,9,10,11,14]; // expect to be 7
// console.log(duplicateNumberAdvanced(testarr))

// const testarr2 = [3, 4, 7, 6, 8, 5, 6] // expect to be 6
// console.log(duplicateNumberAdvanced(testarr2))


module.exports = { duplicateNumber, duplicateNumberAdvanced };
