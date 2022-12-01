/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

/* |===> fastCache <===|
input: callback: function
output: function
givens: 
- function creates a cache object 
  - cache tracks calls to the returned function 
  - each input to the returned func is associated with its output
- subsequent calls with a cached arg should return the cached result
approach: utilizes closure to persist the cache
- set up an object cache
- inner func should check cache before evaluating
  - if property exists, return value
  - else evaluate and store to cache
edges:  
- invalid inputs
time: constant
space: linear
*/ 

const fastCache = callback => {
  const cache = {};

  return num => {
    if (!cache[num]) cache[num] = callback(num);
    return cache[num]
  }
}

// test cases:
const square = num => num*num;
const squareCache = fastCache(square);

// console.log(squareCache(5));    // expect to be 25
// console.log(squareCache(7));    // expect to be 49
// console.log(squareCache(100));  // expect to be 10000
// console.log(squareCache(5));    // expect to be cached value of 25
// console.log(squareCache(7));    // expect to be cached value of 49



/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

// Assumption: multiple args are evaluated to an array for return
// assumption: inputs are all numbers
// argument to returned function should be spread
// - inner func should iterate through the spread args array

const fastCacheAdvanced = callback => {
  const cache = {};
  
  return (...args) => {
    const output = [];
    
    // const argPusher = num => {
    //   // if (cache[num]) console.log('cache hit for arg of', num)
    //   if (!cache[num]) cache[num] = callback(num);
    //   output.push(cache[num])
    // }

    for (const arg of args) {
      // typecheck the arg
      // handle primitive
      if (typeof(arg) === 'number') argPusher(arg)

      // handle array
      // iterate thru the array and 
      else if (Array.isArray(arg)) for (const ele of arg) argPusher(ele)

      // handle object
      else if (typeof(arg) === 'object' && arg !== null) for (const prop in arg) argPusher(arg[prop])
    }
    
    return output.length === 1 ? output[0] : output;
  }
}




// test cases
const advancedSquareCache = fastCacheAdvanced(square);

console.log(advancedSquareCache(5));               // expect to be 25
console.log(advancedSquareCache(5));               // expect to be cached val of 25
console.log(advancedSquareCache([5, 7, 10]));           // expect to be *25, 49, 100
console.log(advancedSquareCache([3, 10], 11, 15));      // expect to be 
const objArg = {
  first: 34,
  second: 10,
  third: 8
}
console.log(advancedSquareCache(objArg, 13, 15));      // expect to be 



module.exports = {fastCache, fastCacheAdvanced};






//---------------------------------take2
// input: function: callback
// output: function: innerFunc
// givens: fastCache to create an object tracking calls to the returned function (inputs are keys to evalResult)
// - if input exists as key return the stored result
// approach: use closure to cache data
// - create a cache object to store eval results and bind to function using closure
// - returned func should check cache for input arg of innerFunc
// - if input exists return the stored value
// - else invoke callback, store to cache and return the eval result
// edge cases: 
// - invalid input (assume valid otherwise provide data validation)

// const fastCache = (callback, cache = {}) => {
//   return (inputArg) => {
//     if (!cache[inputArg]) cache[inputArg] = callback(inputArg);

//     return cache[inputArg];
//   }
// }

// time: O(1) -> single input on eval, constant lookup time in cache
// space: O(1) -> single object

// test cases:
// const square = num => num*num,


//---------------------------------original take

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
// const fastCache = (callback, cache = {}) => (numInput, temp = cache[numInput]) => !temp ? temp = callback(numInput) : temp;


// test cases:
// const square = num => num*num;

// const squareCache = fastCache(square);

// console.log(squareCache(5)); 
// console.log(squareCache(12));
// console.log(squareCache(175));
// console.log(squareCache(175));


/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

/*---------------------------------take2
@params callback: function
@returns function

given: returned func needs to handle an array or object input + arbitrary number of arguments
        fastCacheAdvanced tracks calls to the returned function -> input: output
        subsequent calls with a given input accesses the cache
approach: utilize closure on a cache object with returned func
  use spread operator 
  iterate through args array
  qualify each ele if object or array -> use recursion
edges:

*/

// const fastCacheAdvanced = (callback, cache = {}) => {
//   const cacheMaker = (...args) => {
//     args.forEach(ele => {
//       if ((typeof ele === "object" && typeof ele !== null) || )

//     })

//   }

//   return cacheMaker;
// }














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
     