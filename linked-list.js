const { Node } = require('./node-module');

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    // adds a new node containing value to the end of the list
    append(value) {
        const newNode = Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let currentNode = this.head;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode;
    }

    // adds a new node containing value to the start of the list
    prepend(value) {
        const temp = this.head;
        this.head = Node(value);
        this.head.nextNode = temp;
    }

    // returns the total number of nodes in the list
    size() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count += 1;
            currentNode = currentNode.nextNode;
        }
        return count;
    }

    // returns the first node in the list
    headNode() {
        return this.head;
    }

    // returns the last node in the list
    tailNode() {
        let currentNode = this.head;
        if (!this.head) {
            return 'No node';
        }
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    // returns the node at the given index
    at(index) {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count += 1;
            if (count === index) {
                return currentNode;
            }
            currentNode = currentNode.nextNode;
        }
    }

    // removes the last element from the list
    pop() {
        if (!this.head) {
            console.log('List is empty');
            return;
        }
        if (!this.head.nextNode) {
            this.head = null;
            return;
        }

        let secondLastNode = this.head;
        let lastNode = secondLastNode.nextNode;
        while (lastNode.nextNode) {
            secondLastNode = lastNode;
            lastNode = lastNode.nextNode;
        }
        secondLastNode.nextNode = null;
    }

    // returns true if the passed in value is in the list and otherwise returns false.
    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }
}
