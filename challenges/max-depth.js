/*

Given an arbitrarily nested array of arrays, return the maximum depth.

For example:

*/
// function accepts an array (of unknown depth); return a number
// set up a depth counter variable
// iterate through the array
// -- if element is not an array, continue
// -- if element is an array, increment counter... recursive call 
// return depth counter
// ### given -> array of arrays === no invalid inputs?
// const maxDepth = (arr, counter = 0, depth = 1) => {
//   // base case - terminates recursion when counter equals array length
//   if (arr.length === counter ) return depth

//   // recursive case -> if ele is array, recursive call on the element, reset counter to 0 and increment depth
//   if (Array.isArray(arr[counter])) return maxDepth(arr[counter], 0, depth + 1)

//   return maxDepth(arr, counter + 1, depth)
// };

// --- #Refactor#
// base case - terminates recursion when counter equals array length
// recursive case -> if ele is array, recursive call on the element, reset counter to 0 and increment depth
const maxDepth = (arr, counter = 0, depth = 1) => {
  return (arr.length === counter ) ? depth
    : (Array.isArray(arr[counter])) ? maxDepth(arr[counter], 0, depth + 1)
    : maxDepth(arr, counter + 1, depth);
};


//  test cases
console.log(maxDepth([3, 2]));   // -> 1 (non-nested array, so maximum depth is 1 level)
console.log(maxDepth([7, 8, 0, 9])); // -> 1 (non-nested array, so maximum depth is 1 level)
console.log(maxDepth([])); // -> 1 (array may be empty)

console.log(maxDepth([3, [6, 7], 2])); // -> 2 (maximum depth is 2 levels)
console.log(maxDepth([[2, 1], 8, 3, [4], 5])); // -> 2 (maximum depth is 2 levels)
console.log(maxDepth([3, [], 2])); // -> 2 (inner arrays may be empty, but still count towards depth)

console.log(maxDepth([3, [6, [7]], 2])); // -> 3 (maximum depth is 3 levels)

console.log(maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]])); // -> 4 (maximum depth is 4 levels)

console.log(maxDepth([3, [], 2])); // .toBe(2);


module.exports = {maxDepth};
