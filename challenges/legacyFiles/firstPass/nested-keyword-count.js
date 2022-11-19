/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/
// func accepts an array and a string; returns a number
// iterate through array and count how many times the string matches the element
// --- increment match
// --- ### no string, no array, invalid input, empty array/no matching keyword
// create counter
iterate
if el = keyword, increment counter


// const keywordCount = (array, keyword, element = 0, match = 0) => {
//     if (array[element] === 'undefined') return keywordCount
//     if (array.length === element) return match
    
//     if (array[element] === keyword) match +=1
//     if (Array.isArray(array[element])) keywordCount(array[element], keyword, 0, match)
  
//     return keywordCount(array, keyword, element + 1, match)
//   };
  
const keywordCount = (array, keyword, flatArr = array.flat(Infinity), match = 0) => {
  if (flatArr.length === 0) return match
  
  if (flatArr[0] === keyword) match +=1

  return keywordCount(array, keyword, flatArr.slice(1), match)
};


// test cases
console.log(keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi')); // -> 2 because 'hi' appears twice
console.log(keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x')); // -> 3
console.log(keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol')); // -> 0


/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/
// implement a frequency table where element is the key with an initial value of 1
// -- subsequent occurences will increment increment the value
// 
const keywordMode = (array, storage = {}) => {


  for (const ele of array) {
    if (Array.isArray(storage[ele])) keywordMode(array, storage)
    else if (!storage[ele]) storage[ele] = 1
    else storage[ele] += 1
  }
  
};

console.log(keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars'])); // -> ['bat', 'cars']
console.log(keywordMode([['ace', 'cool'], ['hi'], 'cool'])); // -> ['cool']

module.exports = {keywordCount, keywordMode};
