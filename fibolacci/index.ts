/**
 * 斐波拉契
 *    计算前面的和
 * */
const count = 20;
// 递归的写法
const fibonacci = (num: number): number => {
    if (num <= 0) return 0;
    if (num === 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.time("fibonacci");
console.log(fibonacci(count));
console.log("==================");
console.timeEnd("fibonacci");

// 动态规划的写法
const fibonacci1 = (num: number): number => {
    if (num <= 0) return 0;
    if (num === 1) return 1;

    let n1 = 1;
    let n2 = 0;
    let res = 0;
    for (let i = 2; i <= num; i++) {
        res = n1 + n2;

        n2 = n1;
        n1 = res;
    }
    return res;
}

console.time("fibonacci1");
console.log(fibonacci1(count));
console.log("==================");
console.timeEnd("fibonacci1");
