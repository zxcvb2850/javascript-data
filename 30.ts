/**
 * 串联所有单词的子串
 *    给定一个字符串 s 和一些 长度相同 的单词 words 。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 *    注意子串要与 words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 words 中单词串联的顺序。
 * */
const findSubstring = (s: string, words: string[]): number[] => {
    /* 暴力解法 - 完全不推荐 */
    /*const res: number[] = [];
    if (!words.length) return res;
    const len = s.length;
    const wordLen = words[0].length;
    const wordAllLen = wordLen * words.length;
    const wordMap = {};
    for (const w of words) {
        wordMap[w] ? wordMap[w]++ : wordMap[w] = 1;
    }
    for (let i = 0; i <= len - wordAllLen; i++) {
        const vm = {...wordMap};
        for (let j = i; j <= i + wordAllLen - wordLen; j += wordLen) {
            const w = s.slice(j, j + wordLen);
            if (vm[w]) {
                vm[w]--;
            } else {
                break;
            }
        }
        Object.values(vm).every(n => n === 0) && res.push(i);
    }
    return res;*/

    /* 又是一个暴力解法 - 依旧是不推荐 */
    const res: number[] = [];
    if (!words.length) return res;
    const wordItemLen = words[0].length;
    const wordLen = wordItemLen * words.length;
    const len = s.length;
    for (let i = 0; i <= len - wordLen; i++) {
        let curStr = s.substr(i, wordLen);
        let isExist = false;

        let cp = [...words];
        for (let j = 0; j < curStr.length; j += wordItemLen) {
            const w = curStr.slice(j, j + wordItemLen);
            const index = cp.indexOf(w);
            if (index === -1) {
                isExist = false;
                break;
            } else {
                isExist = true;
                cp.splice(index, 1);
            }
        }


        isExist && res.push(i);
    }
    return res;
}

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
console.log("======================"); // [0, 9]

console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]));
console.log("======================"); // []

console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
console.log("======================"); // [6, 9, 12]

console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]));
console.log("======================"); // [8]

console.log(findSubstring("ababaab", ["ab", "ba", "ba"]));
console.log("======================"); // [1]
