/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

// reading binary -> read from right to left, base 2 (each digit represents a sequential power of 2)

/** ----- binary to decimal
 * input: bin: string
 * output: num
 * givens:
 * - don't use native parseInt()
 * - binary recap:
 *    > right indexed from 0, base 2
 *    > i.e.
 *          ... 128  64  32  16  8  4  2  1   //  numerical potential
 *               7    6   5   4  3  2  1  0   //  idx from right (determine from length) use as exponent
 * approach:
 * - maintain a power defaulted to string length
 * - maintain output defaulted to 0
 * - interate through the string and evaluate each char
 *  - process the value and increment output
 * 
 * edges
 * - invalid inputs:
 *  - assume enumerated chars of the string (0 and 1 only)
 *  - assume valid binary representation
 * 
 * timespace:
 * - linear time - visit each char
 * - constant space
 * 
 * */ 

const binToDec = binary => {
  let decimal = 0,
      power = binary.length - 1

  for (const char of binary) {
    decimal += (Math.pow(2, power) * char)
    power -= 1
  }

  return decimal
}


// test cases
// console.log(binToDec('0'))    //-> 0
// console.log(binToDec('11'))   //-> 3
// console.log(binToDec('100'))  //-> 4
// console.log(binToDec('101'))  //-> 5
// console.log(binToDec('0101')) // -> 5

module.exports = {binToDec}