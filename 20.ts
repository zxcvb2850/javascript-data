/**
 * 有效的括号
 *  给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串 s ，判断字符串是否有效。
 *  有效字符串需满足：
 *  左括号必须用相同类型的右括号闭合。
 *  左括号必须以正确的顺序闭合。
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s: string): boolean => {
    const len = s.length;
    const map: Map<string, string> = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');
    const stack: string[] = [];
    for (let i = 0; i < len; i++) {
        const n = s[i];
        if (map.has(n)) {
            stack.push(n);
        } else {
            const t = stack.pop();
            if (map.get(t) !== n) {
                return false;
            }
        }
    }
    return !stack.length;
};
// ()[]{}
const result = isValid("()[]{}");
console.log(result); // true

// (]
const result2 = isValid("(]");
console.log(result2);