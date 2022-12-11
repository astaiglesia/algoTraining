/*

Given a string, find the length of the longest substring without repeating characters.
Just return the length of the substring, not the substring itself.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The longest substring is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The longest substring is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The longest substring is "wke", with the length of 3.
Note that the longest substring must actually be a substring, as "pwke" is a
subsequence and not a substring.

Example 4:
Input: ""
Output: 0
Explanation: an empty string has length 0

Hint: think about the largest valid "window" of a substring without repeating
characters. How do we keep track of this "window"?

input: string
output: number
givens:
- return the length of the longest substring
apprach:  iterate through the string
- track the currentLong substring
- on each pass
  - check if the current char matches the end of the string 
    - if true reinitialize tracker variable, continue
    - else update tracker
- return the length
edges:
- empty string  => 0
- single char 
- handle whitespace?
timespace: m*n time + linear space 

*/



const substringNonrepeating = string => {
  let currentLong = [];
  let maxLong = 0;

  for (const char of string) {
    if (currentLong.includes(char)) {
      currentLong.length > maxLong && (maxLong = currentLong.length);

      const newStartIdx = currentLong.indexOf(char) + 1;
      currentLong = currentLong.slice(newStartIdx);
    }
    currentLong.push(char);
  }
  
  return  currentLong.length > maxLong ? currentLong.length : maxLong;
};

// testcases
// console.log(substringNonrepeating('kekekekeke'))      //.toBe(2);
// console.log(substringNonrepeating('lolk'))                     // .toBe(3);
// console.log(substringNonrepeating('lolkekeke'))          //.toBe(4);
// console.log(substringNonrepeating('abcabcbb'))          // .toBe(3);
// console.log(substringNonrepeating('pwwkew'))           // .toBe(3);


module.exports = {substringNonrepeating};
