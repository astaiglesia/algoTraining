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


//---------------------------------take2
// input: num
// output: array of nums and strings
// approach: 
// - iterate from 1 to input with a conditional push to an output Array
// - if current int div by 3 and 5 push string fizzbuzz
// - if current div by 5 push string buzz
// - if current div by 3 push string fizz
// - else push current
// edge cases: 
// - invalid input, negative nums

const fizzbuzz = (num, output = []) => {
  if ((typeof num !== "number") || (num < 1)) return "invalid input";

  for (let i = 1; i <= num; i++) {
    ((i % 5 === 0) && (i % 3 === 0)) ? output.push("fizzbuzz") :
    ((i % 5 === 0)) ? output.push("buzz") :
    ((i % 3 === 0)) ? output.push("fizz") :
    output.push(i);
  }

  return output;
}

// time: O(n) -> the loop will iterate n times
// space: O(1) -> constant space allocation

// alt approach -> recursion ? tradeoff => additional calls to the stack
// const fizzbuzz = (num, current = 1, output = []) => {
//   if ((typeof num !== "number") || (num < 1)) return "invalid input";
//   if (current > num) return output;

//   ((current % 5 === 0) && (current % 3 === 0)) ? output.push("fizzbuzz") :
//   ((current % 5 === 0)) ? output.push("buzz") :
//   ((current % 3 === 0)) ? output.push("fizz") :
//   output.push(current);

//   return fizzbuzz(num, current + 1, output);
// }


console.log(fizzbuzz(16));
console.log(fizzbuzz(-16));
console.log(fizzbuzz("sixteen"));


// const fizzbuzz = (num) => {
//   const output = [];
//   let temp;

//   for (let i = 1; i <= num; i++) {
//     if ( i % 3 === 0 && i % 5 === 0) temp = 'fizzbuzz'
//     else if ( i % 3 === 0 ) temp = 'fizz'
//     else if ( i % 5 === 0) temp = 'buzz'
//     else temp = i;

//     output.push(temp);
//   };

//   return output;
// }

// // test cases:
// console.log(fizzbuzz(16)); // expected =>[1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]




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

  for (let i = 70; i <= num; i++) {
    temp = ( i%3 === 0 && i%5 === 0 && i%7 === 0) ? 'fizzbuzzbazz'
    : ( i%3 !== 0 && i%5 === 0 && i%7 === 0) ? 'buzzbazz'
    : ( i%3 === 0 && i%5 !== 0 && i%7 === 0) ? 'fizzbazz'
    : ( i%3 === 0 && i%5 === 0 && i%7 !== 0) ? 'fizzbuzz'
    : ( i%7 === 0) ? 'bazz'
    : ( i%3 === 0 ) ? 'fizz'
    : ( i%5 === 0) ? 'buzz'
    : i; 

    output.push(temp);
  };

  return output;
}

console.log(fizzbuzzbazz(105));
// -> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz', 11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'bazz', 'fizzbazz', 22]

module.exports = {fizzbuzz, fizzbuzzbazz};
