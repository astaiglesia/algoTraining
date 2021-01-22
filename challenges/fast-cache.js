/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/


// function accepts a callback; returns a function <--- closure?
//  func to create a persisting object/cache and return an inner func definition
//    inner func to populate cache with key-value pairs of [innerFunc's arg]:eval result of invoking callback
//      subsequent calls to a previously evaluated arg should access the asssociated eval result within cache
//      conditional check prior to invoking 
// create test case
const fastCache = (func, cache = {}) => {
  return (input) => {
    // console.log(cache);
    return (cache[input]) ? cache[input]
        :  (cache[input] = func(input), cache[input])
  }
};

// test cases
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

// refactor code to handle array, object and unknown number of args
//   use rest parameter and iterate through the args array
const fastCacheAdvanced = func => {
  return function spreader (...input, count) {
    // console.log(cache);

    return () // <--- base case
        :  (cache[input[count]]) ? cache[input[count]]
        :  (cache[input[count]] = func(input), cache[input])
        :  spreader(...input, count + 1)
    }
};

// test cases
const square = num => num*num;

const squareCache = fastCache(square);

console.log(squareCache(5));
console.log(squareCache(12));
console.log(squareCache(175));
console.log(squareCache(175));
     

module.exports = {fastCache, fastCacheAdvanced};