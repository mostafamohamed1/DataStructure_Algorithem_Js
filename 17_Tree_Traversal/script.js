// Tree Traversal

// Binary Search tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert Values
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // Find Values
  find(value) {
    if (!this.root) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return current;
  }

  breadthFirstSearch() {
    let node = null,
      data = [],
      queue = [];
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  depthFirstPreOrder() {
    let data = [],
      current = this.root;
    function traversal(node) {
      data.push(node.value);
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
    }
    traversal(current);
    return data;
  }
  depthFirstPostOrder() {
    let data = [],
      current = this.root;

    function traversal(node) {
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      data.push(node.value);
    }
    traversal(current);
    return data;
  }

  depthFirstInOrder() {
    let data = [],
      current = this.root;
    function traversal(node) {
      if (node.left) traversal(node.left);
      data.push(node.value);
      if (node.right) traversal(node.right);
    }
    traversal(current);
    return data;
  }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree);
console.log("Breadth First Search");
console.log(tree.breadthFirstSearch());
console.log("Depth First PreOrder");
console.log(tree.depthFirstPreOrder());
console.log("Depth First PostOrder");
console.log(tree.depthFirstPostOrder());
console.log("Depth First InOrder");
console.log(tree.depthFirstInOrder());
