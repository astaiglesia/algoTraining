// One Away
// There are three types of edits that can be performed on strings: 
// insert a character, remove a character, replace a character.
// given two strings, write a function to check if they are one edit (or zero edits) away

/**
 * 
input: str1, str2: string
output: boolean
givens: 
- function to determine if str1 is one edit away from becoming str2
- possible edits => 
  - insert a char - str1 is one less 
  - remove a char - str1 has one extra
  - replace a char - str1 has one different
- ie. are all characters are the same but 1

approach:
- check against edge cases
- maintain edit states
- maintain dual pointers
- iterate through strings (str1 v str2)
  - check ptr values against each other
  - if unequal, check against ptr + 1 cases (has extra, needs extra)
    - update edit state and toggle ptrs as necessary
  - return false if 
    - more than one extra char
    - 

edges:
- invalid inputs
timespace:
- linear time
- constant space
 * 
 * 
 */


const oneAway = (str1, str2) => {
  if (str1.length < str2.length - 1 
    ||str1.length > str2.length + 1) return false;
  if (str1 === str2) return true;

  let ptr1 = 0;
  let ptr2 = 0;
  let mulliganUsed = false;

  while (ptr1 < str1.length || ptr2 < str2.length) {
    if (str1[ptr1] !== str2[ptr2]) {
      if (mulliganUsed) return false
      else if (str1[ptr1] === str2[ptr2 + 1]) ptr2 += 1;
      else if (str1[ptr1 + 1] === str2[ptr2]) ptr1 += 1;
      else if (str1[ptr1 + 1] === str2[ptr2 + 1]) {
        ptr1 += 1;
        ptr2 += 1;
      }
      else return false;

      mulliganUsed = true;
    } 
    else {
      ptr1 += 1;
      ptr2 += 1;
    }
  }

  return true;
}



module.exports = oneAway;



// TEXTBOOK SOLUTION
var solution1 = function(string1, string2) {
  // insert a char for str1 -> remove a char for str2
  var checkOneMissing = function(first, second) {
    if (first.length !== second.length - 1) {
      return false;
    } else {
      var mulligan = false;
      var fP = 0; // first Pointer
      var sP = 0; // second Pointer
      while (fP < first.length) {
        if (first[fP] !== second[sP]) {
          if (mulligan) {
            return false;
          } else {
            mulligan = true;
            sP++; // second length is longer
          }
        } else {
          fP++;
          sP++;
        }
      }
      return true;
    }
  };

  var checkOneDiff = function(first, second) {
    if (first.length !== second.length) {
      return false;
    } else {
      var mulligan = false;
      var fP = 0; // first Pointer
      var sP = 0; // second Pointer
      while (fP < first.length) {
        if (first[fP] !== second[sP]) {
          if (mulligan) {
            return false; // more than one mismatch
          } else {
            mulligan = true; // use up mulligan
          }
        }
        fP++;
        sP++;
      }
      return true;
    }
  };
  // insert a char for str1 -> remove a char for str2
  // check one diff

  // console log checks
  // console.log(string1, string2, 'checkMiss', checkOneMissing(string1, string2));
  // console.log(string2, string1, 'checkMiss', checkOneMissing(string2, string1));
  // console.log(string1, string2, 'checkDiff', checkOneDiff(string1, string2));

  return checkOneMissing(string1, string2) || checkOneMissing(string2, string1) || checkOneDiff(string1, string2);
};


// Test
// console.log(oneAway('pale', 'ple'), true);
// console.log(oneAway('pales', 'pale'), true);
// console.log(oneAway('pale', 'bale'), true);
// console.log(oneAway('pale', 'bake'), false);