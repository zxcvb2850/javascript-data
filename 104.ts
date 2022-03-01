/**
 * 二叉树的最大深度
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
const maxDepth = (root: BinaryTreeType): number => {
    let max = 0;
    const dfs = (data: BinaryTreeType, index = 1) => {
        if (!data) return;
        if (!data.left && !data.right) {
            max = Math.max(max, index);
        }
        data.left && dfs(data.left, index + 1);
        data.right && dfs(data.right, index + 1);
    };
    dfs(root);
    return max;
};
/**
 * 递归的方式
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth2 = (root: BinaryTreeType): number => {
    if (root == null) return 0;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};

// [3,9,20,null,null,15,7]
const result = arrayToBST([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(result)); // 3
// []
const result2 = arrayToBST([]);
console.log(maxDepth2(result2)); // 0