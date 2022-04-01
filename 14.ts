/**
 * 最长公共前缀
 *    编写一个函数来查找字符串数组中的最长公共前缀。
 *    如果不存在公共前缀，返回空字符串 ""。
 * */
const longestCommonPrefix = (strs: string[]): string => {
    /* 暴力解法 */
    const len = strs.length;
    let str = strs[0];
    for (let i = 1; i < len; i++) {
        const n = strs[i];
        if (!(n ?? "")) return "";
        if (n.length < str.length) {
            str = str.substring(0, n.length);
        }
        for (let j = 0; j < str.length; j++) {
            const s = n[j];
            if (str[j] !== s) {
                str = str.substring(0, j);
                break;
            }
        }
    }

    return str;

    /* 也属于暴力解法 */
    /*let min = strs[0].length;
    strs.forEach(n => min = Math.min(min, n.length));
    if (min < 1) return "";
    let str = strs[0].substring(0, min);
    for (let i = 0; i < strs.length; i++) {
        const n = strs[i];
        for (let j = 0; j < min; j++) {
            const s = n[j];
            if (str[j] !== s) {
                str = str.substring(0, j);
                break;
            }
        }
    }
    return str;*/
}

console.log(longestCommonPrefix(["flower", "flow", "flowflight"]));
console.log("============================");
console.log(longestCommonPrefix(["dog"]));
console.log("============================");
console.log(longestCommonPrefix(["dog", ""]));
console.log("============================");
console.log(longestCommonPrefix(["abc", "ba", "a"]));
