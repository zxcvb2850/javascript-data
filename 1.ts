/**
 * 两数之和
 *  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那两个整数，并返回它们的数组下标。
 *  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 *  你可以按任意顺序返回答案。
 * */
const twoSum = (nums: number[], target: number): number[] => {
    const map: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const diff = target - n;
        if (map.has(diff)) {
            return [map.get(diff), i];
        } else {
            map.set(n, i);
        }
    }
    return [];
}

const result = twoSum([2, 7, 11, 15], 9);
console.log(result); // [0, 1]

const result2 = twoSum([3, 2, 4], 6);
console.log(result2); // [1, 2]

const result3 = twoSum([3, 3], 6);
console.log(result3); // [0, 1]

const result4 = twoSum([], 6);
console.log(result4); // []