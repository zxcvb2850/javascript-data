/**
 * 反转字符串
 *    编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
 *
 *    不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * */
/**
 Do not return anything, modify s in-place instead.
 */
const reverseString = (s: string[]): string[] => {
    const len = s.length;
    let l = 0, r = len - 1;
    while (l < r) {
        [s[l], s[r]] = [s[r], s[l]]; // 交换位置

        l++;
        r--;
    }

    return s;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log("======================");

console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
console.log("======================");
