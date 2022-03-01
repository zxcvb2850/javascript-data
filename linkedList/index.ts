export interface ListNodeType {
    val: number
    next: ListNodeType | null;
}

export class ListNode implements ListNodeType{
    val: number
    next: ListNodeType | null

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}


export const returnLinkedList = (arr: number[]): ListNodeType => {
    const len = arr.length;
    let res = new ListNode(0);
    let temp = res;
    for (let i = 0; i< len; i++) {
        const item = arr[i];
        temp.next = new ListNode(item);
        temp = temp.next;
    }

    return res;
}