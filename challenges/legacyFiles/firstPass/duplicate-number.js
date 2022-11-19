/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

// create a func accepting an array of nums; returns a number
    // iterate through array to populate a storage object
    // if ele does not exist as a key, populate cache using ele as key with a default value of 1
    // else return element
// consider edge cases
const duplicateNumber = (array, cache={}) => {
    return (cache[array[0]]) ? array[0]
        :  (array.length === 0) ? "No Duplicates Found"
        :  (cache[array[0]] = 1, duplicateNumber(array.slice(1), cache))
};

// test case
console.log(duplicateNumber([1,5,4,3,6,2,4,7])) // should return 4

/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.

(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.

ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/


// create a func accepts an array of nums; returns a num
    // determine if array contains duplicates
    // ### O(n) time complexity and O(1) space complexity
    // ---> the recursive approach used above and repeated below should satisfy these conditions
        // single recursive process using a cache object for constant time check/retrieval of stored data
        // as a storage object is being used to store elements sliced from an array, the space used remains constant throughout the process
const duplicateNumberAdvanced = (array, cache={}) => {
    return (cache[array[0]]) ? array[0]
        :  (array.length === 0) ? "No Duplicates Found"
        :  (cache[array[0]] = 1, duplicateNumber(array.slice(1), cache))
};

// test case
console.log(duplicateNumberAdvanced([3, 4, 7, 6, 8, 5, 6] )) // should return 6

module.exports = { duplicateNumber, duplicateNumberAdvanced };
