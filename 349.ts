/**
 * 两个数组的交集
 *  给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 * */
const intersection = (nums1: number[], nums2: number[]): number[] => {
    /*const res: Set<number> = new Set();
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                res.add(nums1[i]);
            }
        }
    }

    return Array.from(res);*/

    // return [...new Set(nums1)].filter(n => nums2.indexOf(n) > -1);
    const map: Map<number, boolean> = new Map();
    nums1.forEach(n => map.set(n, true));
    const res = [];
    nums2.forEach(n => {
        if (map.has(n)) {
            res.push(n);
            map.delete(n);
        }
    })

    return res;
}

const result = intersection([1, 2, 2, 1], [2, 2]);
console.log(result); // [ 2 ]

const result2 = intersection([4, 9, 5], [9, 4, 9, 8, 4]);
console.log(result2); // [ 4, 9 ]