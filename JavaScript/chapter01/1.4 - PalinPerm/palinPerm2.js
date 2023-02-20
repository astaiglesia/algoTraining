// Palindrome Permutation
// given a string, write a function to check if it is a permutation of a Palindrome
// palindrome is a word or phrase that's the same forwards and backwards.
// a permutationis a rearrangement of letters 
// the palindrome isn't limited to dictionary words
// ignore casing and non-letter characters


function palinPerm(s) {
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

// TESTS
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
