/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.
*/
// ### Assume input arrays contain no duplicates, may contain nums and/or strings
/*
input: ...args[]: args array of enumTyped arrays [num, string]
output: [num, string] || string
given:
- evaluated array contains common elements
- null set returns a string
approach: 
- brute force iteration - quadratic time
- set up a frequency table  - linear time
- iterate through each array and populate the table
- iterate through entries and push keys whose values equal length of args
edges:
- invalid inputs
- no common elements
*/

const commonElements = (...args) => {
  const freqTable = {};
  
  // populate the table
  for (const arg of args) {
    for (const ele of arg) {
      freqTable[ele] ? freqTable[ele][1] += 1 : freqTable[ele] = [ele, 1]
    }
  }

  // evaluate the table
  const output = [];
  Object.entries(freqTable).forEach(([key, [ele, freq]]) => {
    freq === args.length && output.push(ele);
  })

  return output.length ? output : 'Nothing in Common!'
}


// test cases
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) // -> [2, 3, 2000, 'dog']



/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized = (...args) => {
  const freqTable = {};
  
  // populate the table
  for (const arg of args) {
    for (const ele of arg) {
      freqTable[ele] ? freqTable[ele][1] += 1 : freqTable[ele] = [ele, 1]
    }
  }

  // evaluate the table
  const output = [];
  Object.entries(freqTable).forEach(([key, [ele, freq]]) => {
    freq === args.length && output.push(ele);
  })

  return output.length ? output : 'Nothing in Common!'
}

// test cases
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElementsOptimized(arr1, arr2, arr3) // -> [2, 3, 2000, 'dog']

module.exports = {commonElements, commonElementsOptimized} 
