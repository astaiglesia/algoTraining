// URLify
// Write a method to replace all spaces in a string with '%20'. 
// You may assume that the string has sufficient space at the end to hold the addittional characters.
// You are given the true length of the string

/*
input: str: string, length: number
output: string
givens:
- replace spaces with '%20'
approach:
- use string.replaceAll() method or replace with a regex and a global flag
  (#replaceAll doesn't mutate input, returns a new string)
  (#generally haven't had much need to implement regex, plus i've read that complicated regex patterns could adversely affect the time complexity)
- manually iterate and check if each character is a space and splice the %20
edges:
- can we trust the inputs (typechecking if needed)
timespace:
- linear time
- linear space
*/ 

const urlify = str => str.replaceAll(' ', '%20');


module.exports = urlify;


/* TEXT SOLUTIONS */
var solution1 = function(str, length) {
  // have a pointer to check from start to end
  var strArr = str.split('');
  var pointer = 0;
  while (pointer < str.length) {
    if (strArr[pointer] === ' ') {
      // *** needs more work here, a little wierd
      // not handling trailing spaces properly
      for (var i = str.length - 1; i > pointer + 3; i--) {
        strArr[i] = str[i - 2];
      }
      strArr[pointer] = '%';
      strArr[pointer+1] = '2';
      strArr[pointer+2] = '0';
      console.log(strArr, strArr.length);
    } 
    pointer++;
  }
  // if character is a space, move remainder chars by two
  // replace following three chars with '%20'
  return strArr.join('');
};
function solution2(str, len) {
  let s = "";
  let totalSpaces = str.length - len;
  let frontSpaces = 0;
  let flag = false;
  for (let i = 0; i < str.length; i++) {
    if (flag === false) {
      if (str[i] === " ") frontSpaces++;
      else flag = true;
    }
    if (flag === true && i < str.length - (totalSpaces - frontSpaces)) {
      if (str[i] === " ") s += "%20";
      else s += str[i];
    }
  }

  return s;
}
const solution3 = (str) => {
  const convertToArray = str.trim().split('');
  for(let i in convertToArray) {
    if(convertToArray[i] === " ") {
     convertToArray[i] = "%20"
    }
  }
  return convertToArray.join('');
}

