/*
- write a randomNumberArray function that returns a Promise with an array of random numbers with a length equal to the arraySize argument provided.

- The random numbers should be generated from the random number generator provided

input: arraySize: number
output: evaluates to a Promise: number[]
givens: 
- array size 
approach:
- initialize an empty array
- populate array with promises to argument size length
- Promise.all the array 
  - method takes an iterable of promises as input and returns a single promise
  - the returned promise fulfills with an array of fulfillment vals when all of the input's promises are fulfilled
  - rejects if any of the input promises are rejected
- console.log the promise fulfillment vals

edges:
- invalid input
timespace:
- linear time and space based on the size of the input argument
*/ 


function getRandomNumber() {
  const min = 1,
        max = 100,
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return Promise.resolve(randomNumber);
}

function randomNumberArray(arraySize) {
  const randomNumbers = [];

  // creates an iterable of Promises
  let i = 0;
  while (i < arraySize) {
    randomNumbers.push(getRandomNumber());
    i++;
  }

  // accepts and aggregates an iterable of Promises into a single Promise that fulfills with an array of fulfillment values for each of the input Promises
  return Promise.all(randomNumbers)
    .then(data => console.log(`expect`, data, `to be an array of fulfillment values with length ${arraySize}`));
}


let tester = 3;
let evaluated = randomNumberArray(tester);
console.log(`expect evaluated result of`, evaluated, ` to be an unfulfilled Promise with a fulfillment payload of array of random numbers with a length of ${tester}`);