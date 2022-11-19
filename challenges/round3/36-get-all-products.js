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


const getAllProducts 


// test cases:
console.log(getAllProducts([1, 7, 3, 4])); // <--- expect -> [84, 12, 28, 21] via: [7*3*4, 1*3*4, 1*7*4, 1*7*3]
console.log(getAllProducts([2, 5, 3])); // <--- expect -> [15, 6, 10] via: [5*3, 2*3, 2*5]
console.log(getAllProducts([0, 3, 4, 0])); // [0, 0, 0, 0]
console.log(getAllProducts([0, 3, 4, 2])); // [0, 0, 0, 24]



module.exports = {getAllProducts};
