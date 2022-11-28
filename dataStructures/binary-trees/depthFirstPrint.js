/* ---- Depth First Traversal
- DFS implements a stack -> LIFO 
- process node + children
  - three variations: PreOrder, InOrder, PostOrder
- visit a node > pop node off the stack > push children onto stack  
- traverse to the leftmost leaf before traversing to the right

timespace: linear time, linear space

- recursive approach substitutes the call stack in lieu of building our own
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
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b; 
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//         a
//           \
//     b       c
//   /   \       \
// d      e       f


// --------------------------------- Iterative Approach
const depthFirstPrint = root => {
  // build a stack using native array with push and pop methods
  // initialize the stack with the root
  const stack = [ root ];

  // run algo while stack is not empty
  while (stack.length > 0) {
    const current = stack.pop();
    
    // process the node
    console.log(current.data);

    // push children to stack (so left is at the top of the stack)
    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)
  }
}
// console.log('iterative dfs')
// depthFirstPrint(a);         // expect a > b > d > e > c > f


// --------------------------------- Pre-Order DFS -> Recursive
const preorderDFS = root => {
  // base case: return out if tree is empty
  if (root === null) return;
  
  // recursive case: process the node + push children to stack (traverse left to right)
  console.log(root.data);
  preorderDFS(root.left)
  preorderDFS(root.right)  
}

//         a
//           \
//     b       c
//   /   \       \
// d      e       f
console.log('pre-order dfs')
preorderDFS(a);     // expect a > b > d > e > c > f


// --------------------------------- In-Order DFS -> Recursive
const inorderDFS = root => {
  if (root === null) return;

  inorderDFS(root.left)
  console.log(root.data);
  inorderDFS(root.right)  
}

console.log('in-order dfs')
inorderDFS(a);     // expect d > b > e > a > c > f


// -------------------------------- Post-Order DFS -> Recursive
const postorderDFS = root => {
  if (root === null) return;
  
  postorderDFS(root.left)
  postorderDFS(root.right)  
  console.log(root.data);
}

console.log('post-order dfs')
postorderDFS(a);     // expect d > e > b > f > c > a
