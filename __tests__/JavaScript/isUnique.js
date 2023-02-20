const { everyCharUnique } = require('../../JavaScript/chapter01/1.1 - Is Unique/isUnique.js')

describe('testing string to see if its characters are unique', () => {
  let tester, expected;

  it('should recognize all unique chars', () => {
    tester = 'abdip'
    expected = true
    expect(expected).toEqual(everyCharUnique(tester))
  })
  it('should recognize duplicate characters', () => {
    tester = 'hello'
    expected = false
    expect(expected).toEqual(everyCharUnique(tester))
  })

})


