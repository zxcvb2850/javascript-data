/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s: string): number => {
    const len = s.length;
    let left = 0; // 左指针
    let right = 0; // 右指针
    let max = 0; // 最大长度
    let map = new Map(); // 保存字母的字典
    while (right < len) {
        const item = s[right];
        if (map.has(item) && map.get(item) > left) {
            left = map.get(item) + 1; // 移动左指针
        }
        max = Math.max(max, right - left + 1);
        map.set(item, right);
        right++;
    }
    return max;
}

lengthOfLongestSubstring("abcabcab");