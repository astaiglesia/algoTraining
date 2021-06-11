/*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisble by 3 but not by 5,
"buzz" in place of numbers divisble by 5 but not by 3,
and "fizzbuzz" in place of numbers divisble by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

*/

/* |===> Solution <===|
  input: (num: number)
  output: (string | number)[]
  approach: looping counter that conditionally pushes value to output array
  	. accept arg as the terminating value
		. conditional to check for divisibility by 3, 5, 3 & 5
		. push num or string to output
		. >> use for loop (for better speed/efficiency) or recursion (for code clarity)
  edges: invalid input(assume valid); 0 is not inclusive
  time: O(n)
  refactored time:
*/

const fizzbuzz = (num) => {
  const output = [];
  let temp;

  for (let i = 1; i <= num; i++) {
    if ( i % 3 === 0 && i % 5 === 0) temp = 'fizzbuzz'
    else if ( i % 3 === 0 ) temp = 'fizz'
    else if ( i % 5 === 0) temp = 'buzz'
    else temp = i;

    output.push(temp);
  };

  return output;
}

// test cases:
console.log(fizzbuzz(16)); // expected =>[1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]




/*
Extension: 
Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisble by 3 but not by 5 or 7,
"buzz" in place of numbers divisble by 5 but not by 3 or 7,
"bazz" in place of numbers divisble by 7 but not by 3 or 5,
"fizzbuzz" in place of numbers divisble by 3 and 5 but not 7,
"fizzbazz" in place of numbers divisble by 3 and 7 but not 5,
"buzzbazz" in place of numbers divisble by 5 and 7 but not 3,
and "fizzbuzzbazz" in place of numbers divisble by 3, 5, and 7.

fizzbuzzbazz(22);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz',
11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'bazz', 'fizzbazz', 22]

*/


const fizzbuzzbazz = (num) => {
  const output = [];
  let temp;

  for (let i = 1; i <= num; i++) {
    if ( i%3 === 0 && i%5 === 0 && i%7 === 0) temp = 'fizzbuzzbazz'
    else if ( i%3 !== 0 && i%5 === 0 && i%7 === 0) temp = 'buzzbazz'
    else if ( i%3 === 0 && i%5 !== 0 && i%7 === 0) temp = 'fizzbazz'
    else if ( i%3 === 0 && i%5 === 0 && i%7 !== 0) temp = 'fizzbuzz'
    else if ( i%7 === 0) temp = 'bazz'
    else if ( i%3 === 0 ) temp = 'fizz'
    else if ( i%5 === 0) temp = 'buzz'
    else temp = i; 

    output.push(temp);
  };

  return output;
}

console.log(fizzbuzzbazz(110));
// -> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz', 11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'bazz', 'fizzbazz', 22]

// module.exports = {fizzbuzz, fizzbuzzbazz};
