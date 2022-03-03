/**
 * 堆
 */
class MinHeap {
    heap: any[];

    constructor() {
        this.heap = [];
    }

    insert(val: any) {
        this.heap.push(val);
        this.shiftUp(this.heap.length - 1);
    }

    shiftUp(index: number) {

    }

    getParentIndex(i) {
        return (i - 1) >> 1; // Math.floor((i - 1) / 2)
    }
}
