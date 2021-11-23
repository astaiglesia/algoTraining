/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */
//---------------------------------take2
// input: base: num, power: num
// output: evalResult: num
// givens: function to evaluate the base raised to the power
// approach: iterate a process power times
// - evalResult defaulted to 1 
// - on each pass multiply the eval result by the base
// - use for loop
// - 
// - 
// edge cases: 
// - invalid input (assume valid?)
// - negative exponents return the reciprocal of a positive exponent of the abs value
// - 0 power returns 1

const pow = (base, power, evalResult = 1) => {
  if (power === 0) return evalResult;
  
  
  for (let i = Math.abs(power); i > 0; i--) {
    evalResult *= base;
  }

  return (power < 0) ? (1 / evalResult) : evalResult;
}

// time: O(power) -> iterates power times
// space: O(1) -> memory allocation remains constant

// alt approach -> see extension

// console.log(pow(2,4)); // => 16
// console.log(pow(2,-4)); // => 1/16
// console.log(pow(2,0)); // => 1



//---------------------------------original take
/* |===> Solution <===|
  input: base: number, pow: number
  output: eval: numnber
  approach: determine the value of arg1 raised to arg2
  	. multiply arg1 on itself arg2 times - loop, recursive solutions
		.
  edges: invalid input(assume valid); negative power, power of 0 should return 1
  time: O(n)
  refactored time:
*/

// const pow = (base, pow, eval = base) => {
//   if (pow < 0) return -1;
//   if (pow === 0) return 1;

//   // use a for loop to iterate pow times
//   for (let i = pow; i>1; i--) {
//     eval *= base
//   }

//   return eval
// }

// test cases:
//  console.log(pow(2,4)) // => 2^4 = 16
//  console.log(pow(3,3)) // => 3^3 = 27
//  console.log(pow(4,0)) // => 1
//  console.log(pow(4,-4)) // => -1


/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */
//---------------------------------take2
// input: base: num, power: num
// output: evalResult: num
// givens:
// approach: use recursion, decrement power on each pass
// - base case when power equals zero
// - recursive case mmultiply evalResult by base
// - 
// - 
// - 
// edge cases: 
// - invalid input (assume valid?), handle negative numbers and 

const powRecurse = (base, power, counter = Math.abs(power), evalResult = 1) => {
  return (counter === 0) ? ((power < 0) ? (1 / evalResult) : evalResult) : powRecurse(base, power, counter - 1, evalResult * base);
}


// time: O(n) -> power iterations of the code
// space: O(n) -> calls to the stack up to power  

console.log(pow(2,4)); // => 16
console.log(pow(2,-4)); // => 1/16
console.log(pow(2,0)); // => 1


//---------------------------------original take
// for a recursive approach remember to write your base case
// The number of computations for an algorithm in O(n), or linear, time complexity increases in direct proportion to the size of the input data. 
// In this case, the power is the dictating variable as its size directly determines the number of iterations with recursive calls occuring only once per pass.
// Therefore, the function as written above and below are in O(n) time complexity.

// RECURSIVE APPROACH - initialize eval output parameter with the value of the base
//                    - input validation are base cases with recursion terminating when pow has been decremented to 1, returning the eval result 
//                    - each recursive call reassigns the value of eval multiplying eval by the base

// const powRecurse = (base, pow, eval = base) => {
//   // validates the inputs
//   if (pow < 0) return -1;
//   if (pow === 0) return 1;
  
//   // base case
//   if (pow === 1) return eval;
  
//   return powRecurse(base, pow - 1, eval * base)
// }

// test cases:

console.log(powRecurse(2, 4)) // => 2^4 = 16
console.log(powRecurse(3, 3)) // => 3^3 = 27
console.log(powRecurse(4, 0)) // => 1
console.log(powRecurse(4,-4)) // => -1



module.exports = { pow, powRecurse };
