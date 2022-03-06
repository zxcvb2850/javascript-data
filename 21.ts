/**
 * 合并两个有序链表
 *  将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 */
import {ListNode, returnLinkedList} from "./linkedList";

const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
    const res = new ListNode(0);
    let p = res;
    let p1 = list1;
    let p2 = list2;
    while (p1 && p2) {
        if(p1.val < p2.val){
            p.next = p1;
            p1 = p1.next;
        } else {
            p.next = p2;
            p2 = p2.next;
        }
        p = p.next;
    }
    if (p1) {
        p.next = p1;
    }
    if (p2) {
        p.next = p2;
    }
    return res.next;
};

const result = mergeTwoLists(returnLinkedList([1,2,4]), returnLinkedList([1,3,4]));
console.log(JSON.stringify(result));