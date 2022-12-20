
/* 

Write a function to find the largest number in an arbitrarily nested array. 
The function should return the largest number contained anywhere in the array, 
regardless of how deeply nested it is.
Assume all elements in each array are numbers.

Ex:

const arrFlat = [1, 3, 10, 6];
nestedArrMax(arrFlat);
-> 10

const arrNested = [1, [3, [10], 6]];
nestedArrMax(arrNested);
-> 10

input: [nums, []]
output: num
givens:
- input is an arbitrarily nested array
- returns the largest number within 
approach: nested iteration or recursion (cleaner)
- track largestNum
- handle elements 
  - if num, check against largets num, reassign as necessary
    - pass in a sliced array on recursive calls
  - if array, recursive call passing element
edges:
- invalid inputs
- handle empty arrays
timespace:
- linear time - need to check each element
- linear space - frames on the call stack - TCO
*/


const nestedArrMax = input => {
  let largestNum = input[0]
  const nestedReducer = (input, current = input[0]) => !input.length
  ? undefined
  : (
      Array.isArray(current) && nestedReducer(current),
      current > largestNum && (largestNum = current),
      nestedReducer(input.slice(1))    
    )

  return (nestedReducer(input), largestNum)
}



// test cases
const arrFlat = [1, 3, 10, 6];
console.log(nestedArrMax(arrFlat));
// -> 10

let arrNested = [1, [3, [10], 6]];
console.log('+++++++expect', nestedArrMax(arrNested), 'to be 10');
    arrNested = [1, [3, [10], 6], 15];
console.log('+++++++expect', nestedArrMax(arrNested), 'to be 15');
//-> 10


/*

Extension:
Write a function to find the largest number in a nested array, up to and including a given level. 
Return the largest number without going deeper in the nested array than the specified level.
Assume all elements in each array are numbers.

The original array is considered to be at depth 1, any inner array is depth 2, etc.

Ex:

const arrNested = [1, [3, [10], 6]];
nestedArrMaxLevel(arrNested, 1);
-> 1

nestedArrMaxLevel(arrNested, 2);
-> 6

nestedArrMaxLevel(arrNested, 3);
-> 10

edit above code to maintain level on recursive calls
- decrement level on recursive calls on nested array args
  - lock out recursive logic if level is at 1 (don't drill deeper)
- edit largestNum reassignment logic to only trigger for numTypes
*/


const nestedArrMaxLevel = (input, level) => {
  let largestNum = input[0]
  const nestedMaxLevelReducer = (input, level, current = input[0]) => !input.length
  ? undefined
  : (
    level > 1 && Array.isArray(current) && nestedMaxLevelReducer(current, level - 1),
    typeof current === 'number' && current > largestNum && (largestNum = current),
    nestedMaxLevelReducer(input.slice(1), level)    
  )

  return (nestedMaxLevelReducer(input, level), largestNum)
};



// testcases
arrNested = [1, [3, [10], 6]];
console.log('+++TeST expect', nestedArrMaxLevel(arrNested, 1), 'to be 1');
console.log('+++TeST expect', nestedArrMaxLevel(arrNested, 2), 'to be 6');
console.log('+++TeST expect', nestedArrMaxLevel(arrNested, 3), 'to be 10');



module.exports = {nestedArrMax, nestedArrMaxLevel};
