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
