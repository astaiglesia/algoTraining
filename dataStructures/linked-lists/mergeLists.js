/**
 * Definition for singly-linked list.
*/
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
* @param {ListNode} list1
* @param {ListNode} list2
* @return {ListNode}
* givens:
* - return a sorted list: merging the 2
* - sorted inputs
* approach:
* - maintain pointers for each list
* -- current1, current2, outputList
* - while loop to traverse through lists
* -- current1 & current2 are null
* ---comparison check for smaller valued node
* ---handle list initialization
* ---add to output list
* -- update the pointers
* 
* edges:
* - handle negs
* - handle collisions - sequentially add equivalent vals to output
* - handle dual / single null inputs
* timespace:
* 
*/

const mergeTwoLists = function(list1, list2) {
  let newList,
      current1 = list1,
      current2 = list2,
      outputList = null,
      currentNode;

  if (!list1 && !list2) return null;                              // handle dual empty

  while (current1 && current2) {                                  // handle dual truthy
    (current1.val < current2.val) ? (currentNode = current1) : (currentNode = current2)
    const newNode = new ListNode(currentNode.val); 
    !newList                                                      // -> add the node
      ? (newList = newNode, outputList = newList)                 // handle list initialization
      : (outputList.next = newNode)                               // add to extg
    
    outputList = newNode;                                         // update pointers
    (currentNode === current1) ? (current1 = current1.next) : (current2 = current2.next)
  }
  while (current1) {                                              // handle single truthy
    const newNode = new ListNode(current1.val);
    !newList                                                         
      ? (newList = newNode, outputList = newList)                    
      : outputList.next = newNode                                    
    
    outputList = newNode;
    current1 = current1?.next;
  }
  while (current2) {                                              // handle single truthy
    const newNode = new ListNode(current2.val);
    !newList                                                       
      ? (newList = newNode, outputList = newList)                  
      : outputList.next = newNode                                  
    
    outputList = newNode;
    current2 = current2?.next;
  }

  return newList;
};



const list1 = new ListNode(1),
      b = new ListNode(2),
      c = new ListNode(4);
list1.next = b;
b.next = c;

const list2 = new ListNode(1),
      y = new ListNode(3),
      z = new ListNode(4);
list2.next = y;
y.next = z;


console.log('=========test case===========');
const testsolution =  mergeTwoLists(list1, list2);
console.log(0, testsolution);
console.log(1, testsolution.next);
console.log(2, testsolution.next.next);
console.log(3, testsolution.next.next.next);
console.log(4, testsolution.next.next.next.next);
console.log(5, testsolution.next.next.next.next.next);
