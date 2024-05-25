class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BFS {
    constructor() {
        this.root = null;
    }
    traverse() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
}

var tree = new BFS();

tree.root = new Node(10);
tree.root.right = new Node(16);
tree.root.left = new Node(2);
tree.root.left.right = new Node(18);
tree.root.left.left = new Node(90);
tree.root.right.left = new Node(19);
tree.root.right.right = new Node(4);

console.log(tree.traverse());
// console.log(tree);

//                  10
//              2        16
//           90   18   19   4

// [10,2,16,90,18,19,4]