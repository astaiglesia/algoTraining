/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

// for a recursive approach remember to write your base case
// write your recursive logic here
// ------
// recursively multiply the base upon itself pow times --> create output var defaulted to base
//    decrement power on each pass
//    terminate recursion and return output when pow =0 <--- base case

function pow(base, power, output = base) {
  return (power === 0 ) ? 1       // <---- edge case
      : (power === 1 ) ? output
      : pow(base, power - 1, output * base);
}

 // test cases
 console.log(pow(2,4)) // => 2^4 = 16
 console.log(pow(3,3)) // => 3^3 = 27
 console.log(pow(4,0)) // => 1

/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */

function powRecurse(base, power) {
  // for a recursive approach remember to write your base case
  // The number of computations for an algorithm in O(n), or linear, time complexity increases in direct proportion to the size of the input data. 
  // In this case, the power is the dictating variable as its size directly determines the number of iterations with recursive calls occuring only once per pass.
  // Therefore, the function as written above and below are in O(n) time complexity.
  return (power === 0 ) ? 1
      : (power === 1 ) ? output
      : pow(base, power - 1, output * base);
}

module.exports = { pow, powRecurse };
