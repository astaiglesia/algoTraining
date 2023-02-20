// import files to test
// create describe block for grouping unit test assertions
// create assertions

const { urlify } = require('../../JavaScript/chapter01/1.3 - URLify/urlify.js');

describe('testing urlify logic', () => {
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

