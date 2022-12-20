/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

input: arr: [strings, []], target: string
output: targetCounter: num
givens:
- input arr can have arbitrarily nested arrays
- counter tracks the number of times target is hit

approach: nested iteration or recursion
- base case: terminate on empty arrays
- visit each element
  - if array, recursive call
  - if string, validate against target and increment counter if necessary
- return counter 

edges: 
- invalid inputs
- handle empty string target
- handle nested arrays

timespace:
- linear time
- linear space 

*/


const keywordCount = (arr, target) => {
  let hitCount = 0

  const hitCounter = (arr, target,  currentVal = arr[0]) => {
    if (!arr.length) return                                           // terminate recursion on empty arrays
    if (Array.isArray(currentVal)) hitCounter(currentVal, target)     // check the current value: recursive call on subarrays
    if (typeof currentVal === 'string') {                             // check strings against the target and increment hitCount on hits  
      if (currentVal === target) {
        hitCount += 1
      }
    }

    return hitCounter(arr.slice(1), target)                           // recursive tail call with sliced array
  }

  hitCounter(arr, target)
  
  return hitCount
}



// // test cases
// console.log(keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi')); // -> 2 because 'hi' appears twice
// console.log(keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x')); // -> 3
// console.log(keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol')); // -> 0


/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

approach:
utilize a freqTable in outer scope
inner recursive function to populate the table
- string: frequency
analyze the table entries
return highest frequencies

edges: 
invalid inputs

timespace
linear time
linear space for the table, stack

*/

const keywordMode = words => {
  const freqTable = {}
  const tableSetter = (words, currentVal = words[0]) => {
    if (!words.length) return;                                         
    if (Array.isArray(currentVal)) tableSetter(currentVal);            
    (typeof currentVal === 'string') && (freqTable[currentVal] ? freqTable[currentVal] += 1 : freqTable[currentVal] = 1);
    
    return tableSetter(words.slice(1));                         
  }
  tableSetter(words)

  const tableEntries = Object.entries(freqTable)
  
  let output = []
  let maxFreq = 0;
  for (const freq of tableEntries) {
    if (freq[1] === maxFreq && !output.includes(freq[0])) output.push(freq[0])
    if (freq[1] > maxFreq) {
      output = [freq[0]]
      maxFreq = freq[1]
    }
  }

  return output.sort()
}

console.log(keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars'])); // -> ['bat', 'cars']
console.log(keywordMode([['ace', 'cool'], ['hi'], 'cool'])); // -> ['cool']
let arr = ['y', ['hi'], [['bright', ['x']], ['z', 'x']], 'hi', [['y']], 'light']
console.log(keywordMode(arr)); // -> ['hi', 'x', 'y']

module.exports = {keywordCount, keywordMode};
