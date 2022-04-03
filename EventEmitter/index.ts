interface EventsType {
    [event: string]: Function[]
}

/**
 * 发布订阅模式
 * */
class EventEmitter {
    private _events: EventsType;
    private static _instance: EventEmitter;

    constructor() {
        /**
         * 单例模式
         * */
        if (!EventEmitter._instance) {
            this._events = {};
            EventEmitter._instance = this;
        }
        return EventEmitter._instance;
    }

    /**
     * 添加事件监听
     * @param event 事件名
     * @param cb 回调方法
     * */
    on(event: string, cb: Function): EventEmitter {
        const query = this._events[event] || [];
        query.push(cb);
        this._events[event] = query;

        return this;
    }

    /**
     * 触发事件监听
     * @param event 事件名称
     * @param args 回调的附加参数
     * */
    emit(event: string, ...args) {
        const query = this._events[event]
        if (query && query.length) {
            query.forEach(cb => {
                cb(...args);
            })
        }

        return this;
    }

    /**
     * 执行一次的监听
     * @param event 事件名
     * @param cb 回调函数 由于内部对回调函数已做了二次封装，所以此处可以传入匿名函数
     * */
    once(event: string, cb: Function) {
        const tempFn = (...args) => {
            cb.call(this, ...args);
            this.off(event, tempFn);
        }
        this.on(event, tempFn);

        return this;
    }

    /**
     * 移除事件监听
     * @param event string 事件名称
     * @param cb function 回调函数 由于移除事件监听的方法是判断回调函数是否是原添加的回调函数，所以添加和移除的回调函数不是使用匿名函数
     * */
    off(event: string, cb: Function) {
        const query = this._events[event];
        query.forEach((fn, index) => {
            console.log(fn === cb);
            if (fn === cb) {
                query.splice(index, 1);
            }
        })
        this._events[event] = query;

        return this;
    }
}

const abc = new EventEmitter();
const bcd = new EventEmitter();
console.log(abc === bcd);

abc.on("SHOW_TITLE", (a, b) => {
    console.log("============", a, b, this);
})

const callback2 = (a, b) => {
    console.log("----------", a, b, this);
}
bcd.on("SHOW_TITLE", callback2);

bcd.once("SHOW_TITLE", (a, b) => {
    console.log("+++++++++", a, b);
});

setTimeout(() => {
    abc.emit("SHOW_TITLE", "1", "2");
}, 1000);

setTimeout(() => {
    bcd.off("SHOW_TITLE", callback2);
}, 3000);


setTimeout(() => {
    abc.emit("SHOW_TITLE", "3", "4");
}, 5000);
