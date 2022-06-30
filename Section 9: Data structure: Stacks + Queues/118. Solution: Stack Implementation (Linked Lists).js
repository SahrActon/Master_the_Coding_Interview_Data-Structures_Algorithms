class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top
    }

    push(value) {
        const newNode = new Node(value);
        // check if this is the very first item

        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top; // this is our old top
            this.top = newNode;
            this.top.next = holdingPointer; // this is our old top
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }

}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");

console.log("This is the peak", myStack.peek())
myStack.pop()
myStack.pop()
myStack.pop()


console.log(myStack)
