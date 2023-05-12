const { Node } = require('./node-module');

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

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
}

const test = new LinkedList();
test.append('wassup');
console.log(test);
