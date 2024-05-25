class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let popped = this.tail;
        if (this.length === 1) this.head = this.tail = null;
        else {
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null;
        }
        this.length--;
        return popped;
    }
    shift() {
        if (!this.head) return undefined;
        let shiftedHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedHead.next;
            this.head.prev = null;
            shiftedHead.next = null;
        }
        this.length--;
        return shiftedHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) this.head = this.tail = newNode;
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        if (index >= Math.floor((this.length - 1) / 2)) {
            let current = this.tail;
            let count = this.length - 1;
            while (count !== index) {
                current = current.prev;
                count--;
            }
            return current;
        } else {
            let count = 0;
            let current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
            return current;
        }
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode !== null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index >= this.length) return false;
        if (this.length === 0) return !!this.push(val);
        if (this.length === 1) return !!this.unshift(val);
        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        afterNode.prev = newNode;
        newNode.next = afterNode;
        newNode.prev = beforeNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) this.pop();
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

// let first = new Node(12);
// first.next = new Node(13);
// first.next.prev = first.val;

// console.log(first);

const list = new DoublyLinkedList();
// PUSH
list.push(12);
list.push(13);
list.push(14);
list.push(15);
// list.push("HELLO");
// list.push("There");
// list.push("?");
// list.push("Welcome");

// POP
// console.log(list.pop());

// SHIFT
// console.log(list.shift());

// UNSHIFT
// list.unshift(11);

// GET
// console.log(list.get(2));

// SET
// list.set(2, 11);

// INSERT
// list.insert(1, 13);

// REMOVE
console.log(list.remove(1));
console.log(list);