/**
 * 合并两个有序数组 (有序遍历，按一定的顺序排列)
 *    给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 *    请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 *    注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
 * */
/**
 Do not return anything, modify nums1 in-place instead.
 */
const mergeArr = (nums1: number[], m: number, nums2: number[], n: number): number[] => {
    /* 利用 sort 的方法排序数组 */
    /*nums1.splice(m, nums1.length - m, ...nums2);
    nums1.sort((a, b) => a - b);
    return nums1;*/

    /* 双指针逆向插入 */
    let p1 = m - 1, p2 = n - 1, cur: number;
    let target = m + n - 1; // 因为数组 nums1 的长度是总长度，所以最后一个数组的下标就是 m + n - 1
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            cur = nums2[p2--];
        } else if (p2 === -1) {
            cur = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            cur = nums1[p1--];
        } else {
            cur = nums2[p2--];
        }
        nums1[target--] = cur;
    }

    return nums1;
}

const result = mergeArr([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log(result);

const result2 = mergeArr([1], 1, [], 0);
console.log(result2);

const result3 = mergeArr([0], 0, [1], 1);
console.log(result3);
