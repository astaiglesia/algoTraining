function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
/* 
  Given a node representing the root of a binary tree, write a function to check if it is a valid binary *search* tree. 
  
  A binary tree is a valid binary search tree if it satisfies the following constraints:
    - For any given node, the value of ALL of the child nodes in its left branches must be less than its value.
    - For any given node, the value of ALL of the child nodes in its right branches must be greater than its value.
    - The tree contains no duplicate values.

  For example, this would be a valid BST:

         4
       /   \ 
     2      5
   /   \
  1     3

  whereas this would not be a valid BST:

         3
       /   \
     2      5
   /   \
  1    *4*

  because the node with value 4 on the left-hand side of the tree, but it's value is greater than the root node value 3.
  For this to be considered a valid BST the tree would need to look like this:
  
         3
       /   \
     2      5
   /      /
  1     *4*

*/

// function to accept a node; returns a boolean
// conditional statements ->  true if:
// -- tree.value is greater than sum of recursively calling all nodes to the left
// ---- &&
// -- tree.value is less than the sum of recursively calling all nodes to the right
// -- false if: tree.value === tree.left.value || tree.right.value
// use recursion; need pointers to indicate current, left branch and right branch
// --- use a helper function...

const validBST = (tree, current = tree, leftTree = tree.left, rightTree = tree.right, sum = 0) => {
  if (current.value === left.value || current.value === right.value) return false
  if (current.value < left.value || current.value > right.value) return false

  while (current.left !== null) {
    // reassign sum
    sum += leftTree.value;
    // reassign current
    // recursive call to the left
    // recursive call to the right
    // conditional to check sums
    current 
  }

  return true
}

module.exports = { BinaryTree, validBST };
