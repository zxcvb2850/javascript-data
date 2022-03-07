/**
 * 对称二叉树
 *  给你一个二叉树的根节点 root ， 检查它是否轴对称。
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

const isSymmetric = (root: BinaryTreeType): boolean => {
    if (!root) return true;

    const rec = (r1: BinaryTreeType, r2: BinaryTreeType): boolean => {
        if (!r1 && !r2) return true;
        if (!r1 || !r2 || r1.val !== r2.val) return false;
        return rec(r1.left, r2.right) && rec(r1.right, r2.left);
    }

    return rec(root.left, root.right);
};

// [1, 2, 2, 3, 4, 4, 3]
const result = isSymmetric(arrayToBinaryTree([1, 2, 2, 3, 4, 4, 3]));
console.log(result); // true

// [1, 2, 2, null, 3, null, 3]
const result2 = isSymmetric(arrayToBinaryTree([1, 2, 2, null, 3, null, 3]));
console.log(result2); // false
