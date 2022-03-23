/**
 * 整数反转
 *    给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 *    如果反转后整数超过 32 位的有符号整数的范围 [−2^31, 2^31− 1] ，就返回 0。
 *    假设环境不允许存储 64 位整数（有符号或无符号）。
 * */
const reverse = (x: number): number => {
    let n: number = 0;
    while (x != 0) {
        n = n * 10 + x % 10;
        x = ~~(x / 10);
        if (n < Math.pow(-2, 31) || n > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return n;
};

const result = reverse(123);
console.log(result); // 321

const result2 = reverse(-321);
console.log(result2); //  -123

const result3 = reverse(1147483648);
console.log(result3); //  0
