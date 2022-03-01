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
