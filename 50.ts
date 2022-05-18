/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn ）。
 * */
const myPow = (x: number, n: number): number => {
    if (n === 0) return 1;
    // 负数幂 - 把负数变成正数
    if (n < 0) {
        return myPow(1 / x, -n);
    }
    // 奇数幂 - 把奇数变成偶数
    if (n % 2) {
        return x * myPow(x, n - 1);
    }

    // 偶数幂
    return myPow(x * x, n / 2);
}

console.log(myPow(2.00000, 10));
console.log("==========================");

console.log(myPow(2.10000, 3));
console.log("==========================");

console.log(myPow(2.00000, -2));
console.log("==========================");
