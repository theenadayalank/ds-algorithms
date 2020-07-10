class PriorityQueue {
  constructor() {
    this.heap = [];
    this.hash = {};
    this.size = 0;
  }

  add(value) {
    let length = this.heap.length;
    this.heap[length] = value;
    heapify(length);
  }

}