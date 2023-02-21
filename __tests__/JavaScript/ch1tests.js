// import files to test
// create describe block for grouping unit test assertions
// create assertions

const { urlify } = require('../../JavaScript/chapter01/1.3 - URLify/urlify.js');
const { isPalindromePermutation } = require('../../JavaScript/chapter01/1.4 - PalinPerm/palinPerm')
const oneAway = require('../../JavaScript/chapter01/1.5 - OneAway/oneAway.js');

xdescribe('testing urlify logic', () => {
  let tester, length, expected;

  it('urlify should handle no spaces', () => {
    tester = 'hello';
    length = 5;
    expected = 'hello';
    expect(urlify(tester, length)).toEqual(expected);
  })
  it('urlify should handle single space', () => {
    tester = 'hello world';
    length = 11;
    expected = 'hello%20world';
    expect(urlify(tester, length)).toEqual(expected);
  })
  it('urlify should handle multiple spaces', () => {
    tester = 'game of thrones prequel';
    length = 23;
    expected = 'game%20of%20thrones%20prequel';
    expect(urlify(tester, length)).toEqual(expected);
  })
})

xdescribe('testing string if its a permutation of a palindrome', () => {
  let tester, expected;

  it('should handle empty strings', () => {
    tester = '';
    expected = true;

    expect(isPalindromePermutation(tester)).toEqual(expected);
  })
  it('should handle single char strings', () => {
    tester = 'R  ';
    expected = true;

    expect(isPalindromePermutation(tester)).toEqual(expected);
  })
  it('should handle strings that are palindromes', () => {
    tester = 'racecar';
    expected = true;

    expect(isPalindromePermutation(tester)).toEqual(expected);
  })
  it('should handle strings that are not palindromes', () => {
    tester = 'racecars';
    expected = false;

    expect(isPalindromePermutation(tester)).toEqual(expected);
  })
  it('should handle strings that are perms of a palindrome', () => {
    tester = 'tactcoa'; // tacocat
    expected = true;

    expect(isPalindromePermutation(tester)).toEqual(expected);
  })
  it('should handle strings that are not perms of a palindrome', () => {
    tester = 'tactboa';
    expected = false;

    expect(isPalindromePermutation(tester)).toEqual(expected);
  })
  it('should ignore spaces', () => {
    tester = 'tact coa';
    expected = true;

    expect(isPalindromePermutation(tester)).toEqual(expected);
  })
  it('should ignore casing', () => {
    tester = 'Rac Care';
    expected = true;

    expect(isPalindromePermutation(tester)).toEqual(expected);
  })
})
describe('testing if strings are one edit away from each other', () => {
  let tester1, tester2, expected;

  it('should recognize zero edits needed', () => {
    tester1 = 'avenger'
    tester2 = 'avenger'
    expected = true

    expect(oneAway(tester1, tester2)).toEqual(expected);
  })

  it('should recognize char INSERT needed', () => {
    tester1 = 'krpton'
    tester2 = 'krypton'
    expected = true

    expect(oneAway(tester1, tester2)).toEqual(expected);
  })

  it('should recognize REMOVE char needed', () => {
    tester1 = 'avsenger'
    tester2 = 'avenger'
    expected = true

    expect(oneAway(tester1, tester2)).toEqual(expected);
  })

  it('should recognize REPLACE char needed', () => {
    tester1 = 'spidermen'
    tester2 = 'spiderman'
    expected = true

    expect(oneAway(tester1, tester2)).toEqual(expected);
  })
  it('should recognize more than 1 edit is needed', () => {
    tester1 = 'spiderman'
    tester2 = 'spidergwen'
    expected = false

    expect(oneAway(tester1, tester2)).toEqual(expected);
  })
  it('should recognize strings are of lengths that require more than 2 edits', () => {
    tester1 = 'spiderm'
    tester2 = 'spidergwen'
    expected = false

    expect(oneAway(tester1, tester2)).toEqual(expected);
  })
  it('should recognize same characters are out of order (expect false)', () => {
    tester1 = 'ms marvel'
    tester2 = 'smm ravel'
    expected = false

    expect(oneAway(tester1, tester2)).toEqual(expected);
  })
})

// describe('', () => {
//   let tester1, tester2, expected;

//   it('')


// })