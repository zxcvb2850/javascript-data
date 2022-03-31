/**
 * 罗马数字转整数
 *    罗马数字包含以下七种字符：   I，   V，   X，   L，C，D   和   M。
 字符          数值
 I             1
 V             5
 X             10
 L             50
 C             100
 D             500
 M             1000
 *    例如， 罗马数字 2 写做   II   ，即为两个并列的 1。12 写做   XII   ，即为   X   +   II   。 27 写做      XXVII, 即为   XX   +   V   +   II   。
 *
 *    通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做   IIII，而是   IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为   IX。这个特殊的规则只适用于以下六种情况：
 *    I   可以放在   V   (5) 和   X   (10) 的左边，来表示 4 和 9。
 *    X   可以放在   L   (50) 和   C   (100) 的左边，来表示 40 和   90。
 *    C   可以放在   D   (500) 和   M   (1000) 的左边，来表示   400 和   900。
 *    给你一个整数，将其转为罗马数字。
 * */
const romanToInt = (s: string): number => {
    // 暴力解法
    // 枚举出特殊对应的列表
    /*const romans: { key: string, value: number }[] = [
        {key: "M", value: 1000},
        {key: "CM", value: 900},
        {key: "D", value: 500},
        {key: "CD", value: 400},
        {key: "C", value: 100},
        {key: "XC", value: 90},
        {key: "L", value: 50},
        {key: "XL", value: 40},
        {key: "X", value: 10},
        {key: "IX", value: 9},
        {key: "V", value: 5},
        {key: "IV", value: 4},
        {key: "I", value: 1},
    ]

    let sum = 0;
    for (let i = 0; i < romans.length; i++) {
        const n = romans[i];
        if (!s.length) break;
        while (true) {
            const find = s.indexOf(n.key);
            if (find === 0) {
                sum += n.value;
                s = s.substring(n.key.length, s.length);
            } else {
                break;
            }
        }
    }

    return sum;*/

    // 枚举对应的数字
    const romans = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    const len = s.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        const n = s[i];
        const value = romans[n];
        const next = romans[s[i + 1]] || 0;
        if (value < next) {
            // 罗马数字有一个规则，如果后面一个大于前面一个，则就是当前减去前面一个值
            sum -= value;
        } else {
            sum += value;
        }
    }

    return sum;
}

const result = romanToInt("III");
console.log(result); // 3

const result2 = romanToInt("LIX");
console.log(result2); // 59

const result3 = romanToInt("MCMXCIV");
console.log(result3); // 1994

const result4 = romanToInt("MMMCMXCIX");
console.log(result4); // 3999
