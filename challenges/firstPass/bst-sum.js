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

*/

/* ----------
Given: root of a bst; Return: a num
Find: the sum of all values
Approach: Create a sum variable, recursively traverse the left side tree then the right side and increment the sum variable
Edge Cases: 
*/
const bstSum = (root, sum = root.value) => {
  console.log('initial sum', sum);
  // ## create leftSum and rightSum
  const summer = (node, sum) => {  
    sum += node.value;
    if (node.left) {
      console.log('recursive left sum', sum);
      return bstSum(node.left, sum);
    }
    if (node.right) {
      console.log('recursive right sum', sum);
      return bstSum(node.right, sum);
    }
  }

  const leftSum = summer(root.left, sum);
  const rightSum = summer(root.right, sum);

  // if (root.left) {
  //   console.log('recursive left sum', sum);
  //   sum += root.left.value;
  //   return bstSum(root.left, sum);
  // }
  // if (root.right) {
  //   console.log('recursive right', sum);
  //   sum += root.right.value;
  //   return bstSum(root.right, sum);
  // }

  console.log('final sum', sum)
  return sum;
};

// test case
bst = new BinarySearchTree(10);
bst.left = new BinarySearchTree(2);
bst.left.left = new BinarySearchTree(1);
bst.left.right = new BinarySearchTree(3);
bst.left.right.right = new BinarySearchTree(4);

bstSum(bst);


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

*/

const bstReverse = root => {
  
};

module.exports = {BinarySearchTree, bstSum, bstReverse};
