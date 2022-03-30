/**
 *  Z 字形变换
 * */
const convert = (s: string, numRows: number): string => {
    /*const res: string[][] = [];
    const len = s.length;
    if (len < 2 || numRows < 2 || len < numRows) return s;
    let direction = 1;
    let num = -1;
    for (let j = 0; j < len; j++) {
        if (num <= 0) {
            direction = 1;
        }
        if (num >= numRows - 1) {
            direction = -1;
        }
        num = num + direction;
        if (!res[num]) res[num] = [];
        res[num].push(s[j]);
    }

    let str = "";
    res.forEach(item => {
        str += item.join("");
    })
    return str;*/

    const n = s.length, r = numRows;
    if (r === 1 || r >= n) {
        return s;
    }
    const t = r * 2 - 2;
    const ans: string[] = [];
    for (let i = 0; i < r; i++) { // 枚举矩阵的行
        for (let j = 0; j < n - i; j += t) { // 枚举每个周期的起始下标
            ans.push(s[j + i]); // 当前周期的第一个字符
            if (0 < i && i < r - 1 && j + t - i < n) {
                ans.push(s[j + t - i]); // 当前周期的第二个字符
            }
        }
    }
    return ans.join('');
}

const result = convert("ABCDEFG", 3);
console.log(result);

const result2 = convert("Apalindromeisaword,phrase,number,orothersequenceofunitsthatcanbereadthesamewayineitherdirection,withgeneralallowancesforadjustmentstopunctuationandworddividers.", 2);
console.log(result2); // Aaidoeswr,haenme,rtesqecouishtabrateaeaietedrcinwtgnrlloacsoajsmnsoucutoadodiiesplnrmiaodprs,ubroohreunefnttacneedhsmwynihrieto,iheeaalwnefrdutettpntainnwrdvdr.

const result3 = convert("AB", 2);
console.log(result3);
