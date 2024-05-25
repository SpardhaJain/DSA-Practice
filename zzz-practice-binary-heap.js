class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        let elementIndex = this.values.length - 1;
        function findParent(index) {
            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                if (values[parentIndex] < element) {
                    [values[parentIndex], values[index]] = [values[index], values[parentIndex]];
                }
                findParent(parentIndex);
            }
        }
        findParent(elementIndex);
    }
}


const heap = new MaxBinaryHeap();