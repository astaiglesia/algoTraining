/*

Given an arbitrarily nested array of numbers and a positive integer "depth",
return a new array consisting of the numbers with depth less than or equal to
the provided depth, in order of appearance.

The original array is considered to be at depth 1, and inner arrays are at
greater depth.

For example:

retrieveDepth([2, [4, [7], 1], 5], 1) -> [2, 5] because only the 2 and 5 are at
"depth 1", and everything else is too deep. The 4 and 1 are at "depth 2", and
the 7 is at "depth 3".

retrieveDepth([2, [4, [7], 1], 5], 2) -> [2, 4, 1, 5] becuase the 2 and 5 are at
"depth 1", the 4 and 1 are at "depth 2", and the 7 is too deep because it's at
"depth 3".

retrieveDepth([2, [4, [7], 1], 5], 3) -> [2, 4, 7, 1, 5] because every number
is within "depth 3". No number is deeper.

*/
// function acepts args of an array of numbers and an integer value; returns an array
// -- iterate through array and populate an output array 
// -- push elements from input array up to depth of input integer, bypassing the rest 
// -- handle edge cases?
const retrieveDepth = (arr, depth, output = []) => {
  if (arr.length === 0) return output;
  if (depth === 0) return retrieveDepth;
  
  // if element is a numnber
  if (typeof arr[0] === 'number') output.push(arr[0])
  
  // if element is an array - recursive call to just that element, decrementing depth
  else if (Array.isArray(arr[0])) {                
    retrieveDepth(arr[0], depth - 1, output)
  }
  
  return retrieveDepth(arr.slice(1), depth, output);
};


// test cases
console.log(retrieveDepth([2, [4, [7], 1], 5], 1) ); // -> [2, 5] 
console.log(retrieveDepth([2, [4, [7], 1], 5], 2) ); // -> [2, 4, 1, 5] 
console.log(retrieveDepth([2, [4, [7], 1], 5], 3) ); // -> [2, 4, 7, 1, 5] 
/*

Extension:

Given an arbitrarily nested array of numbers and a nonnegative integer "depth",
return a new nested array that's flattened to a certain level of depth.

Flattening at "depth 0" just returns the same array.
Flattening at "depth 1" returns the array flattened at just one level.

For example:

flattenDepth([2, [4, [7], 1], 5], 0)
  -> [2, [4, [7], 1], 5] // the same array

flattenDepth([2, [4, [7], 1], 5], 1)
  -> [2, 4, [7], 1, 5] // flattened at one level

flattenDepth([2, [4, [7], 1], 5], 2)
  -> [2, 4, 7, 1, 5] // flattened at two levels

flattenDepth([2, [4, [7], 1], 5], 3)
  -> [2, 4, 7, 1, 5] // flattening at greater levels just produces a completely
flattened array

*/

// function acepts args of an array of numbers and an integer value; returns an array
// -- iterate through array and populate an output array 
// -- push elements from input array up to depth of input integer, bypassing deeper dimensions
// -- handle edge cases?
const flattenDepth = (arr, depth) => {
  return arr.flat(depth);

  // if (arr.length === 0) return output;
  // if (depth === 0) return flattenDepth;

  // // if element is a numnber
  // if (Array.isArray(arr[0])) output.push(arr[0])
  
  // // if element is an array - recursive call to just that element, decrementing depth
  // else if (Array.isArray(arr[0])) {               
  //   flattenDepth(arr[0], depth - 1, output)
  // }
  
  // return flattenDepth(arr.slice(1), depth, output);
};

console.log(flattenDepth([2, [4, [7], 1], 5], 0));
console.log(flattenDepth([2, [4, [7], 1], 5], 1));
console.log(flattenDepth([2, [4, [7], 1], 5], 2));
console.log(flattenDepth([2, [4, [7], 1], 5], 3));


module.exports = {retrieveDepth, flattenDepth};
