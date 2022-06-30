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

    // Get the very first item from the in our queue
    peek() {
        return this.first;
    }

    // join the queue
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
        return this; // this is our data structure
    }

    // remove from the queue
    dequeue() {
        // checking if the queue is empty
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.length--;
        return this;
    }

    //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Thomas");
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
console.log(myQueue);


//Joy
//Matt
//Pavel
//Samir