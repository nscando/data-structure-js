

class Node {
     constructor(value) {
          this.value = value;
          this.next = null;
     }
}

class Queue {
     constructor() {
          this.first = null;
          this.last = null;
          this.length = 0;
     }

     enqueue(value) {
          const newNode = new Node(value);
          if (this.length === 0) {
               this.first = newNode;
               this.last = newNode;
          } else {
               this.last.next = newNode;
               this.last = newNode;
          }
          this.length++;
          return this;

     }
     dequeue() {

          if (this.length === 0) { return console.error('[Queue Error] There is no nodes in QUEUE'); }
          if (this.length === 1) {
               this.first = null;
               this.last = null;
          } else {
               const holdingPointer = this.first.next;
               this.first = holdingPointer;
          }

          this.length--;
          return this;

     }

     peek() {
          return this.first;
     }
}

const queue = new Queue();