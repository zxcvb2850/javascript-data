/**
 * K 个一组翻转链表
 *    给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 *    k 是一个正整数，它的值小于或等于链表的长度。
 *    如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 *    进阶：
 *    你可以设计一个只使用常数额外空间的算法来解决此问题吗？
 *    你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
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
 *
 if (!head || !head.next || !head.next.next) return head;

 const next = head.next.next;
 head.next.next = swapPairs(next.next);
 next.next = new ListNode(head.next.val);
 next.next = head;

 return next;
 */
const reverseKGroup = (head: ListNodeType, k: number): ListNodeType => {
    if(!head) return null;
    let start = head, end = head;

    for(let i = 0; i < k; i++) {
        // 如果在还没遍历到第 k 个，end 空了，即 head 链表个数不满足 k 个，直接返回原链表
        if(!end) {
            return head;
        } else {
            end = end.next;
        }
    }

    let newHead = reverse(start, end); // 左闭右开区间
    start.next = reverseKGroup(end, k); // 翻转以后，原本的 start 指向的结点，变到了 end 的前一个，直接 start.next 继续递归翻转后续的就行
    return newHead;
}
function reverse (head, end) {
    let p = head, q, newHead; // p 在前面，q 跟在 p 的后面
    while(p !== end) {
        q = p; // q 赋值会原链表 p 的位置
        p = p.next; // p 继续向后遍历
        q.next = newHead;
        newHead = q;
    }
    return newHead;
}

console.log(reverseKGroup(returnLinkedList([1, 2, 3, 4]), 4));
console.log("=======================");
