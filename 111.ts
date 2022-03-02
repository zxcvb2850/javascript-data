/**
 * 二叉树的最小深度
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明：叶子节点是指没有子节点的节点。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import {arrayToBST, BinaryTreeType} from "./binaryTree";

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = (root: BinaryTreeType): number => {
    if (!root) return 0;
    let res = 0;

    const q: [BinaryTreeType, number][] = [[root, 1]];
    while (q.length) {
        const [n, l] = q.shift();
        if (!n.left && !n.right) {
            return l;
        }
        if (n.left) q.push([n.left, l + 1]);
        if (n.right) q.push([n.right, l + 1]);
    }

    return 1;
};

// [3,9,20,null,null,15,7]
// console.log(minDepth(arrayToBST([3, 9, 20, null, null, 15, 7]))); // 2
//
// [2,null,3,null,4,null,5,null,6]
// console.log(minDepth(arrayToBST([2, null, 3, null, 4, null, 5, null, 6]))); // 5

const arr = [2, null, 3, null, 4, null, 5, null, 6];
const obj: BinaryTreeType = {
    val: 2,
    left: null,
    right: {
        val: 3,
        left: null,
        right: {
            val: 4,
            left: null,
            right: {
                val: 5,
                left: null,
                right: {
                    val: 6,
                    left: null,
                    right: {
                        val: 6,
                        left: null,
                        right: null,
                    }
                }
            }
        }
    },
}
// 数组转二叉树
const ArrayTOBinomialTree = (arr: number[] | null[]) => {
}

