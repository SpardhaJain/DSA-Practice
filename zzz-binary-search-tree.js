class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (val === current.value) return undefined;
            if (val < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (val > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(val) {
        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        while(current && !found) {
            if (val === current.value) found = true;
            if (val < current.value) {
                current = current.left;
            } else if (val > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found;
    }
}

var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

// INSERT
tree.insert(41);
tree.insert(39);
tree.insert(46);
tree.insert(22);
tree.insert(64);
tree.insert(15);
tree.insert(10);
tree.insert(12);
tree.insert(11);
console.log(tree.insert(5));

console.log(tree.find(2));
console.log(tree);