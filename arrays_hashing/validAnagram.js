/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 *    typically using all the original letters exactly once.
 * 
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * givens: 
 - evaluates to true if t is an anagram of s
 - anagram is a string that can be made with every other char of sting
    - use each only once
 - approach: frequency table
 - iterate thru s to populate the table
 - iterate thru t and check against the freq table
 - if table is empty, return true
 - else return of false
 - edges: 
 - invalid inputs
 - uneven lengths
 - timespace: 
 - linear time (m+n) : pass thru each element in each list - 
  - linear space: freq table

 */

  const isAnagram = function(s, t) {
    if (typeof s !== 'string' || typeof t !== 'string') return false
    
    const freqTable = {};
    for (const char of s) {
        freqTable[char] = (!freqTable[char]) ? 1 : freqTable[char] + 1
    }

    for (const char of t) {
        if (freqTable[char]) freqTable[char] -= 1 
        else return false
        freqTable[char] === 0 && delete freqTable[char]
    }

    return Object.entries(freqTable).length ? false : true
}



module.exports = { isAnagram }
