/**
 *  电话号码的字母组合
 *     给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 *     给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * */
const letterCombinations = (digits: string): string[] => {
    const res: string[] = [];
    const len = digits.length;
    if (len < 1) return res;

    // 枚举所有按键对应个字母
    const dict = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "nmo",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    }

    /**
     * 递归函数 - 深度遍历
     * @param curStr 当前遍历的所有字母
     * @param index 当前在第几个指针
     * @return 返回所有的字母排列数组
     * */
    const dfs = (curStr: string, index: number) => {
        if (index > len - 1) {
            // 当前节点已遍历完成
            res.push(curStr);
            return;
        }

        // 当前字母
        const digit = dict[digits[index]];

        for (const item of digit) {
            dfs(curStr + item, index + 1);
        }
    }

    dfs("", 0);

    return res;
}

console.log(letterCombinations("234"));
console.log("======================");