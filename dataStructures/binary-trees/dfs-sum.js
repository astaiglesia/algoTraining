/*
  Write a function, sumTree(root), that takes in the root of a binary tree as an argument

  The function should return the total sum of all values in the tree.

  Assume the tree only contains number values.
*/

// BST Node definition
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// build bst
const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);

a.left = b; 
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//         3
//           \
//     2       7
//   /   \       \
// 4      -2      5

/*
input: root: node
output: num
givens: assume tree only contains num vals
approach: 
- dfs recursive preorder traversal 
  - process a sum
edges:
- invalid inputs
timespace:
- linear time, linear space
*/ 

const dfsSum = root => (root === null) ? 0 : dfsSum(root.left) + root.data + dfsSum(root.right);

// {  
//   // base case
//   if (root === null) return 0;

//   // recursive case: return the sum of the subtrees
//   return dfsSum(root.left) + root.data + dfsSum(root.right)
// }

console.log(dfsSum(a));       // expect 19
