/**
 * 合并区间
 *    以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * */
const merge = (intervals: number[][]): number[][] => {
    intervals.sort((a, b) => a[0] - b[0]);
    const result: number[][] = [];
    let temp: number[] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const item = intervals[i];
        if (temp[1] >= item[0]) {
            temp[1] = Math.max(item[1], temp[1]);
        } else {
            result.push(temp);
            temp = item;
        }
    }

    result.push(temp);
    return result;
}

const result = merge([[1, 6], [2, 3], [2, 4], [15, 18]]);
console.log(result); // [ [ 1, 6 ], [ 15, 18 ] ]

const result2 = merge([[2, 3], [1, 6], [2, 4], [15, 18]]);
console.log(result2);  // [ [ 1, 6 ], [ 15, 18 ] ]

const result3 = merge([[1, 4], [4, 5]]);
console.log(result3); // [ [ 1, 5 ] ]
