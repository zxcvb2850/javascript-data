/**
 * 正则表达式匹配
 *   给你一个字符串  s  和一个字符规律  p，请你来实现一个支持 '.'  和  '*'  的正则表达式匹配。
 *   '.' 匹配任意单个字符
 *   '*' 匹配零个或多个前面的那一个元素
 *   所谓匹配，是要涵盖  整个  字符串  s的，而不是部分字符串。
 * */
const isMatch = (s: string, p: string): boolean => {
    // 直接用正则
    /*const reg = new RegExp(`\^${p}\$`);
    return reg.test(s);*/

    const sLen = s.length;
    const pLen = p.length;
    let sIndex = 0;
    let pIndex = 0;

    while (sIndex < sLen) {
        const s1 = s[sIndex];
        const p1 = p[pIndex];
        if (!p1) return false;
        /*if (s1 === p1) {
            sIndex++;
            pIndex++;
        } else if (p1 === '.') {
            sIndex++;
            pIndex++;
        } else if (p1 === '*') {
            if (s1 === p[pIndex - 1] || p[pIndex - 1] === '.') {
                sIndex++;
                pIndex++;
            } else {
                sIndex--;
                pIndex++;
            }
        } else {
            sIndex++;
            pIndex++;
        }*/

        if (p1 === '*' && s1 !== p[pIndex - 1] && p[pIndex - 1] !== '.') {
            sIndex--;
            pIndex++;
        } else {
            sIndex++;
            pIndex++;
        }
    }
    return sIndex === sLen;
}

const result = isMatch("aa", "a*");
console.log(result); // true

const result2 = isMatch("aaab", "a..*");
console.log(result2); // true

const result3 = isMatch("abv", ".*");
console.log(result3); // true

const result4 = isMatch("aa", "a");
console.log(result4); // false

const result5 = isMatch("abccd", "ab..dc*");
console.log(result5); // true

const result6 = isMatch("cccccccaab", "c*a.b");
console.log(result6); // true

const result7 = isMatch("aabd", ".*");
console.log(result7); // true
