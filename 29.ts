/**
 * 两数相除
 *    给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 *    返回被除数 dividend 除以除数 divisor 得到的商。
 *    整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
 * */
const divide = (dividend: number, divisor: number): number => {
    if (divisor === 0) return 0;
    const INT_MIN = Math.pow(-2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    if (dividend === INT_MIN) {
        if (divisor === 1) return INT_MIN;
        if (divisor === -1) return INT_MAX;
    }
    if (divisor === INT_MIN) return dividend === INT_MIN ? 1 : 0;

    let rev = false;
    if (dividend > 0) {
        dividend = -dividend;
        rev = !rev;
    }
    if (divisor > 0) {
        divisor = -divisor;
        rev = !rev;
    }

    let left = 1, right = INT_MAX, res = 0;
    while (left <= right) {
        // 注意溢出，并且不能使用除法
        const mid = left + ((right - left) >> 1);
        const check = quickAdd(divisor, mid, dividend);
        if (check) {
            res = mid;
            // 注意溢出
            if (mid === INT_MAX) {
                break;
            }
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return rev ? -res : res;
}

const quickAdd = (y, z, x) => {
    // x 和 y 是负数，z 是正数
    // 需要判断 z * y >= x 是否成立
    let result = 0, add = y;
    while (z !== 0) {
        if ((z & 1) !== 0) {
            if (result < x - add) {
                return false;
            }
            result += add;
        }
        if (z !== 1) {
            // 需要保证 add + add >= x
            if (add < x - add) {
                return false;
            }
            add += add;
        }
        // 不能使用除法
        z >>= 1;
    }
    return true;
}

console.log(divide(10, 3));
console.log("===================");

console.log(divide(7, -3));
console.log("===================");

console.log(divide(-2147483648, 1));
console.log("===================");

console.log(divide(Math.pow(2, 31) - 1, -2));
console.log("===================");

console.log(divide(2147483647, -2147483648));
console.log("===================");