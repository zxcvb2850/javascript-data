/**
 * 冒泡排序
 */
const bubbleSort = <T>(nums: T[]): T[] => {
    const len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - i; j++) {
            const n1 = nums[j];
            const n2 = nums[j + 1];
            if (n1 > n2) {
                nums[j] = n2;
                nums[j + 1] = n1;
            }
        }
    }
    return nums;
}

const result = bubbleSort([5, 4, 1, 2, 3]);
console.log(result);
