/**
 * Given a phrase, count the occurrences of each word in that phrase.

For the purposes of this exercise you can expect that a word will always be one of:

A number composed of one or more ASCII digits (ie "0" or "1234") OR
A simple word composed of one or more ASCII letters (ie "a" or "they") OR
A contraction of two simple words joined by a single apostrophe (ie "it's" or "they're")
When counting words you can assume the following rules:

The count is case insensitive (ie "You", "you", and "YOU" are 3 uses of the same word)
The count is unordered; the tests will ignore how words and counts are ordered
Other than the apostrophe in a contraction all forms of punctuation are ignored
The words can be separated by any form of whitespace (ie "\t", "\n", " ")
For example, for the phrase "That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled. the count would be:

that's: 1
the: 2
password: 2
123: 1
cried: 1
special: 1
agent: 1
so: 1
i: 1
fled: 1
 */

/*
@params inputString: string, default cache: object
@returns object
givens:
  valid words: 
    - consecutive number(s)
    - consecutive letters
    - contractions ()
  assumptions:
    - case insensitve
    - count is unordered
    - ignore punctuation except apostrophes in contractions
    - words are separated by any whitespace - i.e. -> " ", \t, \n

approach: 
  create a frequency table
  sanitize the input string:
    - send to lowercase()
    - remove punctuation with regex and replace
    - split string at whitespacing
  iterate and populate cache

edges: invalid input -> assume valid; 
- handle leading and trailing apostrophes (not part of a contraction)
- handle comma separated
- multiple spaces
- multiple separators
*/

const countWords = (inputString) => {
  const splitRegex = /[\s\t\n ,]/,
        leadPunc = /^[^a-z0-9]/,
        trailingPunc = /[^a-z0-9]+$/;
  const sanitized = inputString.toLowerCase()
                               .split(splitRegex)
                               .map(substring => substring.replace(leadPunc, '').replace(trailingPunc, ''))
                               .reduce((wordlist, word) => (word.length && wordlist.push(word), wordlist), []);

  return sanitized.reduce((table, word) => (!table[word] ? table[word] = 1 : table[word] += 1, table), {});
}

console.log(countWords(`That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled.`))
console.log(countWords('one,two,three'))
console.log(countWords(' multiple   whitespaces'))
console.log(countWords(",\n,one,\n ,two \n 'three'"))
