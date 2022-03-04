/**
 * 选择排序
 */
const selectionSort = <T>(nums: T[]): T[] => {
    const len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        let indexMin = i;
        for (let j = i; j < len; j++) {
            const n1 = nums[j];
            if (n1 < nums[indexMin]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            const temp = nums[i];
            nums[i] = nums[indexMin];
            nums[indexMin] = temp;
        }
    }
    return nums;
};

const result = selectionSort([5, 4, 1, 2, 3, 8, 5, 7, 79, 9]);
console.log(result);