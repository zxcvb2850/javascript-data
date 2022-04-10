/**
 * 三数之和
 *    给你一个包含 n 个整数的数组  nums，判断  nums  中是否存在三个元素 a，b，c ，使得  a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 *    注意：答案中不可以包含重复的三元组。
 * */

const threeSum = (nums: number[]): number[][] => {
    nums = nums.sort((a, b) => a - b);

    const len = nums.length;
    const res: number[][] = [];
    /* 单指针遍历的方式 */
    /*for (let i = 0; i < len - 1; i++) {
        const n = nums[i];
        const n1 = nums[i - 1];
        if (i > 0 && n === n1) {
            continue;
        }
        let third = len - 1;
        const target = -nums[i];
        for (let j = i + 1; j < len; j++) {
            const m = nums[j];
            const m1 = nums[j - 1];
            if (j > i + 1 && m === m1) {
                continue;
            }
            while (j < third && m + nums[third] > target) {
                third--;
            }

            if (j === third) {
                break;
            }

            if (m + nums[third] === target) {
                res.push([n, m, nums[third]]);
            }
        }
    }*/

    /* 双指针遍历的方式 */
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) break;
        if (nums[i] === nums[i - 1]) continue;
        let l = i + 1;
        let r = len - 1;

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]])
                while (l < r && nums[l] === nums[l + 1]) l++; // 左指针的当前的值与后面的相同，跳过当前值
                while (l < r && nums[r] === nums[r - 1]) r--; // 右指针的当前的值与前面的相同，跳过当前值
                l++;
                r--;
            } else if (sum < 0) {
                l++; // 三数之和小于0，则说明左侧值过小
            } else {
                r--; // 三数之和大于0，则说明右侧值过大
            }
        }
    }

    return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log("========================");

console.log(threeSum([]));
console.log("========================");

console.log(threeSum([0, 0, 0, 0])); // [[0, 0, 0]]
console.log("========================");

console.log(threeSum([0, 0, 0]));
console.log("========================"); // [[0, 0, 0]]

console.log(threeSum([-2, 0, 0, 2, 2]));
console.log("========================"); // [[-2,0,2]]
