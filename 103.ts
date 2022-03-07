/**
 * 二叉树的锯齿形层序遍历
 *  给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
import {arrayToBinaryTree, BinaryTreeType} from "./binaryTree";

const zigzagLevelOrder = (root: BinaryTreeType): number[][] => {
    if (!root) return [];
    const q = [root];
    const res: number[][] = [];
    let lr = false;
    while (q.length) {
        let len = q.length;
        let level = [];
        while (len--) {
            const n = q.shift();
            const index = level.length;
            level[lr ? len : index] = Number(n.val);
            if (n.left) q.push(n.left);
            if (n.right) q.push(n.right);
        }
        res.push(level);
        lr = !lr;
    }

    return res;
};

// [3, 9, 20, null, null, 15, 7]
const result = zigzagLevelOrder(arrayToBinaryTree([3, 9, 20, null, null, 15, 7]));
console.log("result", result); // [ [ 3 ], [ 20, 9 ], [ 15, 7 ] ]
console.log("==========================");

// [1, 2, 3, 4, null, null, 5]
const result2 = zigzagLevelOrder(arrayToBinaryTree([1, 2, 3, 4, null, null, 5]));
console.log("result", result2); // [ [ 1 ], [ 3, 2 ], [ 4, 5 ] ]
console.log("==========================");

// [1]
const result3 = zigzagLevelOrder(arrayToBinaryTree([1]));
console.log("result", result3); // [ [ 1 ] ]
console.log("==========================");

// []
const result4 = zigzagLevelOrder(arrayToBinaryTree([]));
console.log("result", result4); // []
console.log("==========================");
