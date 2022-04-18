/**
 * 删除有序数组中的重复项
 *    给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
 *    由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。
 *    将最终结果插入 nums 的前 k 个位置后返回 k 。
 *    不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 *    判题标准:
 *    系统会用下面的代码来测试你的题解:
 *    int[] nums = [...]; // 输入数组
 *    int[] expectedNums = [...]; // 长度正确的期望答案
 *    int k = removeDuplicates(nums); // 调用
 *    assert k == expectedNums.length;
 *    for (int i = 0; i < k; i++) {
 *       assert nums[i] == expectedNums[i];
 *    }
 *    如果所有断言都通过，那么您的题解将被 通过。
 * */
const removeDuplicates = (nums: number[]): number => {
    const len = nums.length;
    // 又是双指针
    let i = 0, j = 1;
    while (j < len) {
        const n = nums[i];
        const m = nums[j];
        if (n === m) {
            // 当相等时右指针向右移动
            j++;
        } else {
            // 当不相等时，两个指针都需要向右移动一格
            // 此时 i++ 必须在替换的前面，不然将会替换 i 的上一个值
            i++;
            nums[i] = m;
            j++;
        }
    }

    // i 是没有重复出现的自增，需要加上右指针的初始值
    return i + 1;
}

console.log(removeDuplicates([1, 1, 2]));
console.log("======================"); // 2 [1, 2, 2]

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log("======================"); // 5 [0, 1, 2, 3, 4]

console.log(removeDuplicates([1, 1, 1, 1, 1, 1]));
console.log("======================"); // 1 [1]
