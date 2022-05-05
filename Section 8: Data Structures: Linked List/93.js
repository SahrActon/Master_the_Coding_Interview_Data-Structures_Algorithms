// 10 -->5--> 16

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.tom = null;
    }
}

class LinkedList {
    constructor(value) {

        // this is the head of the whole linked list
        this.head = {
            value: value,
            // we can set the next value to null because we dont know if the linked list will have more than 1 node
            next: null
        }
        // because to start with we only have one item, the head is going to be tail
        this.tail = this.head;

        // we want to keep track of the length for our linked list.
        this.length = 1;
    }

    append(value) {
        // const newNode = new Node(value)
        const newNode = {
            value: value,
            next: null
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this; // return the class that get instantiated
    }


    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    traverseToIndex(index) {
        // check params

        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    insert(index, value) {
        // check params

        if (index >= this.length) {
            return this.append(value)
        }

        const newNode = new Node(value);

        const leader = this.traverseToIndex(index - 1) //finding the index
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();

    }
}

const mySpecialLinkedList = new LinkedList(10);
mySpecialLinkedList.append(5);
mySpecialLinkedList.append(16);
mySpecialLinkedList.prepend(1);
mySpecialLinkedList.printList()
mySpecialLinkedList.insert(2, 99);
