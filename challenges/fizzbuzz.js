/*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisble by 3 but not by 5,
"buzz" in place of numbers divisble by 5 but not by 3,
and "fizzbuzz" in place of numbers divisble by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

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




//---------------------------------original code
// create a recursive func; accepts a num; returns an array
    // function to sequentially push numbers to output array
    // conditionally push strings to output
        // if num to be pushed is divisible by 3 & 5 -> "fizzbuzz"
        // if div by only 5  -> "buzz"
        // if div by 3 -> "fizz"
    // recursive call to fizzbuzz passing in count incremented by 1

// const fizzbuzz = (num, count=1, output=[]) => {  
//     // basecase
//     if(count>num) return output;

//     // recursive cases
//     if (count%5 === 0 && count%3 === 0) output.push("fizzbuzz")
//     else if (count%5 === 0) output.push("buzz")
//     else if (count%3 === 0) output.push("fizz")
//     else output.push(count)

//     return fizzbuzz(num, count+1, output);
// };

// console.log(fizzbuzz(16));
/* -> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]
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
//---------------------------------take2





//---------------------------------original code
// create a func replicating functionality of fizzbuzz but instead using the following conditions
    // if div by 3, 5 & 7 -> "fizzbuzzbazz"
        // if div by 5 & 7 -> "buzzbazz"
        // if div by 3 & 7 -> "fizzbazz"
        // if div by 3 & 5 -> "fizzbuzz"
            // if div by 7 only-> "bazz"
            // if div by 5 only -> "buzz"
            // if div by 3 only -> "fizz"
// const fizzbuzzbazz = (num, count=1, output=[]) => {
//     // basecase
//     if(count>num) return output;

//     // recursive cases
//     if (count%7 === 0 && count%5 === 0 && count%3 === 0) output.push("fizzbuzzbazz")
//     else if (count%5 === 0 && count%7 === 0) output.push("buzzbazz")
//     else if (count%3 === 0 && count%7 === 0) output.push("fizzbazz")
//     else if (count%5 === 0 && count%3 === 0) output.push("fizzbuzz")
//     else if (count%7 === 0) output.push("bazz")
//     else if (count%5 === 0) output.push("buzz")
//     else if (count%3 === 0) output.push("fizz")
//     else output.push(count)

//     return fizzbuzzbazz(num, count+1, output);
// };

// console.log(fizzbuzzbazz(22));

// -> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz',
// 11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'bazz', 'fizzbazz', 22]

module.exports = {fizzbuzz, fizzbuzzbazz};
