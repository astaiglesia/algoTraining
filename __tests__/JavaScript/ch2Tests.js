// import files to test
// create describe block for grouping unit test assertions
// create assertions

const { LinkedList, Node } = require('../../JavaScript/chapter02/util/LinkedListX.js');
const { removeDuplicates } = require('../../JavaScript/chapter02/2.1 - Remove Dups/removeDups.js');
const { kthToLast } = require('../../JavaScript/chapter02/2.2 - Return Kth to Last/returnKthToLast');


describe('testing logic to find the kth to the last node of a singly linked list', () => {
  let testList = new LinkedList(), 
      expected;
  for (const ele of [1, 5, 5, 'goodbye', 1, 'hello', 5]) {
    testList.push(ele);
  }  

  it('should have a findLength method that returns the length of a list', () => {
    expected = 7;
    expect(testList.length()).toEqual(expected);
  });
  it('should handle empty list', () => {
    const emptyList = new LinkedList();
    expected = undefined;
    expect(kthToLast(emptyList, 3)).toEqual(expected);
  });
  it('should handle k input greater than or equal to list length', () => {
    expected = undefined;
    expect(kthToLast(testList, 8)).toEqual(expected);
  });
  it('should have a utility that finds and returns node at a specified index', () => {
    expected = new Node(5, new Node('goodbye', new Node(1, new Node('hello', new Node(5)))));
    expect(testList.find(2)).toEqual(expected);
  });
  it('should find and return the kth node from the end', () => {
    expected = new Node('goodbye', new Node(1, new Node('hello', new Node(5))));
    expect(kthToLast(testList, 3)).toEqual(expected);
  });
});

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
});