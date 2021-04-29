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
    // This code
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
    // Or this code
    // else {
    //   if (value === this.root.value) {
    //     return this.root.value;
    //   } else {
    //     let current = this.root;
    //     while (true) {
    //       if (value > current.value) {
    //         if (current.right === null) return false;
    //         else {
    //           if (current.right.value === value) return current.right.value;
    //           else current = current.right;
    //         }
    //       } else {
    //         if (value < current.value) {
    //           if (current.left === null) return false;
    //           else {
    //             if (current.left.value === value) return current.left.value;
    //             else current = current.left;
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(9);
tree.insert(8);
tree.insert(11);
tree.insert(10);
tree.insert(15);
tree.insert(16);
tree.insert(10);
tree.insert(10);
tree.insert(30);

console.log(tree);

console.log(tree.find(30));
console.log(tree.find(31));
console.log(tree.find(10));
console.log(tree.find(8));
console.log(tree.find(9));
console.log(tree.find(11));
