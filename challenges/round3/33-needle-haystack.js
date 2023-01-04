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

/**
 * input: superstring: string(n), target: string(m)
 * output: boolean
 * givens:
 * - function should determine if superstring contains target 
 * - no regex
 * - no includes or indexOf
 * - solve in n * m complexity
 * approach:
 * iterate through superstring (n)
 * - check for charAt(0) of target
 * - if hit then check for matches at idx 1...2...3...  (m)
 * - else continue on any misses (reset inner loop)
 * edges:
 * timespace: linear time... n determines the number of operations
 *                            m runs in parallel
 *            constant space
 */

const needleInHaystack = (superstring, target) => {
  let targetIdx = 0
  for (const char of superstring){
    targetIdx = (char === target[targetIdx]) ? targetIdx + 1 : 0
    if (!target[targetIdx]) return true
  }
  
  return false
}

// testcase:
const test2 = 'finding a needle in a haystack';
const find2 = 'lein';
console.log(needleInHaystack('xztzcatbfbbq', 'cat')); // true
console.log(needleInHaystack(test2, find2)); // false




/*
Extension: Now imagine the target substring and string both might have underscores '_'.
Treat '_'s as wildcards, or blank pieces in Scrabble - i.e., they can be any letter.

Input: '_ello_orld', 'helloworl_'
Output: true

Input: 'montana', '__o__'
Output: false

approach:
- modify the above to check against either arg is a wildcard... if so treat as a hit

*/

const needleInHaystackWithWildcards = (superstring, target) => {
  let targetIdx = 0
  for (const char of superstring){
    targetIdx = (
      char === target[targetIdx] 
      || char === '_' 
      || target[targetIdx] === '_'
    ) ? targetIdx + 1 : 0
    if (!target[targetIdx]) return true
  }
  
  return false
}

module.exports = { needleInHaystack, needleInHaystackWithWildcards };