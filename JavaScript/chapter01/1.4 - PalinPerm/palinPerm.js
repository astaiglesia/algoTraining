/**Palindrome Permutation
 * given a string, write a function to check if it is a permutation of a Palindrome
 * palindrome is a word or phrase that's the same forwards and backwards.
 * a permutationis a rearrangement of letters 
 * the palindrome isn't limited to dictionary words
 * ignore casing and non-letter characters
 */
/*
input: str: string
output: Boolean
givens:
- find if a string is a permutation of a palindrome
  - i.e. if any combination of the string chars is a palindrome
- palindrome is the same forward and backwards
  - i.e. chars should be paired off (even number)
  - only a single char may be odd #
- ignore casing
- ignore spaces
approach:
- sanitize the string => remove spaces and lowercase all chars (n)
- create a freqTable (n)
- iterate through the table values (n)
- return false if more than one is odd

- alternate: split and sort, iterate to make sure each char is paired off (with single failure allowance)
  - log linear for sorting
edges:
- invalid inputs
- handle/ignore non-alpha chars?
timespace:
- linear time
*/


const isPalindromePermutation = str => {
  const sanitized = str.toLowerCase().replaceAll(' ', '');
  const freqTable = {};
  let tableHasOddValue = false;
  
  for (const char of sanitized) {
    !freqTable[char] ? freqTable[char] = 1 : freqTable[char] += 1;
  }
  
  const freqValues = Object.values(freqTable);
  for (const val of freqValues) {
    if (val % 2 !== 0) {
      if (tableHasOddValue) return false;
      tableHasOddValue = true;
    }
  }

  return true;
}


module.exports = isPalindromePermutation;





// TEXT SOLUTIONS
function solution1(s) {
  const sanitized = s.toUpperCase().split(" ").join("");
  const freq = new Map();
  for (let i = 0; i < sanitized.length; i++) {
    const char = sanitized.charAt(i);
    const prevFreq = freq.get(char) || 0;
    freq.set(char, prevFreq + 1);
  }
  let oddCount = 0;
  for (let char of freq) {
    if (char[1] % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount < 2;
}
var solution2 = function(string) {
  // create object literal to store charcount
  var chars = {};
  var currChar;
  var mulligan = false;
  var isPerm = true;
  // pump characters in, spaces not counted, all lowercase
  string.split('').forEach((char) => {
    if (char !== ' ') {
      currChar = char.toLowerCase();
      if (chars[currChar] === undefined) {
        chars[currChar] = 0;
      }
      chars[currChar]++;
    }
  });
  // check that all chars are even count, except for one exception
  Object.keys(chars).forEach((char) => {
    if (chars[char] % 2 > 0) {
    // if more than one exception, return false
      if (mulligan) {
        isPerm = false; // return in a forEach statment doesn't flow out of function scope
      } else {
        mulligan = true;
      }
    }
  });
  // if not return true
  return isPerm;
};

// TESTS
// console.log(palinPerm('Tact Coa'), 'true');
// console.log(palinPerm('Tact boa'), 'false');