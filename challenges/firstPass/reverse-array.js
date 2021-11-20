/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

*/

// func accepts an array; returns a mutated array
// modify array in place
// --- push ele at pointer (initialized to array.length -1)
// --- splice the array to remove the pointer element(duplicate)
// --- recursive call with pointer decremented by 1
// --- terminate recursion when pointer less than 0
// --- return array
// edge cases -> ???
// ### DO NOT CREATE A NEW ARRAY or REVERSE ARRAY METHOD

const reverseArray = (array, pointer = array.length-1) => {
  if (pointer < 0) return array
  array.push(array[pointer]);                    
  array.splice(pointer, 1);
  return reverseArray(array, pointer-1)
};


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
