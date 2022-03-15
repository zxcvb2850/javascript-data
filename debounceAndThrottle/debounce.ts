/**
 * 函数防抖
 * */
const debounce = (fn: Function, delay = 300, immediate = false) => {
    let timer = null;
    return (...args) => {
        if (timer) clearTimeout(timer); // 清除定时器，但并不能清除赋值
        if (immediate) { // 立即执行
            const allNow = !timer; // 所以此处的 allNow 会出现 false;
            timer = setTimeout(() => {
                timer = null;
            }, delay);
            if (allNow) fn(...args);
        } else { // 非立即执行
            timer = setTimeout(() => {
                fn(...args);
            }, delay);
        }
    }
}


const result = debounce((a) => {
    console.log("-----------------", a);
}, 1000, true);

let num = 1;
result(num); // 1
result(++num);
setTimeout(() => result(++num), 900);
setTimeout(() => result(++num), 1800);
setTimeout(() => result(++num), 2900); // 3
setTimeout(() => console.log(num), 4000); // 3
