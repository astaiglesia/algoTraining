

/*

Given the root of a binary search tree, determine the difference of the maximum
and minimum value.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

Ex:

4
/   \
2     7
/ \     \
1   3     9
/
8

returns 8, because 9 - 1 = 8

*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
/* ---------------------------
given: bst root; return: num
-- traverse the bst and push each value into an array/queue
---- recursively traverse the left side looking for the min
---- recursively traverse the right side looking for the max
-- determine the min and max vals
-- return the difference between min and max
*/

const bstMinMax = root => {
  const queue = [];
  queue.push(root.value);
  if (root.left === null && root.right === null) return 0

  if (root.left) queue.push(root.left.value);
  if (root.right) queue.push(root.right.value);
  
  console.log(queue);
  // while (root.left) {
  //   queue.push(root.left);
  //   bstMinMax(root.left);
  // }
  
  // while (root.right) {
  //   queue.push(root.right);
  //   bstMinMax(root.right);
  // }

  const max = Math.max(...queue);
  const min = Math.min(...queue);
  console.log('max and min', max, min);

  return max-min;
};







/*

Extension: (not necessarily related in technique to above problem, but
nevertheless still a BST problem)

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
given nodes "p" and "q" in the BST. Return the LCA node itself.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

The LCA of node 1 and node 3 is node 2.
The LCA of node 8 and node 9 is node 9.
The LCA of node 2 and node 8 is node 4.

*/

const lowestCommonAncestor = (root, p, q) => {
  
};

module.exports = {BinarySearchTree, bstMinMax, lowestCommonAncestor};
