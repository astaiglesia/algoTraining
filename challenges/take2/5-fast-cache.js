/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

/* |===> Solution <===|
  input: function; inner func accepts a number
  output: function 
  approach: use closure to track calls and evaluated results 
  	. create a cache object to store results for direct lookups
    . key is the input, eval result is the value
    . calls to the inner func to conditionally return stored eval results if they exist
    . else eval the result and store to cache before returning
    .
  edges: invalid input (assume valid - diff types are handled in extension)
  time: O(1) -> at worst this is a function call with a single input
  refactored time:
*/

// const fastCache = (callback, cache = {}) => {
//   return (numberInput) => { 
//     if (!cache[numberInput]) cache[numberInput] = `eval result has been stored as ${callback(numberInput)}`
//     return cache[numberInput]
//   }
// };

const fastCache = (callback, cache = {}) => (numInput, temp = cache[numInput]) => !temp ? temp = callback(numInput) : temp;


// test cases:
const square = num => num*num;

const squareCache = fastCache(square);

console.log(squareCache(5)); 
console.log(squareCache(12));
console.log(squareCache(175));
console.log(squareCache(175));


/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

/* |===> Solution <===|
  input: function; inner func accepts any
  output: function 
  approach: use closure to track calls and evaluated results 
  	. create a cache object to store results for direct lookups
    . key is the input, eval result is the value
    . calls to the inner func to conditionally return stored eval results if they exist
    . else eval the result and store to cache before returning
    .
  edges: invalid input (assume valid)
  time: O(1) -> at worst this is a function call with a single input
  refactored time:
*/



// test cases
// const square = num => num*num;

// const squareCache = fastCache(square);

// console.log(squareCache(5));
// console.log(squareCache(12));
// console.log(squareCache(175));
// console.log(squareCache(175));
     

// module.exports = {fastCache, fastCacheAdvanced};