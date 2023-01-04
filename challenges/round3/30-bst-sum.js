function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, determine the sum of all the values.
Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

approach: dfs / bfs; increment a sum tracker

// implement a lifo traversal using the call stack
const bstSum = (root) => {
  let sum = 0
  const stack = [root]
  
  while (stack.length) {
    const currentNode = stack.pop()
    if (currentNode) {
      sum += currentNode.value
      stack.push(currentNode.left)
      stack.push(currentNode.right)
    }
  }
  
  return sum
}
*/

const bstSum = (root) => !root ? 0
  : bstSum(root.left) + root.value + bstSum(root.right)
  


// test case
/**
 *            10
 *          +    +
 *       2       null => 0
 *     +   +
 *    1     3
 *           +
 *            4    
 */

bst = new BinarySearchTree(10);
bst.left = new BinarySearchTree(2);
bst.left.left = new BinarySearchTree(1);
bst.left.right = new BinarySearchTree(3);
bst.left.right.right = new BinarySearchTree(4);

console.log(bstSum(bst));


/*

Extension:
Given the root of a binary search tree, reverse the binary search tree in-place
and return the root. Reverse the tree so that for each node, every number on the
left is greater and every number on the right is lesser.

For example, the original tree:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

reverses to:

     4
   /   \
  7     2
 /     / \
9     3   1
 \
  8

Do this in-place, so that we never use the BinarySearchTree constructor to
create any new nodes in memory.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

approach:
- recursive dfs
  - swap children of current node
output: no return val - swap in place

const bstReverse = root => {
  if (!root) return
  [root.left, root.right] = [root.right, root.left]
  bstReverse(root.left)
  bstReverse(root.right)
};
*/

const bstReverse = root => !root ? null
  : (
    [root.left, root.right] = [root.right, root.left],
    bstReverse(root.left),
    bstReverse(root.right)
  )


module.exports = {BinarySearchTree, bstSum, bstReverse};
