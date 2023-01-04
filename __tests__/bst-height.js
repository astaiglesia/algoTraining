const {BinarySearchTree, bstHeight, superbalanced} = require('../challenges/round3/29-bst-height.js');

describe('bstHeight test', () => {
  it('finds the height of a binary search tree', () => {
    const binarySearchTree = new BinarySearchTree(5);
    
    binarySearchTree.left = new BinarySearchTree(3);
    binarySearchTree.left.left = new BinarySearchTree(1);
    expect(bstHeight(binarySearchTree)).toBe(2);
    
    binarySearchTree.left.left.right = new BinarySearchTree(2);
    expect(bstHeight(binarySearchTree)).toBe(3);
    
    binarySearchTree.left.left.left = new BinarySearchTree(0);
    expect(bstHeight(binarySearchTree)).toBe(3);
    
    binarySearchTree.right = new BinarySearchTree(8);
    expect(bstHeight(binarySearchTree)).toBe(3);
  });
});

describe('superbalanced test', () => {
  let tree;
  
  /**
   *                  10
   *             5        14
   *          3     6
   *        1
   */

  beforeEach(() => {
    tree = new BinarySearchTree(10);
    tree.right = new BinarySearchTree(5);
    tree.right.right = new BinarySearchTree(3);
    tree.right.right = new BinarySearchTree(6);
    tree.left = new BinarySearchTree(14);
  });
  
  it('should detect superbalanced trees', () => {
    expect(superbalanced(tree)).toBe(true);
  });

  it('should return false for not superbalanced trees', () => {
    tree.right.right.left = new BinarySearchTree(1);
    expect(superbalanced(tree)).toBe(false);
  });
});
