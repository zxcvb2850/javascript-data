/**
 * 最长有效括号
 *    给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 * */
const longestValidParentheses = (s: string): number => {
    const stack = [-1];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        const n = s[i];
        if (n === "(") {
            stack.push(i);
        } else {
            stack.pop();
            if (!stack.length) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }

    return max;
};

console.log(longestValidParentheses("(()"));
console.log("=======================");

console.log(longestValidParentheses(")()())"));
console.log("=======================");

console.log(longestValidParentheses("(()()())"));
console.log("=======================");
