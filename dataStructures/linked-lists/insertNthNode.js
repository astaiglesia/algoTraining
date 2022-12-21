/** Linked Lists - Insert Nth
 * 
 * Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.
 * 
 * InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.
 * 
 * insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
 * insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
 * insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
*/


function Node(data) {
  this.data = data;
  this.next = null;
}

const insertNth = (head, idx, data, prev = null, current = head) => 
  idx === 0 ? (
    newNode = new Node(data),
    prev && (prev.next = newNode),
    newNode.next = current,
    head === current ? newNode : head
  ) 
  : insertNth(head, idx - 1, data, current, current.next)


/* 
>> insert new node at any index/position in a LL
input: list: Node, index: num, data: any
output: Node
givens: 
- output is the head of the list
approach: iterative or recursive
- maintain prev + current nodes, tracker var
- traverse the list until tracker equals idx
- base case : terminate when idx === 0
- wire in a new node between prev and current
edges: 
- handle insertion at head, tail
timespace: linear time, constant space

testcases: https://www.codewars.com/kata/55cacc3039607536c6000081/train/javascript
*/ 
