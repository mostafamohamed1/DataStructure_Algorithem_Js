// Stacks & Queues

// You can make your own STACK with array and use push - pop to handle data or unshift - shift
/*
let Stack = [];

Stack.push("Mostafa");
Stack.push("Mohamed");
Stack.push("Elnabawy");
Stack.push("Ghazi");

console.log(Stack.pop());
console.log(Stack.pop());
console.log(Stack.pop());
console.log(Stack.pop());

Stack.unshift("Mostafa");
Stack.unshift("Mohamed");
Stack.unshift("Elnabawy");
Stack.unshift("Ghazi");

console.log(Stack.shift());
console.log(Stack.shift());
console.log(Stack.shift());
console.log(Stack.shift());
*/
/*
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
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

  pop() {
    if (!this.first) return undefined;
    let current = this.first;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.last = newTail;
    this.last.next = null;
    this.size--;
    if (this.size === 0) {
      this.first = null;
      this.last = null;
    }
    return current;
  }
}

let stack = new Stack();
stack.push("FIRST");
stack.push("SECOND");
stack.push("THIRD");
stack.push("FORTH");

console.log(stack.pop());
console.log(stack.pop());

console.log(stack);
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let current = this.first;
      this.first = newNode;
      newNode.next = current;
    }
    this.size++;
    return this.size;
  }
  pop() {
    if (!this.first) return undefined;
    let current = this.first;
    this.first = current.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return current.val;
  }
}

let stack = new Stack();

console.log(stack.push("FIRST"));
console.log(stack.push("SECOND"));
console.log(stack.push("THIRD"));
console.log(stack.push("FORTH"));

console.log("$_".repeat(30));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack);
