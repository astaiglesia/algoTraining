/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

// input: array of strings; return: longest common prefix among strings
// iterate through elements
// edge cases: no prefix

const longestCommonPrefix = (strs, index = 0, output = "") => {

  console.log(`current index is ${index} current char is ${strs[0][index]} current output is ${output}`);
  // ----- recursive case 
  // check char of ele 0 at index against matching index of all other elements
  // if char exists on .every element, concat with output
  const currentCheck = strs.every( current => {strs[0][index] === current[index]});
  
  console.log(currentCheck);
  
  if (currentCheck === true) {
    output.concat(strs[0][index]); 
    return longestCommonPrefix(strs, i + 1, output)
  } else {
    return output;
  }


  
};

// test case
console.log(longestCommonPrefix(["flower","flow","flight"])); // --> "fl"





module.exports = { longestCommonPrefix };
