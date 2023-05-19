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
        return `Total number of nodes are ${count}`;
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
        return `No node at the given index ${index}`;
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

    //  returns the index of the node containing value, or null if not found.
    find(value) {
        let currentNode = this.head;
        let findIndex = 0;
        while (currentNode) {
            findIndex += 1;
            if (currentNode.value === value) {
                return `The index node contaning value "${value}" is at ${findIndex} `;
            }
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    // represents your LinkedList objects as strings, so you can print them out and preview them in the console
    toString() {
        let result = '';
        let currentNode = this.head;
        while (currentNode) {
            result += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
        result += 'null';
        return result;
    }

    //  inserts a new node with the provided value at the given index
    insertAt(value, index) {
        if (index < 0) return;
        const newNode = new Node(value);
        let currentNode = this.head;
        let prevNode = null;
        let countIdx = 1;
        while (currentNode && countIdx < index) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
            countIdx++;
        }
        if (countIdx === index) {
            if (prevNode) {
                prevNode.nextNode = newNode;
            } else {
                this.head = newNode;
            }
            newNode.nextNode = currentNode;
        }
    }

    // removes the node at the given index
    removeAt(index) {
        if (index < 0 || !this.head) return;
        let currentNode = this.head;
        let prevNode = null;
        let countIdx = 1;
        while (currentNode && countIdx < index) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
            countIdx++;
        }
        if (index === 1) {
            this.head = currentNode.nextNode;
            return;
        }
        prevNode.nextNode = currentNode.nextNode;
    }
}

const { log } = console;
const testList = new LinkedList(Node(1));
testList.append(2);
testList.prepend(0);
log(testList.size());
log(testList.headNode());
log(testList.tailNode());
log(testList.at(2));
log(testList.pop());
log(testList.contains(1));
log(testList.find(1));
log(testList.toString());
testList.insertAt(80, 2);
testList.removeAt(2);

log(testList.head);
