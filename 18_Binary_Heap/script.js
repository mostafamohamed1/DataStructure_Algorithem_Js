// Binary heap..

class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }
  insert(element) {
    this.value.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.value.length - 1;
    const element = this.value[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.value[parentIndex];
      if (element <= parent) break;
      this.value[parentIndex] = element;
      this.value[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.value[0];
    const end = this.value.pop();
    if (this.value.length > 0) {
      this.value[0] = end;
      this._sinkDown();
    }
    return max;
  }
  _sinkDown() {
    let index = 0;
    const length = this.value.length;
    const element = this.value[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChild < length) {
        leftChild = this.value[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.value[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.value[index] = this.value[swap];
      this.value[swap] = element;
      index = swap;
    }
  }
}

// let heap = new MaxBinaryHeap();
// console.log(heap.value);
// // 41, 39, 33, 18, 27, 12
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);
// console.log(heap.value);
// heap.extractMax();
// console.log(heap);

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.value = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.value.push(newNode);
    this._bubbleUp();
  }

  _bubbleUp() {
    let index = this.value.length - 1;
    const element = this.value[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.value[parentIndex];
      if (element.priority >= parent.priority) break;
      this.value[parentIndex] = element;
      this.value[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    const min = this.value[0];
    const end = this.value.pop();
    if (this.value.length > 0) {
      this.value[0] = end;
      this._sinkDown();
    }
    return min;
  }
  _sinkDown() {
    let index = 0;
    const length = this.value.length;
    const element = this.value[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChild < length) {
        leftChild = this.value[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.value[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.value[index] = this.value[swap];
      this.value[swap] = element;
      index = swap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 2);

console.log(ER);

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
