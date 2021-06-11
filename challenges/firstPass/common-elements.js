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
const commonElements = (...args) => {
  let output = [];

  output = args.reduce( (accum, current) => 
    accum.filter( elementToCheck => 
      current.includes(elementToCheck))
  );

  console.log(output);
  return (output.length === 0) ? 'Nothing in Common!' : output
}


// test cases
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) // -> [2, 3, 2000, 'dog']

/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

// create a storage cache 
// iterate through the arrays and populate storage cache/frequency table
// --- key value pair of element:instances
// --- if instances have value of args.length, push key to output
// return any keys with a value of args.length

const commonElementsOptimized = (...args, cache = {}, output = [], count = 0, innerCount = 0) => {
  // base case -> when args.length equals count return output
  if (count === args.length) return output
  if (args[count][innerCount] === undefined)  return commonElementsOptimized (...args, cache, output, count + 1, innerCount = 0)
  
  if (!storage[args[count][innerCount]]) storage[args[count][innerCount]] = 1
  else storage[args[count][innerCount]] += 1

  if (storage[args[count][innerCount]] === args.length) output.push(storage[args[count][innerCount]])



  return commonElementsOptimized (...args, cache, output, count, innerCount + 1)
}

// test cases
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElementsOptimized(arr1, arr2, arr3) // -> [2, 3, 2000, 'dog']

module.exports = {commonElements, commonElementsOptimized} 