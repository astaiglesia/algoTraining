/* ==== Breadth First Sum ====

* Write a function, sumTree(root), that takes in the root of a binary tree as its arg

* the function should return the total sum of all values in the tree.

* you can assume that the tree only contains number values

@params:
- root: Node
@returns: number

*/ 

const sumTree = () => {

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