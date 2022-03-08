/*
* 最长回文子串
* 给你一个字符串 s，找到 s 中最长的回文子串。
* */
const longestPalindrome = (s: string): string => {
    const len = s.length;
    if (len < 2) return s;

    let maxLen = 1;
    let begin = 0;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i; j < len; j++) {
            if (j - i + 1 > maxLen && validPalindromic(s, i, j)) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }

    return s.substring(begin, begin + maxLen);
}

const validPalindromic = (strArr: string, left: number, right: number): boolean => {
    while (left < right) {
        if (strArr[left] !== strArr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

const result = longestPalindrome('babab');
console.log(result);
