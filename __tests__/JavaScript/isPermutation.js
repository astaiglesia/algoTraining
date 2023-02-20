// pull in file to test
const { isPermutation } = require('../../JavaScript/chapter01/1.2 - Check Perm/isPermutation.js')

// describe block to encapsulate unit test assertions
// accepts string and callback containing assertions
describe('tests string to see if they are permutation of each other',  () => {
  let tester1, tester2, expected;

  // create individual string labels and assertions
  it('should detect non-permutations of unequal lengths', () => {
    tester1 = 'aba';
    tester2 = 'aaba';
    expected = false;
    expect(expected).toEqual(isPermutation(tester1, tester2));
  })
  it('should detect non-permutations of non-matching chars', () => {
    tester1 = 'hello';
    tester2 = 'there';
    expected = false;
    expect(expected).toEqual(isPermutation(tester1, tester2));
  })
  it('should detect valid permutations', () => {
    tester1 = 'nirvana';
    tester2 = 'anavrin';
    expected = true;
    expect(expected).toEqual(isPermutation(tester1, tester2));
  })
})