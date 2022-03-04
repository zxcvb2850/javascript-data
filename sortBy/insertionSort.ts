/**
 * 插入排序
 */
const insertionSort = <T>(nums: T[]): T[] => {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        const temp = nums[i];
        let j = i;
        while (j > 0) {
            const n1 = nums[j - 1];
            if (n1 > temp) {
                nums[j] = n1
            } else {
                break;
            }
            j--;
        }
        nums[j] = temp;
        console.log("-")
    }
    return nums;
}

const result = insertionSort([5, 4, 1, 2, 3]);
console.log(result);