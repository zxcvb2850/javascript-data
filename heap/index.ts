/**
 * 堆
 *  堆是一种特殊的完全二叉树
 *  所有的节点都大于等于（最大堆）或小于等于（最小堆）它的字节点
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
