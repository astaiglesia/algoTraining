// import files to test
// create describe block for grouping unit test assertions
// create assertions

const { removeDuplicates } = require('../../JavaScript/chapter02/2.1 - Remove Dups/removeDups.js')
const LinkedList = require('../../JavaScript/chapter02/util/LinkedListX.js')

describe('testing logic to remove duplicates from an unsorted linked list', () => {
  let testList, expected;

  beforeEach(() => {
    testList = new LinkedList();
    expected = new LinkedList();
  })

  it('should return reference to head of input list', () => {
    expected = testList;
    
    expect(removeDuplicates(testList)).toBe(expected);
  });
  it('should handle empty list', () => {
    expected = testList;
    
    expect(removeDuplicates(testList)).toBe(expected);
  });
  it('should handle single item lists', () => {
    testList.push('hello');
    expected.push('hello');

    expect(removeDuplicates(testList)).toEqual(expected);
  });
  it('should handle remove a single duplicate', () => {
    for (const ele of [1, 5, 1]) {
      testList.push(ele);
    }
    for (const ele of [1, 5]) {
      expected.push(ele);
    }

    expect(removeDuplicates(testList)).toEqual(expected);
  });
  it('should handle remove multiple duplicates', () => {
    for (const ele of [1, 5, 5, 1, 'hello', 5]) {
      testList.push(ele);
    }
    for (const ele of [1, 5, 'hello']) {
      expected.push(ele);
    }
    
    expect(removeDuplicates(testList)).toEqual(expected);
  });
})