/**
 * 相同的树
 *  给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
 *  如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
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

const isSameTree = (p: BinaryTreeType, q: BinaryTreeType): boolean => {
    if (!p && !q) return true;
    return !!(p && q && p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right))
};

// [1, 2, 3] [1, 2, 3]
const result = isSameTree(arrayToBinaryTree([1, 2, 3]), arrayToBinaryTree([1, 2, 3]));
console.log(result); // true

// [1, 2] [1, null, 2]
const result2 = isSameTree(arrayToBinaryTree([1, 2]), arrayToBinaryTree([1, null, 2]));
console.log(result2); // false

//  [1, 2, 1] [1, 1, 2]
const result3 = isSameTree(arrayToBinaryTree([1, 2]), arrayToBinaryTree([1, null, 2]));
console.log(result3); // false
