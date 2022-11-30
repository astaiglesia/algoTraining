/* ===== Breadth First Target Check =====
* write a function, bfs(root, target), that takes in the root of a binary tree and a target value as args

* function should return a bool indicating whether or not the tree contains the target value

* @params:
root: Node
target: num

* returns: bool

*/ 

class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const a = new Node ('a');
const b = new Node ('b');
const c = new Node ('c');
const d = new Node ('d');
const e = new Node ('e');
const f = new Node ('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/*
approach: FIFO analysis
- set up a queue, defaulted with root
- set up a loop to iterate while queue is not empty
  - shift a node for processing in current iteration
  - process the data
  - push children into queue
*/ 

const bfs = (root, target, queue = [root]) => {
  const current = queue.shift();
  return (!current && !queue.length) ? false
    : (current && current.data === target) ? true
    : (current && (queue.push(current.left), queue.push(current.right)), bfs(root, target, queue));
}

// ==== iterative solution ====
// const bfs = (root, target) => {
//   const queue = [root];

//   while (queue.length) {
//     const currentNode = queue.shift();

//     if (currentNode) {
//       if (currentNode.data === target) return true;
//       queue.push(currentNode.left);
//       queue.push(currentNode.right);
//     }
//   }

//   return false;
// }


// const bfs = (root, target, queue = [root]) => {
//   if (!queue.length) return false;

//   const current = queue.shift();
//   if (current) {
//     if (current.data === target) return true;
//     queue.push(current.left);
//     queue.push(current.right);
//   }

//   return bfs(root, target, queue);
// }

// test cases
console.log(bfs(a, 'e'));     // expect to be true
console.log(bfs(a, 'z'));     // expect to be false