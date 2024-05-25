class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next // Increment current by 1
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (typeof index !== 'number') return undefined;
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }
    set(val, index) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            this.push(val);
            return true;
        }
        if (!index) return !!this.unshift(val);
        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length - 1) return this.pop();
        if (!index) return !!this.shift();
        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next;
        removedNode.next = null;
        prevNode.next = prevNode.next.next;
        this.length --;
        return removedNode;
    }
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        // [100, 200, 300, 400]
        // temp  next
        // prev
    }
    print() {
        const arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
     
}

// get property in SinglyLinkedList is taking a number and returns the item in that position

var list = new SinglyLinkedList();

//PUSH - Adds an element at the end of the list
list.push("HELLO");
list.push("There");
list.push("?");
list.push("Welcome");

// POP - Removes an element from the end of the list
// console.log(list.pop());
// console.log(list.pop());

// SHIFT - Removes an element from the beginning of the list
// console.log(list.shift());
// console.log(list.shift());

//UNSHIFT - Adds an element at the beginning of the list
// console.log(list.unshift(4));

// GET - Get the value at the index passed
// console.log(list.get("Hello"));
// console.log(list.get(3));

// SET - Take a index and sets it's value to the value passed.
// console.log(list.set("You are", 1));

//INSERT - Adding a node to the Linked list at a specific position
// console.log(list.insert(1, 'SJ'));

//REMOVE - Removing a node from Linked List at a specific position
// console.log(list.remove(2));

//REVERSE - Reversing the linked list in place
console.log(list.reverse());
console.log(list.print());
console.log(list);