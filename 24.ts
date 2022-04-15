/**
 * 两两交换链表中的节点
 *    给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
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

const swapPairs = (head: ListNodeType): ListNodeType => {
    /*const res = new ListNode(0);
    let p1 = res;
    let p = head;
    while (p) {
        if (p.next && p.next.val != null) {
            const o = new ListNode(p.val);
            const t = new ListNode(p.next.val);
            t.next = o;

            p1.next = t;
            p = p.next.next;
            p1 = p1.next.next;
        } else {
            break;
        }
    }
    p1.next = p;

    return res.next;*/

    /* 递归 */
    // 当链表为空或者链表的下一个为空时，直接返回该链表
    if (!head || !head.next) return head;

    // 当前链表指向下一个链表
    const next = head.next;

    // 下一个链表指向下下个链表
    head.next = swapPairs(next.next);

    // 下一个链表指向当前链表
    next.next = head;

    return next;
}

console.log(JSON.stringify(swapPairs(returnLinkedList([1, 2, 3]))));
console.log("============================");

console.log(JSON.stringify(swapPairs(returnLinkedList([]))));
console.log("============================");

console.log(JSON.stringify(swapPairs(returnLinkedList([1]))));
console.log("============================");

console.log(JSON.stringify(swapPairs(returnLinkedList([4, 0, 6, 2, 8]))));
console.log("============================");
