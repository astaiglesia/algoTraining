/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.
*/


// ### Assume input arrays contain no duplicates, may contain nums and/or strings

// create a func that accepts an unknown number of arrays; returns an array or string
// - function to iterate through input arrays and populate an output array with common elements -> 
// --- use reduce to iterate among arg arrays and executing filter on each array
// ----- filter to populate a return array with values that pass the boolean check of .includes
// - if output array is empty return string else return output
const commonElements 


// test cases
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) // -> [2, 3, 2000, 'dog']

/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized

// test cases
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElementsOptimized(arr1, arr2, arr3) // -> [2, 3, 2000, 'dog']

module.exports = {commonElements, commonElementsOptimized} 