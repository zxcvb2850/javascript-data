/**
 * 实现 reduce 的功能
 * */
const myReduce = <T>(arr: any[], callback: (previousValue: T, currentValue: any, currentIndex: number, array: T[]) => T, initValue?: T): T => {
    let len = arr.length;
    let index = 0;
    let accumulator: T = null;
    if (initValue === undefined) {
        accumulator = arr[0];
        index++;
    } else {
        accumulator = initValue;
    }
    while (index < len) {
        const n = arr[index];
        accumulator = callback(accumulator, n, index, arr);
        index++;
    }
    return accumulator;
}

const arr = [{a: 1}, {a: 2}, {a: 3}];
const result = myReduce<number>(arr, (acc, cur) => acc + cur.a, 0);
console.log(result);
console.log("====================");

const arr2 = [1, 2, 3, 5, 4, 10, 6];
const result2 = myReduce(arr2, (acc, cur) => Math.max(acc, cur), arr2[0]);
console.log(result2);
console.log("====================");

const arr3 = [3, 4, 3, 6, 10, 4, 5];
const result3 = myReduce<number[]>(arr3, (acc, cur) => {
    if (acc.indexOf(cur) === -1) {
        acc.push(cur);
    }
    return acc;
}, []);
console.log(result3);
console.log("====================");

const arr4 = [
    {name: 'kobe', age: 24},
    {name: 'James', age: 23},
    {name: 'Jordon', age: 23},
    {name: 'George', age: 24}
];
const result4 = myReduce(arr4, (acc, cur) => {
    const key = cur.age;
    if (!(key in acc)) {
        acc[key] = [];
    }
    acc[key].push(cur);
    return acc;
}, {});
console.log(result4);
console.log("====================");

const arr5 = ['kobe', 'james', 'kobe', 'jim', 'wade', 'wade', 'kobe'];

const result5 = myReduce(arr5, (acc, cur) => {
    if (acc.has(cur)) {
        acc.set(cur, acc.get(cur) + 1);
    } else {
        acc.set(cur, 1);
    }
    return acc;
}, new Map());
console.log(result5);
console.log("====================");
