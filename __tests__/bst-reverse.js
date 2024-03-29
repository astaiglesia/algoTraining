const {BinarySearchTree, bstReverse, sortedArrayToBST} = require('../challenges/round3/31-bst-reverse.js');

describe('bstReverse test', () => {
  let bst;
  it('reverses single-depth binary search trees', () => {
    bst = new BinarySearchTree(6);
    bst.left = new BinarySearchTree(3);
    bstReverse(bst);
    expect(bst.value).toBe(6);
    expect(bst.right.value).toBe(3);
    expect(bst.left).toBe(null);
    
    bst = new BinarySearchTree(6);
    bst.left = new BinarySearchTree(3);
    bst.right = new BinarySearchTree(10);
    bstReverse(bst);
    expect(bst.value).toBe(6);
    expect(bst.right.value).toBe(3);
    expect(bst.left.value).toBe(10);
  });
  
  it('reverses arbitrarily deep binary search trees', () => {
    bst = new BinarySearchTree(10);
    bst.left = new BinarySearchTree(2);
    bst.left.left = new BinarySearchTree(1);
    bst.left.right = new BinarySearchTree(3);
    bst.left.right.right = new BinarySearchTree(4);
    bst.right = new BinarySearchTree(20);
    bst.right.right = new BinarySearchTree(30);
    bst.right.right.left = new BinarySearchTree(27);
    bst.right.right.right = new BinarySearchTree(34);
    
    bstReverse(bst);
    
    expect(bst.value).toBe(10);
    expect(bst.right.value).toBe(2);
    expect(bst.right.right.value).toBe(1);
    expect(bst.right.left.value).toBe(3);
    expect(bst.right.left.left.value).toBe(4);
    expect(bst.right.left.right).toBe(null);
    expect(bst.left.value).toBe(20);
    expect(bst.left.left.value).toBe(30);
    expect(bst.left.left.right.value).toBe(27);
    expect(bst.left.left.left.value).toBe(34);
  });
});

describe('sortedArrayToBST test', () => {
  let bstResult, bstTest;
  it('creates small binary search trees', () => {
    bstResult = sortedArrayToBST([]);
    bstTest = null;
    expect(bstResult).toEqual(bstTest);
    
    bstResult = sortedArrayToBST([5]);
    bstTest = new BinarySearchTree(5);
    expect(bstResult).toEqual(bstTest);
    
    bstResult = sortedArrayToBST([2, 5]);
    bstTest = new BinarySearchTree(5);
    bstTest.left = new BinarySearchTree(2);
    expect(bstResult).toEqual(bstTest);
  });
  
  it('creates larger binary search trees', () => {
    bstResult = sortedArrayToBST([1, 4, 7, 8]);
    bstTest = new BinarySearchTree(7);
    bstTest.left = new BinarySearchTree(4);
    bstTest.left.left = new BinarySearchTree(1);
    bstTest.right = new BinarySearchTree(8);
    expect(bstResult).toEqual(bstTest);
    
    bstResult = sortedArrayToBST([0, 3, 4, 6, 8, 9]);
    bstTest = new BinarySearchTree(6);
    bstTest.left = new BinarySearchTree(3);
    bstTest.left.left = new BinarySearchTree(0);
    bstTest.left.right = new BinarySearchTree(4);
    bstTest.right = new BinarySearchTree(9);
    bstTest.right.left = new BinarySearchTree(8);
    expect(bstResult).toEqual(bstTest);
  });
});

