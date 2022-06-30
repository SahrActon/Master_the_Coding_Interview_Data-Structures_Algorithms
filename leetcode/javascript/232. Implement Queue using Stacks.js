/**
 Implement a first in first out (FIFO) queue using only two stacks.
 The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).


 void push(int x) Pushes element x to the back of the queue.
 int pop() Removes the element from the front of the queue and returns it.
 int peek() Returns the element at the front of the queue.
 boolean empty() Returns true if the queue is empty, false otherwise.

 * */

class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[0];
    }
}