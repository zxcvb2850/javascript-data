/*
* 最长回文子串
* 给你一个字符串 s，找到 s 中最长的回文子串。
* */
// 暴力解法
/*const longestPalindrome = (s: string): string => {
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
}*/

// 中心扩散
/*const longestPalindrome = (s: string): string => {
    const len = s.length;
    if (len < 2) return s;

    let maxLen = 1;
    let begin = 0;
    for (let i = 0; i < len - 1; i++) {
        const eventValid = validPalindromic(s, i, i);
        const oddValid = validPalindromic(s, i, i + 1);
        const max = Math.max(eventValid, oddValid);
        if (max > maxLen) {
            maxLen = max;
            begin = i - Math.floor((maxLen - 1) / 2);
        }
    }
    return s.substring(begin, begin + maxLen);
}

const validPalindromic = (s: string, l: number, r: number): number => {
    let left: number = l;
    let right: number = r;
    const len = s.length;
    while (left >= 0 && right < len && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}*/

// 动态规划
const longestPalindrome = (s: string): string => {
    const len = s.length;
    if (len < 2) return s;

    let maxLen = 1;
    let begin = 0;
    const dp = [];
    for (let k = 0; k < len; k++) {
        dp[k] = [];
        dp[k][k] = true;
    }

    for (let j = 1; j < len; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] !== s[j]) {
                dp[i][j] = false;
            } else {
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }

            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    return s.substring(begin, begin + maxLen);
}

const result = longestPalindrome('aba');
console.log(result);
