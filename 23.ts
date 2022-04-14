/**
 * 合并K个升序链表
 *    给你一个链表数组，每个链表都已经按升序排列。
 *    请你将所有链表合并到一个升序链表中，返回合并后的链表。
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
// 分而治之的思想
const mergeKLists = (lists: ListNodeType[]): ListNodeType => {
    const len = lists.length;
    if (len < 1) return null;
    // 递归拆分链表数组 - 分
    const mergeList = (list: ListNodeType[], start: number, end: number): ListNodeType => {

        if (end - start < 1) {
            return list[start];
        }
        const mid = start + ~~((end - start) / 2);
        const left = mergeList(list, start, mid);
        const right = mergeList(list, mid + 1, end);
        return merge(left, right);
    }

    // 合并两个链表 - 合
    const merge = (p1: ListNodeType, p2: ListNodeType): ListNodeType => {
        const temp = new ListNode(0);
        let p: ListNodeType = temp;
        while (p1 && p2) {
            if (p1.val < p2.val) {
                p.next = p1;
                p1 = p1.next;
            } else {
                p.next = p2;
                p2 = p2.next;
            }
            p = p.next;
        }

        /*
        * 将剩下的内容推入链表结尾
        * 因为是有序的，所以无需考虑只剩下链表排序问题
        * */
        p.next = p1 ? p1 : p2;
        return temp.next;
    }

    return mergeList(lists, 0, len - 1);
}

console.log(JSON.stringify(mergeKLists([[6, 7], [1, 6, 8], [3, 5, 7]].map(item => returnLinkedList(item)))));
console.log("========================"); // {"val":1,"next":{"val":3,"next":{"val":5,"next":{"val":6,"next":{"val":6,"next":{"val":7,"next":{"val":7,"next":{"val":8,"next":null}}}}}}}}

console.log(JSON.stringify(mergeKLists([].map(item => returnLinkedList(item)))));
console.log("========================"); // null

console.log(JSON.stringify(mergeKLists([[]].map(item => returnLinkedList(item)))));
console.log("========================"); // null

console.log(JSON.stringify(mergeKLists([[1, 2]].map(item => returnLinkedList(item)))));
console.log("========================"); // {"val":1,"next":{"val":2,"next":null}}

console.log(JSON.stringify(mergeKLists([[2], [1]].map(item => returnLinkedList(item)))));
console.log("========================"); // {"val":1,"next":{"val":2,"next":null}}

console.log(JSON.stringify(mergeKLists([[1], [-1, 5, 11], [2], [6, 10]].map(item => returnLinkedList(item)))));
console.log("========================"); // {"val":-1,"next":{"val":1,"next":{"val":2,"next":{"val":5,"next":{"val":6,"next":{"val":10,"next":{"val":11,"next":null}}}}}}}
