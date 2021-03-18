/*

Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.

Example:

getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

getAllProducs([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]

Be careful in this problem! What if there is a zero (or multiple zeroes) in the
input array? How would you handle this?

*/

// input: array (arbitrary number of at least 2 integers); output: array (of integers)
// find: all products possible by multiplying all but one of the array elements with each other
// givens: integers may be +, -, or 0
// breakdown: MULTIPLY ALL BUT ONE
// assumptions:
// edge cases: invalid inputs, 

// approach: iterate/recurse through array -> multiply all numbers in the array EXCEPT for the current element
// create an output array
// -- on each pass
// ---- reduce the array to a single number and divide that value by the current element
// ---- push the eval result to output

// ------- Code --------

const getAllProducts = array => {
    const output = [];
    const arrayProduct = array.reduce( (accum, current) => accum * current);
    
    for (let i = 0; i < array.length; i++) {
        output.push(arrayProduct/array[i]);
  }
  
  return output;
};


// test cases:
console.log(getAllProducts([1, 7, 3, 4])); // <--- expect -> [84, 12, 28, 21] via: [7*3*4, 1*3*4, 1*7*4, 1*7*3]
console.log(getAllProducts([2, 5, 3])); // <--- expect -> [15, 6, 10] via: [5*3, 2*3, 2*5]
console.log(getAllProducts([0, 3, 4, 0])); // [0, 0, 0, 0]
console.log(getAllProducts([0, 3, 4, 2])); // [0, 0, 0, 24]

// ------- Refactor --------
// refactored -> used reduce only once set to a constant
// ## refactor -> currently the code is not verified to handle zero's and negatives
// ---- use recursion 


module.exports = {getAllProducts};
