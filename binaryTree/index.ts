export interface BinaryTreeType {
    val: string | number,
    left: BinaryTreeType,
    right: BinaryTreeType,
}

/**
 * 二叉树
 *    树中每个节点最多只能有两个子节点
 */
const binaryTree: BinaryTreeType = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: {
            val: 5,
            left: null,
            right: null,
        },
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    }
}

export default binaryTree;

class TreeNode implements BinaryTreeType {
    val: string | number;
    left: BinaryTreeType;
    right: BinaryTreeType

    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export const arrayToBST = (arr: number[] | null[], index = 0): BinaryTreeType => {
    if (index > arr.length) return;
    const root = new TreeNode(arr[index]);
    root.left = arr[2 * index + 1] ? arrayToBST(arr, 2 * index + 1) : null;
    root.right = arr[2 * index + 2] ? arrayToBST(arr, 2 * index + 2) : null;
    return root;
}

