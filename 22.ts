/**
 * 括号生成
 *    数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * */
const generateParenthesis = (n: number): string[] => {
    const res: string[] = [];
    const dfs = (res: string[], str: string, l: number, r: number) => {
        // 不满足有效条件，无需继续递归
        if (l > n || r > n || r > l) return;
        if (l === n && r === n) { // 当左右括号相同时，说明此轮递归已完成
            res.push(str);
            return;
        }

        dfs(res, str + "(", l + 1, r);
        dfs(res, str + ")", l, r + 1);
        return;
    };

    dfs(res, "", 0, 0);
    return res;
}

console.log(generateParenthesis(1));
console.log("======================"); // [ '()' ]

console.log(generateParenthesis(2));
console.log("======================"); // [ '(())', '()()' ]

console.log(generateParenthesis(3));
console.log("======================"); // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
