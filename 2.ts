import {ListNode, ListNodeType, returnLinkedList} from "./linkedList";
/**
 * 两数相加
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1: ListNodeType, l2: ListNodeType): ListNodeType => {
    const l3 = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let over = 0

    while (p1 || p2) {
        const c1 = p1 ? p1.val : 0;
        const c2 = p2 ? p2.val : 0;
        const target = c1 + c2 + over;
        over = Math.floor(target / 10);
        const val = target % 10;
        p3.next = new ListNode(val);
        if(p1) p1= p1.next;
        if(p2) p2 = p2.next;
        p3 = p3.next;
    }
    if (over) {
        p3.next = new ListNode(over);
    }

    return l3.next;
};
// [2, 4, 3]
// [5, 6, 4]
const result = addTwoNumbers(returnLinkedList([2, 4, 3]), returnLinkedList([5, 6, 4]));
console.log(result.next);