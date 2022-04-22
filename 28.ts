/**
 * 实现 strStr()
 *    实现 strStr() 函数。
 *    给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
 *
 *    说明：
 *    当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 *    对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。
 * */
const strStr = (haystack: string, needle: string): number => {
    const l = haystack.length, r = needle.length;

    if (!r) return 0;
    if (l < r) return -1;

    /* 永远的暴力解法 */
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < r; j++) {
            const n = haystack[i + j];
            const m = needle[j];
            if (n !== m) {
                break;
            }
            if (j === r - 1) {
                return i;
            }
        }
    }

    return -1;
}

console.log(strStr("hello", "ll"));
console.log("========================");

console.log(strStr("aaaaa", "bba"));
console.log("========================");

console.log(strStr("", ""));
console.log("========================");

console.log(strStr("bbb", "aasss"));
console.log("========================");

console.log(strStr("aaa", "aaaa"));
console.log("========================");

console.log(strStr("mississippi", "issip"));
console.log("========================");

console.log(strStr("aaa", "a"));
console.log("========================");