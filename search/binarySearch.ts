/*
* 二分搜索 - 必须是有序的二维数组
*  1. 从数组的中间元素开始，如果中间元素正好是目标值，则搜索结束
*  2. 如果目标值大于或者小于中间元素，则在大于或小于的中间元素的那一半数组中搜索
* */
const binarySearch = (nums: number[], target: number): number => {
    let start = 0;
    let len = nums.length - 1;
    /*while (start <= len) {
        const mid = Math.floor((start + len) / 2);
        const n = nums[mid];
        if (target > n) {
            start = mid + 1;
        } else if (target < n) {
            len = mid - 1;
        } else {
            return mid;
        }
    }*/

    const rec = (start: number, end: number): number => {
        if (start < 0 || start > end) return -1;
        const mid = Math.floor((start + end) / 2);
        const n = nums[mid];
        if (n === target) {
            return mid;
        } else if (target > n) {
            return rec(mid + 1, end);
        } else {
            return rec(start, mid - 1);
        }
    }

    return rec(start, len);
}

const result = binarySearch([1, 2, 3, 4, 5], 1);
console.log(result);