/**
 * 函数节流
 * */
const throttle = (fn: Function, delay = 300) => {
    let timer = null;
    return (...args) => {
        if (!timer) {
            timer = setTimeout(() => {
                clearTimeout(timer);
                timer = null;
                fn(...args);
            }, delay);
        }
    }
}

const result = throttle((a) => {
    console.log("---------", a);
}, 1000);

let num = 1;
result(num);
result(++num);
setTimeout(() => {
    result(++num);
}, 1800);
