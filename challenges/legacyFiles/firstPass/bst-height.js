function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Find the tallest height of a binary search tree.

Ex. the tallest height of:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

is 3, because the tallest height of the tree connects the numbers 4 - 7 - 9 - 8
and has 3 links.

*/

/* ------
input: root of a bst; return: tallest height of the tree
create counter variable to track the height
recursively traverse down the left side to determine maxheight
recursively traverse down the right side to determine maxheight 
return greater value
*/

const bstHeight = tree => {

  const maxH = (node, counter = 1) => {
    if (!node) return counter;
    if (node.left) {
      counter += 1;
      return maxH(node.left, counter);
    }
    if (node.right) {
      counter += 1;
      return maxH(node.right, counter);
    }
    return counter;
  }

  const maxL = maxH(tree.left);
  const maxR = maxH(tree.right);
  return (maxL > maxR) ? maxL : maxR;
};

// ### create test cases -> code passes tests.. but why?!... whiteboard






/*
  Extension:

  Write a function to see if a binary tree is "superbalanced".
  An empty tree is balanced. A non-empty binary tree T is balanced if:
    1) Left subtree of T is balanced
    2) Right subtree of T is balanced
    3) The difference between heights of left subtree and right subtree is not more than 1.
  example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF

  A superbalanced tree is a tree that is balanced at every subtree level as well.

  Ex. 
        4                       4
      /   \                   /   \
     2     7                2       7
    / \     \             /  \     /  \
   1   3     9           1    3   5    9
            /                         /
           8                         8

  The tree on the left is balanced - height of left side is 2, height of right side is 3.
  But, it is not superbalanced since for the 7 subtree, height of left is 0, height of right is 2.
  
  The tree on the right is superbalanced since the difference in height is not more than 1 at any given subtree.
 */

const superbalanced = tree => {
  
};

module.exports = {BinarySearchTree, bstHeight, superbalanced};
