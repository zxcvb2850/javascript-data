/**
 * 整数转罗马数字
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
const intToRoman = (num: number): string => {
    // 枚举出特殊对应的列表
    const romans: { key: string, value: number }[] = [
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
    let str: string = "";
    for (let i = 0; i < romans.length; i++) {
        const n = romans[i];
        while (num > 0) {
            const remain = num - n.value;
            if (remain >= 0) {
                num -= n.value;
                str += n.key;
            } else {
                break;
            }
        }
    }
    return str;
}

const result = intToRoman(3);
console.log(result); // III

const result2 = intToRoman(4);
console.log(result2); // IV

const result3 = intToRoman(9);
console.log(result3); // IX

const result4 = intToRoman(59);
console.log(result4); // LIX

const result5 = intToRoman(1994);
console.log(result5); // MCMXCIV

const result6 = intToRoman(3999);
console.log(result6); // MMMCMXCIX