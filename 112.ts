/**
 * 路径总和
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import {arrayToBinaryTree, BinaryTreeType} from "./binaryTree";

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root: BinaryTreeType, targetSum: number): boolean => {
    if (!root) return false;
    let res = false;
    const dfs = (data: BinaryTreeType, val: number): void => {
        // 只有在叶子节点的时候才去判断值是否相等
        if (!data.left && !data.right && val === targetSum) res = true;
        if (data.left) dfs(data.left, val + Number(data.left.val));
        if (data.right) dfs(data.right, val + Number(data.right.val));
    }
    dfs(root, Number(root.val));
    return res;
}

// [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1] 22
const result = hasPathSum(arrayToBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22);
console.log(result); // true

// [1, 2, 3, null, 6, null, 7] 11
const result2 = hasPathSum(arrayToBinaryTree([1, 2, 3, null, 6, null, 7]), 11);
console.log(result2); // true

// [1, 2, 3] 5
const result3 = hasPathSum(arrayToBinaryTree([1,2,3]), 5);
console.log(result3); // false
