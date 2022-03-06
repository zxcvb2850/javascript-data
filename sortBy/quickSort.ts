/*
* 快速排序
*  1. 分区：从数组中任意选择一个“基准”，所有比基准小的元素都放在基准的前面，比基准大的元素放在基准的后面。
*  2. 递归：递归地对基准前后的字数组进行分区。
* */
const quickSort = <T>(nums: T[]): T[] => {
    const rec = (arr: T[]): T[] => {
        console.log(arr)
        if (arr.length <= 1) return arr;
        const mid = arr[0]; // 基准
        const left: T[] = [];
        const right: T[] = [];
        for (let i = 1; i < arr.length; i++) {
            const n = arr[i];
            if (n < mid) {
                left.push(n);
            } else {
                right.push(n);
            }
        }
        return [...(left.length ? rec(left) : []), mid, ...(right.length ? rec(right) : [])];
    };
    return rec(nums);
}

const result = quickSort([5, 4, 1, 2, 3])
// const result = quickSort([2, 4, 5, 3, 1])
console.log(result)