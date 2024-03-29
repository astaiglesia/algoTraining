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

approach: dfs with a depth tracker (current and max)
// basecase: terminate when null
// recursive case
// - check if left leaf exists, recurse left if true
// - check if right leaf exists, recurse right if true
- 

console.log('---depth----', currentDepth, ' ----new recursive call:', bstNode)
*/

const bstHeight = bstNode => {
  let maxDepth = 0

  const depthFinder = (bstNode, currentDepth = 0) => {
    bstNode && currentDepth > maxDepth && (maxDepth = currentDepth)
    
    if (!bstNode) return
    depthFinder(bstNode.left, currentDepth + 1)
    depthFinder(bstNode.right, currentDepth + 1)
  }
  depthFinder(bstNode)

  return maxDepth
}



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

  --approach--
  - basecase: return out  when currentNode is null
  - recursive case:
    - call bstHeight on left and right nodes
    - return out false if height delta > 1
    - else recursive call on children
    
    const superbalanced = (tree, output = true) => {
      if (!tree) return output
    
      const diff = Math.abs(bstHeight(tree.right) - bstHeight(tree.left))
    
      if (diff > 1) return false
    
      else return (
        superbalanced(tree.left, output),
        superbalanced(tree.right, output)
      )
    }

 */

const superbalanced = (tree, diff = Math.abs(bstHeight(tree?.right) - bstHeight(tree?.left))) => !tree ? true
  : (diff > 1) ? false
  : (superbalanced(tree.left), superbalanced(tree.right))


module.exports = {BinarySearchTree, bstHeight, superbalanced};
