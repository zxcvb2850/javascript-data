/**
 * 蜡烛之间的盘子
 *   给你一个长桌子，桌子上盘子和蜡烛排成一列。给你一个下标从 0 开始的字符串 s ，它只包含字符 '*' 和 '|' ，其中 '*' 表示一个 盘子 ，'|' 表示一支 蜡烛 。
 *   同时给你一个下标从 0 开始的二维整数数组 queries ，其中 queries[i] = [lefti, righti] 表示 子字符串 s[lefti...righti] （包含左右端点的字符）。对于每个查询，你需要找到 子字符串中 在 两支蜡烛之间 的盘子的 数目 。如果一个盘子在 子字符串中 左边和右边 都 至少有一支蜡烛，那么这个盘子满足在 两支蜡烛之间 。
 *   比方说，s = "||**||**|*" ，查询 [3, 8] ，表示的是子字符串 "*||**|" 。子字符串中在两支蜡烛之间的盘子数目为 2 ，子字符串中右边两个盘子在它们左边和右边 都 至少有一支蜡烛。
 *   请你返回一个整数数组 answer ，其中 answer[i] 是第 i 个查询的答案。
 * */
const platesBetweenCandles = (s: string, queries: number[][]): number[] => {
    const res = [];
    const plates: number[] = []; // 记录当前位置之前所有盘子的数量
    const left: number[] = []; // 记录从左往右起始位置蜡烛的坐标
    const right: number[] = []; // 记录从右往左起始位置蜡烛的坐标
    let num = 0; // 盘子的数量
    let l = -1; // 左边蜡烛起始坐标
    let r = -1; // 右边蜡烛起始坐标
    const sLen = s.length; // 字符串长度
    for (let i = 0; i < sLen; i++) {
        if (s[i] === '*') {
            num++;
        }
        if (s[i] === '|') {
            l = i;
        }
        plates.push(num);
        left.push(l);
    }
    for (let i = sLen - 1; i >= 0; i--) {
        if (s[i] === '|') {
            r = i;
        }
        right[i] = r;
    }
    for (let i = 0; i < queries.length; i++) {
        const [l, r] = queries[i];
        /**
         * 为什么取下标的方向是相反的
         *  因为 left 的最右侧的 | 结尾的准确下标
         *  因为 right 的最左侧的 | 起始的准确下标
         * */
        const start = right[l];
        const end = left[r];
        res.push((start !== -1 && end !== -1 && start < end) ? plates[end] - plates[start] : 0);
    }
    return res;
};

const result = platesBetweenCandles("**|**|***|", [[2, 5], [5, 9]]);
console.log(result);
console.log("=======================");

const result2 = platesBetweenCandles("***|**|*****|**||**|*", [[1, 17], [4, 5], [14, 17], [5, 11], [15, 16]]);
console.log(result2);
console.log("=======================");
