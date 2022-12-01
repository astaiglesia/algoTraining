/* ==== Breadth First Sum ====

* Write a function, sumTree(root), that takes in the root of a binary tree as its arg
* The function should return the total sum of all values in the tree
* You can assume that the tree only contains number values

@params:
- root: Node
@returns: number

approach:
- breadth first traversal
  - declare a sum, init to 0
  - implement a queue, init'd with root
  - shift the queue
  - process the node and push children to queue
  
  // console.log('--------------->', queue)
  // console.log('++++ current node is:', current, 'current sum is:', sum)
*/ 

const sumTree = (root, queue = [root], sum = 0) => {
  const current = queue.shift();                                        // pointer to current Node shifted from queue  
  return (!current && !queue.length) ? sum                              // base case: return out sum if current is null and queue is empty
    : (                                                                 // recursive case: 
      current && (sum += current.data, queue.push(current.left), queue.push(current.right)),  // if current is a node, process the node
      sumTree(root, queue, sum)                                         // return a recursive call 
    );
}

// test cases
class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const a = new Node (3);
const b = new Node (2);
const c = new Node (7);
const d = new Node (4);
const e = new Node (-2);
const f = new Node (5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(sumTree(a));  // expect to be 19