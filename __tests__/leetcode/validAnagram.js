const { isAnagram } = require('../../arrays_hashing/validAnagram');

describe('testing if string is a valid anagram', () => {
  let s, t

  it('function should return false for invalid inputs', () => {
    expect(isAnagram([], 'hello')).toEqual(false)
    expect(isAnagram(true, 4 )).toEqual(false)
  })
  
  it('function should return true for valid anagrams', () => {
    s = 'umbrella', t = 'bumlarel'
    expect(isAnagram(s, t)).toEqual(true)
  })
  
  it('function should return false if inputs are not anagrams', () => {
    s = 'potato', t = 'potatoes'
    expect(isAnagram(s, t)).toEqual(false)
  })
})