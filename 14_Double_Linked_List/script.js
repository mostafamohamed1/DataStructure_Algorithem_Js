// Double Linked List

//  Node
// - val
// - next
// - prev

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

//  Node
// - head
// - tail
// - length

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      current.prev = null;
    }
    this.length--;
    return current;
  }
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unShift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current;
    if (index <= this.length / 2) {
      let counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  set(index, value) {
    let indexResult = this.get(index);
    if (indexResult) {
      indexResult.val = value;
      return indexResult;
    }
    return undefined;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unShift(val);
    if (index === this.length) return this.push(val);
    let newNode = new Node(val);

    let foundNode = this.get(index - 1);
    let current = foundNode.next;
    foundNode.next = newNode;
    newNode.prev = foundNode;
    current.prev = newNode;
    newNode.next = current;

    this.length++;
    return newNode;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let foundNode = this.get(index);

    foundNode.prev.next = foundNode.next;
    foundNode.next.prev = foundNode.prev;
    foundNode.next = null;
    foundNode.prev = null;

    this.length--;
    return foundNode;
  }
}

let list = new DoubleLinkedList();
list.push(10);
list.push(20);
list.push(30);

console.log(list);
