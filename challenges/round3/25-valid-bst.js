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


// ----- valid BST approach
- Define the min and max value the current node can have
- If a node's value is not within those bounds, return false
- Recursively validate the node's left children, with the max bound set to the node's value
- Recursively validate the node's right children, with the min bound set to the node's value

*/

const validBST = (bst, min, max) => {
  return (!bst) ? true
    :  (bst.value <= min || bst.value >= max) ? false
    :  validBST(bst.left, min, bst.value) && validBST(bst.right, bst.value, max)
}

// const validBST = (bst, min, max) => {
//   console.log(bst)
//   if (!bst) {console.log('--- hit null node'); return true}
//   if (bst.value <= min || bst.value >= max) return false

//   return validBST(bst.left, min, bst.value) && validBST(bst.right, bst.value, max)  // both recursive tail calls need to return out true
// }

module.exports = { BinaryTree, validBST };
