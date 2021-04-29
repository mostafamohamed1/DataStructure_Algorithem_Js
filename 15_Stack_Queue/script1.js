// Queues

// Array Queue With unShift - pop or push - shift

/*
let q = [];

q.push("FIRST");
q.push("SECOND");
q.push("THIRD");

console.log(q.shift());
console.log(q.shift());
console.log(q.shift());

q.unshift("FIRST");
q.unshift("SECOND");
q.unshift("THIRD");

console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enQueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  deQueue() {
    if (!this.first) return null;
    let current;
    current = this.first;
    this.first = current.next;
    this.size--;

    if (this.size === 0) {
      this.first = null;
      this.last = null;
    }
    return current.val;
  }
}

let q = new Queue();
console.log(q.enQueue("FIRST"));
console.log(q.enQueue("SECOND"));
console.log(q.enQueue("THIRD"));
console.log(q.enQueue("FORTH"));

console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());

console.log(q);
