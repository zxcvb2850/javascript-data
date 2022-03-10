/**
 * 反转链表
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
import {ListNodeType, returnLinkedList} from "./linkedList";

const reverseList = (head: ListNodeType): ListNodeType => {
    let p1 = head;
    let p2 = null;
    while (p1) {
        const tmp = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = tmp;
    }
    return p2;
};

const result = reverseList(returnLinkedList([1, 2, 3, 4, 5]));
console.log(result);
