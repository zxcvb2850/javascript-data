import MinHeap from "./heap";

/**
 * 数组中的第K个最大元素
 *  给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 *  请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums: number[], k: number): number => {
    const h = new MinHeap();
    nums.forEach(n => {
        h.insert(n);
        if (h.size() > k) {
            h.pop();
        }
    })
    return h.peek();
}

// [3, 2, 1, 5, 6, 4] 2
const result = findKthLargest([3, 2, 1, 5, 6, 4], 2);
console.log(result); // 5

// [3,2,3,1,2,4,5,5,6] 4
const result2 = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
console.log(result2); // 4
