/**
 * 堆
 *  堆是一种特殊的完全二叉树
 *  所有的节点都大于等于（最大堆）或小于等于（最小堆）它的字节点
 */
// 仅仅支持数字
export default class MinHeap {
    heap: any[];

    constructor() {
        this.heap = [];
    }

    insert(val: number) {
        this.heap.push(val);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }

    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }

    shiftUp(index: number) {
        if (index === 0) return;
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }

    getParentIndex(i: number) {
        return (i - 1) >> 1; // Math.floor((i - 1) / 2)
    }

    getLeftIndex(i: number) {
        return 2 * i + 1;
    }

    getRightIndex(i: number) {
        return 2 * i + 2;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}
type MinHeapObjectType = {
    value: number,
    key: number,
}

// 仅仅支持对象
export class MinHeapObject extends MinHeap {
    insterObj(val: MinHeapObjectType) {
        this.heap.push(val);
        this.shiftUp(this.heap.length - 1);
    }

    shiftUp(index: number) {
        if (index === 0) return;
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] && this.heap[parentIndex].value > this.heap[index].value) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }
}

/*const h = new MinHeap();
h.insert(1);
h.insert(4);
h.insert(3);
h.insert(2);
h.insert(5);
console.log(h);
h.pop();
console.log(h);*/
