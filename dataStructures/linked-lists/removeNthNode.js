
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * given: the head of a linked list, remove the nth node from the end of the list and return its head.
 * method: recursive
 * - add a counter param defaulted to the length + 1 - n (the distance from the tail of the LL)
 * - track prevNode, defaulted to null (reassign to the current node on recursive calls)
 * - 
 * - // basecase: terminate recursion when counter equals one ------------
 * - recursively traverse the list and terminate when counter === 1 (decrement counter on each recursive call)
 * - disconnect the node
 * - > assign the node to a temp variable 
 * - > rewire pointers
 * - > >  create a temp pointer to the current head
 * - > >  set the prevNode's next prop to reference the same node as the current head's next prop
 * - > >  disconnect temp's next reference by setting to null
 * - > return the head
 * 
 * - // recursive case
 * - return a recursive tail call passing in:
 *    - with node ref'd by head's next
 *    - input arg 
 *    - the previous head
 *    - decremented counter
*/ 


function helper(head) {
  let counter = 0,
      current = head;

  while (current) {
      counter += 1;
      current = current.next;
  }

  return counter;
}
//                        1     1                       
const removeNthFromEnd = (head, n, current = head, prevNode = null, length = helper(head), counter = length + 1 - n) => {
    console.log(length)
    console.log('----------- new call on the stack (head:', head, 'n: ', n, 'prevNode: ', prevNode, 'counter: ', counter)
    if (counter < 1 || !head) return head;                     // handles edge cases (tests 3)
                                  // targeting undefined returns input (test4)

    // handle targeting the only node in a LL
    // let temp = head;
    if (counter === 1 && n == 1 && !prevNode) {
      return null
    }          
    
    // base case - terminate when counter hits 1
    if (counter === 1) {
        const temp = current;
        prevNode.next = current.next
        temp.next = null
        return head
    }

    // recursive case
    const newPrev = current;
    // console.log(newPrev)
    return removeNthFromEnd(head, n, current.next, newPrev, length,  counter - 1)
};

// const removeNthFromEnd = (head, n, prevNode = null, counter = helper(head) + 1 - n) => {
//   return (!n || !head) ? (console.log('edge cases--->'), head)
//     : (counter === 1 && !prevNode) ? (        console.log('hit++++'),
//       temp = head,
//       head = temp.next
//     ) : (counter === 1) ? (
//       temp = head,
//       prevNode.next = head.next,
//       temp.next = null,
//       head
//     ) : (
//       newPrev = head,
//       removeNthFromEnd(head.next, n, newPrev, counter - 1)
//     )
// }




/**
   * Definition for singly-linked list.
*/
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}




// const tester1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
// console.log('----- tester1', tester1)

// removeNthFromEnd(tester1, 2)
// console.log('TEST1 expect', tester1, 'to be 1 > 2 > 3 > 5')

// console.log('expect 4th value has been removed: ', tester1.next.next, 'to be 3 > 5')

// removeNthFromEnd(tester1, 2)
// console.log('TEST2 expect', tester1, 'to be 1 > 2 > 5')
// console.log('TEST3 expect targeting 0 ', removeNthFromEnd(tester1, 0), 'to be same as input: 1 > 2 > 5')

// console.log('TEST4 expect target > length', removeNthFromEnd(tester1, 4), 'to be same as input: 1 > 2 > 5')



console.log('-------------')

let tester2 = new ListNode(1)
removeNthFromEnd(tester2, 1)
console.log('TEST5 expect handle removing single node: ', tester2, 'to be null')

let tester3 = new ListNode(1, new ListNode(2))
tester2 = removeNthFromEnd(tester3, 1)
console.log('TEST6 expect', tester3, 'to be 1')


let tester4 = null
removeNthFromEnd(tester4, 1)
console.log('TEST7 expect null input: ', tester4, 'to be null')


