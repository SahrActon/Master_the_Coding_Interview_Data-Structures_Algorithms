class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1; // because we have one item - Which is the head
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printListOfElements() {
        const arr = [];
        let currentNode = this.head; // first item in the list

        // While loops are great if we dont know the length of something;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr)
        return arr;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        // checks
        if (index < 0) {
            throw new Error("Index has to be greater than 0")
        }

        while (counter !== index) {
            currentNode = currentNode.next; // keep moving the current node to the right
            counter++;
        }
        return currentNode
    }

    insert(index, value) {
        for (let i = 0; i < this.length; i++) {
            if (index === 0) {
                this.prepend(value);
                return this.printList();
            }

            if (index >= this.length) {
                return this.append(value)
            }

            const newNode = new Node(value);
            // we call the leader - this first node that we start from

            const leader = this.traverseToIndex(index - 1); // this allows us to point to the leader/node before we insert
            const holdPreviousPointer = leader.next;

            leader.next = newNode
            newNode.next = holdPreviousPointer;
            this.length++;

            return this.printListOfElements();
        }
    }

    remove(index) {
        // checks
        if (index < 0) {
            throw new Error("Index has to be greater than 0")
        }

        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next
        leader.next = unwantedNode.next;
        this.length--;
        return this.printListOfElements();
    }

    reverse() {
        // checks
        if (!this.head.next) {
            return this.head;
        }

        let firstItem = this.head;
        this.tail = this.head;
        let secondItem = firstItem.next;

        while (secondItem) {
            const temp = secondItem.next;
            secondItem.next = firstItem;

            firstItem = secondItem;
            secondItem = temp;
        }

        this.head.next = null;
        this.head = firstItem;
        return this.printListOfElements()
    }
}

// *-*
//  *

// it is good practice to have constantly test our your code as you go along
// 10 --> 4 --> 23
const myLinkedList = new LinkedList(10);
myLinkedList.append(4);
myLinkedList.append(23);
myLinkedList.prepend(1);

console.log("\n")
myLinkedList.printListOfElements();
myLinkedList.insert(2, 99);

console.log("\n")
myLinkedList.remove(2)

myLinkedList.reverse()


// myLinkedList.insert(1, 99)
// console.log(myLinkedList)