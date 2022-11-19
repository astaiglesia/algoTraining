/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/




// test cases:
// const square = num => num*num;
// const squareCache = fastCache(square);





/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/







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
     