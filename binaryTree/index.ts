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

export const arrayToBinaryTree = (arr: number[]): BinaryTreeType => {
    if (arr.length == 0) {
        return null;
    }
    const root: BinaryTreeType = new TreeNode(arr[0]);
    // 是否是左孩子节点
    let isLChild = true;
    // 用数组的push和shift模拟队列
    const queue: BinaryTreeType[] = [];
    queue.push(root);

    // 从第二个节点开始遍历
    for (let i = 1; i < arr.length; i++) {
        // 从队列中取出第一个元素
        const node: BinaryTreeType = queue[0];
        if (isLChild) {
            if (arr[i] != null) {
                node.left = new TreeNode(arr[i]);
                //把 left 节点插入队列
                queue.push(node.left);
            }
            // left 完毕，开始处理 right
            isLChild = false;
        } else {
            if (arr[i] != null) {
                node.right = new TreeNode(arr[i]);
                // 把 right 节点插入队列
                queue.push(node.right);
            }
            // right 处理完毕，开始出队列
            queue.shift();
            isLChild = true;
        }
    }
    return root;
};

