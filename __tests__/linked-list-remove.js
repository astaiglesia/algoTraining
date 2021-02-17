const {LinkedList, Node, linkedListRemove, linkedListRemoveMultiple} = require('../challenges/linked-list-remove');

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
    expect(linkedListRemove(ll, 'a')).toBe(ll.head.next);
  });

  it('Should delete the first instance of the node', () => {
    const newLL = linkedListRemove(ll, 'b');
    expect(newLL.head.next.next.val).toEqual('c');
    expect(newLL.head.next.next.next.val).toEqual('b');
  });

  it('Bonus: Should be solved in constant space', () => {
    const newLL = linkedListRemove(ll, 'a');
    expect(newLL).toBe(ll.head.next);
  });

  
});

xdescribe ('linkedListRemoveMultiple', ()=>{
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
    const newLL = linkedListRemoveMultiple(llMultiple, 'a');
    expect(newLL).toBe(llMultiple.head.next);
  });
})
