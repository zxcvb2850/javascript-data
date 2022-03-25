/**
 * 回文数
 *   给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 *   回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *   例如，121 是回文，而 123 不是。
 * */
const isPalindrome = (x: number): boolean => {
    if (x < 0 || (x && x % 10 === 0)) return false;
    if (x < 10) return true;

    let n = 0;
    let cur = x;
    while (cur > 0) {
        n = n * 10 + cur % 10;
        cur = ~~(cur / 10);
    }
    return x === n;
};

const result = isPalindrome(121);
console.log(result); // true

const result2 = isPalindrome(-121);
console.log(result2); // false

const result3 = isPalindrome(1);
console.log(result3); // true

const result4 = isPalindrome(10);
console.log(result4); // false

const result5 = isPalindrome(322222223);
console.log(result5); // true
