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

approach: recursive func defined with input: [], target: num, currentDepth = 1, output: []
base case: terminate on empty arrays, return output
recursive case: 
- analyze element at the 0 idx
  - if element is non-empty array 
    - recursive call: pass in the arrayt + incremented depth
  - if element is num && current Depth is less than or equal to target
      -  push to output
  - recursive call to a sliced input

*/


const retrieveDepth = (input, target, currentDepth = 1, output = []) => {
  console.log('--------- new frame on stack with input of', input, 'at depth', currentDepth, 'current output is', output )
  if (!input.length) return output;

  const currentElement = input[0];
  if (Array.isArray(currentElement) && currentElement.length) {
    retrieveDepth(currentElement, target, currentDepth + 1, output);
  }
  if (typeof(currentElement) === 'number' && currentDepth <= target) {
    output.push(currentElement);
  }
  
  return retrieveDepth(input.slice(1), target, currentDepth, output)
}

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


const flattenDepth = () => {

}

// console.log(flattenDepth([2, [4, [7], 1], 5], 0));
// console.log(flattenDepth([2, [4, [7], 1], 5], 1));
// console.log(flattenDepth([2, [4, [7], 1], 5], 2));
// console.log(flattenDepth([2, [4, [7], 1], 5], 3));


module.exports = {retrieveDepth, flattenDepth};
