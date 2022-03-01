//Median
/**
 * 寻找两个正序数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1:number[], nums2:number[]):number => {
    const arr = nums1.concat(nums2).sort();
    const len = arr.length;
    let res: number = 0;
    if (len % 2) {
        const median = Math.floor(arr.length / 2);
        res = arr[median];
    } else {
        const median = Math.floor(arr.length / 2);
        res = (arr[median - 1 ] + arr[median]) / 2
    }

    return res;
};

const result = findMedianSortedArrays([1,2], [3,4]);
console.log(result);