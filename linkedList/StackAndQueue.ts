/**
 * 链表实现队列的效果
 *    队列：先进先出
 * */
import {ListNode, ListNodeType} from "./index";

class MyQueue {
    private head: ListNodeType;
    private tail: ListNodeType;
    private size = 0;

    push(linkNode: number): void {
        const newLinkNode = new ListNode(linkNode);
        if (!this.head) {
            this.head = newLinkNode;
        }

        const tailNode = this.tail;
        if (tailNode) {
            tailNode.next = newLinkNode;
        }
        this.tail = newLinkNode;

        this.size++;
    }

    unshift(): number | null {
        const headNode = this.head;
        if (this.head) {
            this.head = this.head.next;
            this.size--;
        }
        return headNode?.val || null;
    }

    getList(): ListNodeType{
        return this.head;
    }

    get length(): number {
        return this.size;
    }
}

const queue = new MyQueue();
queue.push(100);
queue.push(200);
queue.push(300);
console.log("length", queue.length); // 3
console.log("link", queue.getList()); // 100->200->300
console.log("unshift", queue.unshift()); // 100
console.log("length", queue.length); // 2
console.log("link", queue.getList()); // 200->300
console.log("unshift", queue.unshift()); // 200
console.log("length", queue.length); // 1
console.log("link", queue.getList()); // 300
console.log("unshift", queue.unshift()); // 300
console.log("length", queue.length); // 0
console.log("link", queue.getList()); // null
console.log("unshift", queue.unshift()); // null
console.log("length", queue.length); // 0
console.log("link", queue.getList()); // null
