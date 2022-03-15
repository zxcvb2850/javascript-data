/**
 * promise.all
 * */
// Example
const p1 = new Promise(resolve => resolve(1));
const p2 = new Promise(resolve => {
    setTimeout(() => resolve(2), 1000);
});
const p3 = new Promise((resolve, reject) => resolve(3));
// const p3 = new Promise((resolve, reject) => reject(3));

Promise.all([p1, p2, p3]).then(res => {
    console.log("res", res);
}).catch(err => {
    console.log("err", err);
})

const promiseMyAll = (values: Promise<any>[]) => {
    return new Promise((resolve, reject) => {
        const result = [];
        let index = 0;

        values.forEach((item, i) => {
            item.then(res => {
                index++;
                result[i] = res;
                if (index === values.length) {
                    resolve(result)
                }
            }).catch(reject)
        })
    })
}

const result = promiseMyAll([p1, p2, p3]);
result.then(res => {
    console.log("--res--", res);
}).catch(err => {
    console.log("--err--", err);
})



