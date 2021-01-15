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

// reading binary -> read from right to left
  // each string character is raised to the power of n where n increases sequentially from right to left
  // sum the total 

// create a func; accepts a string (binary number representation); returns a num  ### DO NOT USE parseInt()
    // iterate from right to left -> split string to create an iterable array, reduce right
    // conditionally increment output by base 2 raised to power -> Math.pow; if 1, increment, if 0 don't
    // increment power on each pass
    // return total

// const binToDec = (binString, power = 0) => {
// //   console.log(binString.split(""));

//   return binString.split("").reduceRight((total, current) => {
//     // console.log(Math.pow(Number(current), power));
//     if (current === '1') {
//         total = total + Math.pow(2, power);
//     }
//     power = power + 1;
//     return total;
//   }, 0)
// }

// refactor code

const binToDec = (binString, power = 0) => {
  return binString.split("").reduceRight((total, current) => {
    if (current === '1')  total = total + Math.pow(2, power);
    power += 1;
    return total;
    }, 0)
}


// test cases
console.log(binToDec('0'))    //-> 0
console.log(binToDec('11'))   //-> 3
console.log(binToDec('100'))  //-> 4
console.log(binToDec('101'))  //-> 5
console.log(binToDec('0101')) // -> 5

// module.exports = {binToDec};