class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// PRE ORDER

class DFS {
    constructor() {
        this.root = null;
    }
    preOrderTraverse () {
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    postOrderTraverse () {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    inOrderTraverse () {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

var tree = new DFS();

tree.root = new Node(10);
tree.root.right = new Node(16);
tree.root.left = new Node(2);
tree.root.left.right = new Node(18);
tree.root.left.left = new Node(90);
tree.root.right.left = new Node(19);
tree.root.right.right = new Node(4);

// console.log(tree.preOrderTraverse());
// console.log(tree.postOrderTraverse());
console.log(tree.inOrderTraverse());

//                  10
//              2        16
//           90   18   19   4