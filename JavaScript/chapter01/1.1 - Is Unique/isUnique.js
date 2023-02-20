/** Implement an algorithm to determine if a string has all unique characters
 * 
 * extension: 
 * do not use additional data structures
 * 
 * @param str: string 
 * @returns boolean
 * 
 * givens:
 * - 
 * approach:
 * - create a set to track chars in string 
 * 
 * extension:
 * - (assume all alpha) - split and sort the string
 * - iterate and track the previous and current
 * 
 * 
 * edges:
 * - are all chars alpha?
 * - invalid inputs
 * - handle spaces & numbers?
 * 
 * timespace:
 * linear time 
 * linear / constant space 
 */

const everyCharUnique = string => {
  const sortedChars = string.split('').sort();
  let prev;
  
  for (const char of sortedChars) {
    if (char === prev) return false
    prev = char;
  }

  return true;
}



/* TESTS */
let tester = 'abdip';
let expected = true;
let evaluated = everyCharUnique(tester);
console.log(`expect evaluated result of ${evaluated} to equal ${expected} => ${expected === evaluated ? 'PASS!' : 'FAIL =*/'}`);

tester = 'hello';
expected = false;
evaluated = everyCharUnique(tester);
console.log(`expect evaluated result of ${evaluated} to equal ${expected} => ${expected === evaluated ? 'PASS!' : 'FAIL =*/'}`);



/* --- textbook solutions --- */ 
// O(n^2) approach, no additional data structures used
// for each character, check remaining characters for duplicates
var solution1 = function(string) {
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false; // if match, return false
      }
    }
  }
  return true; // if no match, return true
};
// ?? bit manipulation? left shift operator is used...?
const solution2 = (str, indexOffset = 'a'.charCodeAt()) => {
    let counterTable = Number();
    for(let index of [...str].map(c => c.charCodeAt() - indexOffset)) {
        const mask = 1 << index;
        if(counterTable & mask)
            return false;
        counterTable |= mask;
    }
    return true;
};
// frequency table
function solution3(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] && obj[str[i]] >= 1) {
      return false;
    } else {
      obj[str[i]] = 1;
    }
  }
  return true;
};


// console.log(everyCharUnique('abcd'), 'true');
// console.log(everyCharUnique('abccd'), 'false');
// console.log(everyCharUnique('bhjjb'), 'false');
// console.log(everyCharUnique('mdjq'), 'true');

module.exports = { everyCharUnique };