/**
 * 手写 Promise
 * */
import validate = WebAssembly.validate;

enum PROMISE_STATS {
    PENDING = "PENDING",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED",
}

type MyPromiseResolve<T = any> = (value?: T) => void;

class MyPromise {
    public value;
    public reason;
    public status: PROMISE_STATS;
    public onFulfilledCallbacks;
    public onRejectedCallbacks;

    constructor(fn) {
        this.value = null;
        this.reason = null;
        this.status = PROMISE_STATS["PENDING"];

        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this.status === PROMISE_STATS["PENDING"]) {
                this.status = PROMISE_STATS["FULFILLED"];
                this.value = value;
                this.onFulfilledCallbacks.forEach(fn => fn(this.value));
            }
        }
        const reject = (reason) => {
            if (this.status === PROMISE_STATS["PENDING"]) {
                this.status = PROMISE_STATS["REJECTED"];
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn(this.reason));
            }
        }

        try {
            fn(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    public then(onFulfilled, onReject?) {
        onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value;
        onReject = typeof onReject === "function" ? onReject : reason => {
            throw new Error(reason)
        };
        const self = this;
        return new MyPromise((resolve, reject) => {
            const fulfilled = () => {
                try {
                    const result = onFulfilled(self.value);
                    return result instanceof MyPromise ? result.then(resolve, reject) : resolve(result);
                } catch (err) {
                    reject(err);
                }
            };
            const rejected = () => {
                try {
                    const result = onReject(self.reason);
                    return result instanceof MyPromise ? result.then(resolve, reject) : reject(result);
                } catch (err) {
                    reject(err);
                }
            };
            switch (self.status) {
                case PROMISE_STATS.PENDING:
                    self.onRejectedCallbacks.push(fulfilled);
                    self.onRejectedCallbacks.push(rejected);
                    break;
                case PROMISE_STATS.FULFILLED:
                    fulfilled();
                    break;
                case PROMISE_STATS.REJECTED:
                    rejected();
                    break;
            }
        })
    };

    public catch(onRejected) {
        return this.then(null, onRejected);
    };

    public static all(values) {
        return new MyPromise((resolve, reject) => {
            const len = values.length;
            let count = 0;
            const result = [];

            values.forEach((promiseInstance, index) => {
                MyPromise.resolve(promiseInstance).then(res => {
                    result[index] = res;
                    count++;
                    console.log("res", res);
                    if (count === len) {
                        resolve(result);
                    }
                }).catch(reject)
            })
        })
    };

    public static race(values) {
        return new MyPromise((resolve, reject) => {
            values.forEach(promiseInstance => {
                MyPromise.resolve(promiseInstance).then(resolve).catch(reject);
            });
        });
    };

    public static resolve(value) {
        if (value instanceof MyPromise) {
            return value;
        }
        return new MyPromise(resolve => resolve(value));
    };

    public static reject(reason) {
        return new MyPromise((resolve, reject) => reject(reason));
    };
}

const p1 = new MyPromise(resolve => {
    setTimeout(() => resolve(1), 1000);
});
/*const p2 = new MyPromise(resolve => {
    setTimeout(() => {
        resolve(2)
    }, 1000);
});
const p3 = new MyPromise(resolve => {
    setTimeout(() => {
        resolve(3)
    }, 1500);
});*/

/*p1.then(res=> {
    console.log("-----------------------------------", res)
})*/


MyPromise.all([p1, 2])
    .then(res => {
        console.log("=======", res);
    })

/*MyPromise.race([p1, p2, p3])
    .then(res => {
        console.log("res", res);
    })
    .catch(err => {
        console.log("err", er;
    })*/

