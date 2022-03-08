//Median
/**
 * 寻找两个正序数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
    const arr = [...nums1, ...nums2];
    if (!arr.length) return 0;
    let res = 0;

    // 快排
    const sort = (nums: number[]) => {
        if (nums.length === 1) return nums;
        const len = nums.length;
        const left = [];
        const right = [];
        const mid = nums[0];
        for (let i = 1; i < len; i++) {
            const n = nums[i];
            if (n < mid) {
                left.push(n);
            } else {
                right.push(n);
            }
        }
        return [...(left.length ? sort(left) : []), mid, ...(right.length ? sort(right) : [])];
    }

    const cusArr = sort(arr);
    const mid = Math.floor(cusArr.length / 2);
    if (cusArr.length % 2) {
        res = cusArr[mid];
    } else {
        res = (cusArr[mid] + cusArr[mid - 1]) / 2
    }

    return res;
};

const result = findMedianSortedArrays([2, 4], [1, 3]);
console.log(result); // 2.5

const result2 = findMedianSortedArrays([2], [1, 3]);
console.log(result2); // 2