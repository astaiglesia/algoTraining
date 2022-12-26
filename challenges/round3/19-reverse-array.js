/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

input: array
output: array
givens: 
- reverse in place
- 
approach: iterate and swap
- use dual pointers: left and right, init to first and last idx
- swap vals
- increment and decrement pointers
- continue while left < right
edges:
-invalid inputs
- handle subarrays?
- 
timespace:
- linear

*/

// ### DO NOT CREATE A NEW ARRAY or use REVERSE ARRAY METHOD

const reverseArray = array => {
  let leftIdx = 0, rightIdx = array.length - 1;

  while (leftIdx < rightIdx) {
    [array[leftIdx], array[rightIdx]] = [array[rightIdx], array[leftIdx]];
    leftIdx += 1;
    rightIdx -= 1;
  }

  return array;
}


// test cases
const test1 = [100, 200, 300, 400, 500]
console.log(reverseArray(test1)); // => [500, 400, 300, 200, 100]

/*
Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

const reverseSentence = sentence => {
  
};

module.exports = {reverseArray, reverseSentence};
