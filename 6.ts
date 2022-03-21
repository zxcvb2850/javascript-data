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

    const len = s.length;
    if (len < 2 || numRows >= len) return s;
    const t = numRows * 2 - 2;

    const ans: string[] = [];
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < len - i; j += t) {
            ans.push(s[j + i]);
            if (i && i < numRows - 1 && j + t - i < len) {
                ans.push(s[j + t - i]);
            }
        }
    }
    return ans.join("");
}

const result = convert("ABCDEFG", 3);
console.log(result);

const result2 = convert("Apalindromeisaword,phrase,number,orothersequenceofunitsthatcanbereadthesamewayineitherdirection,withgeneralallowancesforadjustmentstopunctuationandworddividers.", 2);
console.log(result2); // Aaidoeswr,haenme,rtesqecouishtabrateaeaietedrcinwtgnrlloacsoajsmnsoucutoadodiiesplnrmiaodprs,ubroohreunefnttacneedhsmwynihrieto,iheeaalwnefrdutettpntainnwrdvdr.

const result3 = convert("A", 2);
console.log(result3);
