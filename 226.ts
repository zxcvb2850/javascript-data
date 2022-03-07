/**
 * 翻转二叉树
 *  给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
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

const invertTree = (root: BinaryTreeType): BinaryTreeType => {
    if (!root) return null;

    return {
        val: root.val,
        left: invertTree(root.right),
        right: invertTree(root.left),
    };
};

// [4,2,7,1,3,6,9]
const result = invertTree(arrayToBinaryTree([4, 2, 7, 1, 3, 6, 9]));
console.log(result); // [4,7,2,9,6,3,1]
console.log("===========================");

// [2,null,3]
const result2 = invertTree(arrayToBinaryTree([2, null, 3]));
console.log(result2); // [2,3,null]
console.log("===========================");
