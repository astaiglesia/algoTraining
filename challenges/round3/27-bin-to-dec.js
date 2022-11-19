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




const binToDec 


// test cases
console.log(binToDec('0'))    //-> 0
console.log(binToDec('11'))   //-> 3
console.log(binToDec('100'))  //-> 4
console.log(binToDec('101'))  //-> 5
console.log(binToDec('0101')) // -> 5

// module.exports = {binToDec};