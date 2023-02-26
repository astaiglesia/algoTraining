// implement an algorithm to find the kth to last element of a singly linked list
/**
 * input: list: LL; k: positive num
 * output: Node
 * givens: 
 * - k represents the number of nodes from the tail to find
 * approach:
 * - add class  utility method to determine length of linked list
 * - add class utility method to find and return node at specific index 
 * (or add a length prop to class constructor and update methods)
 * (or convert to doubly linked list and traverse backwards to kth node from tail)
 * - determine the index to find 
 * - return node
 * edges:
 * - invalid inputs: assume valid
 * - handle empty list -> return undefined
 * - handle k larger than length -> return undefined
 * - 
 * timespace:
 * - linear (2n) - traverse once for length and once for find
 */

const kthToLast = (list, k) => list.find(list.length() - 1 - k);

module.exports = { kthToLast }

/** Text Solution
 * 
 *    var textSolution = function(k, list) {
 *      // do iteratively
 *      //define two pointers , fast and slow pointer
 *      let fast = list.head
 *      let slow = list.head
 *
 *      //Move fast pointer k steps in the linkedlist while slow remains at head
 *      for(let i=0;i<k;i++){
 *        if(fast === null) return null //k is larger than length of linked list
 *        fast = fast.next
 *      }
 *      // move both pointers at the same time, slow pointer will exit at kth node from the end
 *      while(fast !== null){
 *        fast =fast.next
 *        slow=slow.next
 *
 *      }
 *      return slow
 *
 *    };
 *
 *    // TESTS 
 *    let l = new LinkedList();
 *    l.append(1)
 *    l.append(2)
 *    l.append(3)
 *    l.append(4)
 *    l.append(5)
 *
 *
 *
 *    console.log(findKthToLast(3, l));
 *
 *    console.log(findKthToLast(10, l));
 *
 *    console.log(findKthToLast(-1, l));
 *
 *    console.log(findKthToLast(0, l));
 *
 *    console.log(findKthToLast(1, l));
*/