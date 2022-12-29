const {LinkedList, Node, linkedListRemove, linkedListRemoveMultiple} = require('../challenges/round3/24-linked-list-remove');

describe('linkedListRemove test', () => {
  const ll = new LinkedList();
  beforeEach(() => {
    const nodeList = new Node('a');
    nodeList.next = new Node('d');
    nodeList.next.next = new Node('b');
    nodeList.next.next.next = new Node('c');
    nodeList.next.next.next.next= new Node('b');
    ll.head = nodeList;
  });
  it('Should return head.next if the value corresponds to the first node', () => {
    const expected = ll.head.next;
    const newLL = linkedListRemove(ll, 'a')
    expect(newLL).toBe(expected);
  });

  it('Should delete the first instance of the node', () => {
    const newLL = linkedListRemove(ll, 'b');
    expect(newLL.head.next.next.val).toEqual('c');
    expect(newLL.head.next.next.next.val).toEqual('b');
  });

  it('Bonus: Should be solved in constant space', () => {
    const expected = ll.head.next;
    const newLL = linkedListRemove(ll, 'a');
    expect(newLL).toEqual(expected);
  });
  
});

describe ('linkedListRemoveMultiple', ()=>{
  const llMultiple = new LinkedList();
  beforeEach(()=>{
    const nodeList = new Node('a');
    nodeList.next = new Node('d');
    nodeList.next.next = new Node('c');
    nodeList.next.next.next = new Node('d');
    nodeList.next.next.next.next = new Node('b');
    llMultiple.head = nodeList;
  })

  it('Bonus: Should delete all instances of the node', () => {
    const newLL = linkedListRemoveMultiple(llMultiple, 'd');
    const firstRemoveRef = newLL.head.next.val;
    expect(firstRemoveRef).toBe('c');
    expect(newLL.head.next.next.val).toBe('b');
    expect(newLL.head.next.next.next).toBeNull();
  });

  it('Bonus: Should be solved in constant space', () => {
    const expected = llMultiple.head.next;
    const newLL = linkedListRemoveMultiple(llMultiple, 'a');
    expect(newLL.head).toBe(expected);
  });
})
