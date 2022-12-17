class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

const a = new Node(10);
const b = new Node(20);
const c = new Node(30);
const d = new Node(40);
const e = new Node(50);

a.next = b; b.next = c; c.next = d; d.next = e;

// console.log(a);
// P    C     t
// null 10 > 20 > 30 > 40 > 50

// P      C    t
// null < 10   20 > 30 > 40 > 50

//        P    C     t
// null < 10   20 > 30 > 40 > 50

//              P   C     t
// null < 10 < 20   30 > 40 > 50




// recursive approach
const reverseLL = (root, prev = null, temp = root?.next) => {
  return (root === null) ? prev
    : (root.next = prev, reverseLL(temp, root));
}

// explicit recursion
// const reverseLL = (root, prev = null, current = root) => {
//   // base case
//   if (current === null) return prev;
  
//   // recursive case
//   // set up temp pointer, update current.next prop, reassign pointers
//   const temp = current.next;
//   current.next = prev;
//   prev = current; 
//   current = temp;

//   return reverseLL(root, prev, current);
// }

// iterative approach
// const reverseLL = head => {
//   let prev = null, 
//       current = head;

//   while (current !== null) {
//     let temp = current.next;
  
//     current.next = prev;

//     prev = current;
//     current = temp;
//   }

//   return prev;  
// }


console.log(reverseLL(a));    // expect 50 > 40 > 30 > 20 > 10
