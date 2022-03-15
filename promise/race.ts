/**
 * promise.race
 * */
// Example
const p1 = new Promise((resolve) => {
    setTimeout(() => resolve(1), 300);
})
const p2 = new Promise((resolve) => {
    setTimeout(() => resolve(2), 500);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(3), 700);
})
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => reject(3), 100);
})

Promise.race([p1, p2, 3]).then(res => {
    console.log("1 res:", res);
}).catch(err => {
    console.log("1 err:", err);
}); // 3

Promise.race([p1, p2]).then(res => {
    console.log("2 res: ", res);
}).catch(err => {
    console.log("2 err:", err);
}); // 1

Promise.race([p1, p2, p3]).then(res => {
    console.log("3 res:", res);
}).catch(err => {
    console.log("3 err:", err);
}); // 1

Promise.race([p1, p2, p3, p4]).then(res => {
    console.log("4 res:", res);
}).catch(err => {
    console.log("4 err:", err);
}); // 3


// 自定义 Promise race
const myRace = (values: (Promise<any> | any)[]) => {
    return new Promise((resolve, reject) => {
        values.forEach(itemPromise => {
            Promise.resolve(itemPromise).then(resolve).catch(reject);
        })
    })
};

myRace([p1, p2, 3]).then(res => {
    console.log("1 custom res:", res);
}).catch(err => {
    console.log("1 custom err:", err);
})

myRace([p1, p2]).then(res => {
    console.log("2 custom res: ", res);
}).catch(err => {
    console.log("2 custom err:", err);
}); // 1

myRace([p1, p2, p3]).then(res => {
    console.log("3 custom res:", res);
}).catch(err => {
    console.log("3 custom err:", err);
}); // 1

myRace([p1, p2, p3, p4]).then(res => {
    console.log("4 custom res:", res);
}).catch(err => {
    console.log("4 custom err:", err);
}); // 3
