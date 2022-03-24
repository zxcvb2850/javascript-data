/**
 * 字符串转换整数 (atoi)
 *   请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。
 *   函数 myAtoi(string s) 的算法如下：
 *   读入字符串并丢弃无用的前导空格
 *   检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
 *   读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
 *   将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
 *   如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
 *   返回整数作为最终结果。
 *   注意：
 *
 *   本题中的空白字符只包括空格字符 ' ' 。
 *   除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。
 * */
const myAtoi = (s: string): number => {
    let str: string = '';
    const len = s.length;
    for (let i = 0; i < len; i++) {
        const n = s[i];
        if (/\d/.test(n)) {
            str += n;
        } else {
            if (str.length) {
                break;
            } else {
                if (/(\+)|(\-)/.test(n)) {
                    str += n;
                } else if (/[^\s]/.test(n)) {
                    return 0;
                }
            }
        }
    }
    if (str.length < 1) return 0;
    let result = parseInt(str) || 0;
    if (result > Math.pow(2, 31) - 1) {
        result = Math.pow(2, 31) - 1;
    } else if (result < Math.pow(-2, 31)) {
        result = Math.pow(-2, 31);
    }
    return result;
}

const result = myAtoi("--11-1");
console.log(result); // 0

const result2 = myAtoi("   -42");
console.log(result2); // -42

const result3 = myAtoi("4193 with words");
console.log(result3); // 4193

const result4 = myAtoi("419-3 with words");
console.log(result4); // 419

const result5 = myAtoi("      2147483648aflsakdjfksdafjsdalk");
console.log(result5); // 2147483647

const result6 = myAtoi("words and 987");
console.log(result6); // 0
