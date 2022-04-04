/**
 * 最接近的三数之和
 *    给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 *    返回这三个数的和。
 *    假定每组输入只存在恰好一个解。
 * */
const threeSumClosest = (nums: number[], target: number): number => {
    /* 暴力解法 - 及其不推荐 */
    /*let res = 0;
    let min: number | null = null;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                const n = nums[i];
                const m = nums[j];
                const o = nums[k];

                if (min === null || Math.abs(n + m + o - target) < Math.abs(min)) {
                    res = n + m + o;
                    min = Math.abs(n + m + o - target);
                }
            }
        }
    }
    return res;*/


    nums = nums.sort((a, b) => a - b);
    let min = null;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        let l = i + 1, r = len - 1;
        while (l < r) {
            const curTarget = nums[i] + nums[l] + nums[r];
            if (min === null || Math.abs(curTarget - target) < Math.abs(min - target)) {
                min = curTarget;
            }
            if (curTarget > target) {
                r--;
            } else if (curTarget < target) {
                l++;
            } else {
                return target;
            }
        }
    }
    return min;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log("=====================");

console.log(threeSumClosest([0, 0, 0], 1)); // 0
console.log("=====================");

console.log(threeSumClosest([1, 1, 1, 0], -100)); // 2
console.log("=====================");

console.log(threeSumClosest([0, 2, 1, -3], 1)); // 0
console.log("=====================");

console.log(threeSumClosest([1, 1, 1, 1], 1)); // 3
console.log("=====================");

console.log(threeSumClosest([-3, -2, -5, 3, -4], -1)); // -2
console.log("=====================");

console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82)); // 82
