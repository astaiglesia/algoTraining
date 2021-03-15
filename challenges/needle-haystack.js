/* 
Determine whether a target substring can be found within a string! 
No regex allowed! No string.prototype.includes or string.prototype.indexOf!

Your solution should have O(n * m) time-complexity where:
n is equal to the given string length
m is equal to the target substring length

I.e. in 'xztzcatbfbbq' find 'cat' 

Input: 'xztzcatbfbbq', 'cat'
Output: true

Input: 'finding a needle in a haystack', 'lein'
Output: false
*/

// input: string;  output: boolean
// iterate through the 1st string arg to find the first letter of the 2nd arg
// split string to account for spaces
// -- if found check if the sequential letters match
// ----- if true, return true : false
// ### order and spaces matter

// edge cases: invalid inputs (non-strings)
const needleInHaystack = (string, substring, strSplit = string.split(''), subSplit = substring.split('')) => {
  // base cases returns true if all chars in the substring are located 
  // returns false if substring is not fully sliced but string has been
  if (subSplit.length === 0) return true
  if (strSplit.length === 0 && subSplit.length > 0) return false
  
  // iterate through str to compare 1st sub char -> if matching recursive call slicing both strings
  if (subSplit[0] === strSplit[0]) return needleInHaystack(strSplit.slice(1), subSplit.slice(1))
  // else recursive call only slicing string
  return needleInHaystack(string.slice(1), substring)
};

// testcase:
const test2 = 'finding a needle in a haystack';
const find2 = 'lein';

console.log(test2[7]); // expect to 8th char to be a space

console.log(needleInHaystack('xztzcatbfbbq', 'cat')); // true
console.log(needleInHaystack(test2, find2)); // false <--- why is this true




/*
Extension: Now imagine the target substring and string both might have underscores '_'.
Treat '_'s as wildcards, or blank pieces in Scrabble - i.e., they can be any letter.

Input: '_ello_orld', 'helloworl_'
Output: true

Input: 'montana', '__o__'
Output: false
*/

const needleInHaystackWithWildcards = (string, substring) => {

};

module.exports = { needleInHaystack, needleInHaystackWithWildcards };