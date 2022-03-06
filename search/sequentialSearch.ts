/*
* 顺序搜索
* */
const sequentialSearch = (nums: number[], target: number): number => {
    const len = nums.length;
    for (let i = 0; i < len; i++){
        if(nums[i] === target) {
            return i;
        }
    }
    return -1;
}

const result = sequentialSearch([5, 4, 1, 2, 3], 1);
console.log(result);
