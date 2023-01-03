/* -------------- 

Given the root of a binary search tree, determine the difference of the maximum
and minimum value.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

Ex:

        4
      /   \
    2       7
   / \       \
  1   3       9
 
8

returns 8, because 9 - 1 = 8
*/

/** BST: Find the max and min values of the tree
 * 
 * @param root: BST Node
 * @returns num
 * 
 * givens: function evaluates the diff of min and max
 * approach: traversal - visit all nodes, type does not matter
 * - track min and max val
 * - process each node
 *   - reassign min and max as necessary
 * 
 * timespace: linear (worst case visit each node to find the min and max)
 * ### optimizations: 
 * - assuming balanced binary tree, we can:
 * - set min to the furthest left node value (i.e. recurse left until null)
 * - set max to the furthest right node value (recurse right until null)
 * -> still linear complexity as a worst case (all nodes follow the path of recursion)
 * -> we can eliminate unecessary evaluations of middle nodes (helpful if each operation is expensive)
 */

function BinarySearchTree(value, left = null, right = null) {
  this.value = value
  this.left = left
  this.right = right
}

const bstMinMax = root => {
  let min = Infinity, 
      max = -Infinity
  const stack = [root]
  
  while (stack.length) {                              // traverse the tree (selected DFS)
    const { value, left, right } = stack.pop()
    if (value < min) min = value
    if (value > max) max = value
    right && stack.push(right)
    left && stack.push(left)
  }

  return max - min
}


// testcase
const bst5 = new BinarySearchTree(5),
      bst30 = new BinarySearchTree(30),
      bst9 = new BinarySearchTree(9, bst5),
      bst23 = new BinarySearchTree(23, null, bst30),
      bst16 = new BinarySearchTree(16, bst9, bst23),
      bst42 = new BinarySearchTree(42),
      bst99 = new BinarySearchTree(99, null, bst42),
      favNums = new BinarySearchTree(31, bst16, bst99)

console.log('expect', bstMinMax(favNums), 'to equal 94')
//              31
//            /     \
//          16       99
//        / \         /
//      9   23       42
//     /      \
//    5        30





/* ----------------------------------------------------------------------------------

Extension: (not necessarily related in technique to above problem, but
nevertheless still a BinarySearchTree problem)

Given a binary search tree (BinarySearchTree), find the lowest common ancestor (LCA) of two
given nodes "p" and "q" in the BinarySearchTree. Return the LCA node itself.

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

input: root, p, q: BST Nodes
output: BST Node
givens: 
- LCA can be itself (e.g. the parent in a parent+child relationship is the LCA)
  - i.e. 
    - the LCA is the closest node that can be traversed to both args 
    - 
approach:
- amended binary search with 2 vals
- recursion to handle 4 possible outcomes
- given root, check val of both args against root
  - if both less, recurse left
  - if both right, recurse right
  - else if split or parent+child, terminate recursion/iteration, return current node
  - handle edge of parent+child relationship (if current is equal to one of the args + the other arg is a child)
edgges:
- invalid inputs
    - nodes don't exist on tree
    - null/ non-node inputs
timespace
- log time (binary search eliminates half the set on each pass)
- frames on a stack

#draftcode
const lowestCommonAncestor = (root, p, q) => {
  // basecase
  if (p.value >= root.value && q.value <= root.value 
    || p.value <= root.value && q.value >= root.value 
    ) return root
  // recursive case
  if (p.value < root.value && q.value < root.value ) return lowestCommonAncestor(root.left, p, q)
  else if (p.value > root.value && q.value > root.value ) return lowestCommonAncestor(root.right, p, q)
  // edgecase
  else return null
};
*/

const lowestCommonAncestor = (root, p, q) => {
  return (p.value >= root.value && q.value <= root.value 
      || p.value <= root.value && q.value >= root.value 
    ) ? root
    : (p.value < root.value && q.value < root.value ) ? lowestCommonAncestor(root.left, p, q)
    : (p.value > root.value && q.value > root.value ) ? lowestCommonAncestor(root.right, p, q)
    : null
}


module.exports = {BinarySearchTree, bstMinMax, lowestCommonAncestor};
