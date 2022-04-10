/**
 * 删除链表的倒数第 N 个结点
 *    给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * */
import {ListNode, ListNodeType, returnLinkedList} from "./linkedList";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
const removeNthFromEnd = (head: ListNodeType, n: number): ListNodeType => {
    const res = new ListNode(1); // 创建新的链表是为了当只有一层链表时溢出的问题
    res.next = head;
    let p1 = res; // 双指针链表
    let p2 = res; // 两个链表的长度相同

    /* 双指针 - 快慢指针方 */
    for (let i = 0; i < n; i++) {
        p1 = p1.next; // p1 先跑完前 n 个
    }

    while (p1.next != null) { // 此时链表 p1 已跑完，
        p1 = p1.next;
        p2 = p2.next; // 此时 p2 的头部链表就是需要删除的结点
    }

    p2.next = p2.next.next;
    return res.next;

    /* 暴力解法 */
    /*let len = 0;
    while (p1) { // 获取链表的长度
        len++;
        p1 = p1.next;
    }

    const lastIndex = len - n - 1;

    for (let i = 0; i < lastIndex; i++) {
        p2 = p2.next; // 查询到需要删除的结点的链表头
    }
    p2.next = p2.next.next;
    return res.next;*/
}

console.log(JSON.stringify(removeNthFromEnd(returnLinkedList([1, 2, 3, 4, 5]), 2)));
console.log("=========================");
console.log(JSON.stringify(removeNthFromEnd(returnLinkedList([1]), 1)));
console.log("=========================");
console.log(JSON.stringify(removeNthFromEnd(returnLinkedList([1, 2]), 1)));
console.log("=========================");

// console.log(removeNthFromEnd(returnLinkedList([1]), 1));
// console.log("=========================");
//
// console.log(removeNthFromEnd(returnLinkedList([1, 2]), 1));
// console.log("=========================");