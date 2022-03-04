/**
 *  前 K 个高频元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
import {MinHeapObject} from "./heap";

const topKFrequent = (nums: number[], k: number): number[] => {
    const map: Map<number, number> = new Map();
    nums.forEach(n => map.set(n, map.has(n) ? map.get(n) + 1 : 1));
    const list = Array.from(map).sort((a, b) => b[1] - a[1]);

    return list.slice(0, k).map(n => n[0]);
};

const topKFrequentHeap = (nums: number[], k: number): number[] => {
    const map: Map<number, number> = new Map();
    nums.forEach(n => map.set(n, map.has(n) ? map.get(n) + 1 : 1));

    const h = new MinHeapObject();
    map.forEach(((value, key) => {
        h.insterObj({value, key});
        if (h.size() > k) {
            h.pop();
        }
    }))

    return h.heap.map(n => n.key);
};

// [1] 1
// const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
// console.log(result);

// [1] 1
const resultHeap = topKFrequentHeap([1, 1, 1, 1, 2, 2, 2, 3, 3], 2);
console.log(resultHeap);
