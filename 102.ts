/**
 * 二叉树的层序遍历
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
 * @return {number[][]}
 */
// 深度遍历
const levelOrderDfs = (root: BinaryTreeType): number[][] => {
    const res: number[][] = [];

    const dfs = (data: BinaryTreeType, index = 0) => {
        if (!data) return;
        if (!res[index]) {
            res[index] = []
        }
        res[index].push(Number(data.val));
        if (data.left) dfs(data.left, index + 1);
        if (data.right) dfs(data.right, index + 1);
    }
    dfs(root);
    return res;
};
// 广度遍历
const levelOrderBfs = (root: BinaryTreeType): number[][] => {
    if (!root) return [];
    const q: BinaryTreeType[] = [root];
    const res: number[][] = [];
    while (q.length) {
        let len = q.length;
        res.push([]);
        while (len--) {
            const n: BinaryTreeType = q.shift();
            res[res.length - 1].push(Number(n.val));
            if (n.left) q.push(n.left);
            if (n.right) q.push(n.right);
        }
    }
    return res;
};

// [3, 9, 20, null, null, 15, 7]
const resultDfs = levelOrderDfs(arrayToBinaryTree([3, 9, 20, 6, 8, 15, 7]));
const resultBfs = levelOrderBfs(arrayToBinaryTree([3, 9, 20, 6, 8, 15, 7]));
console.log(resultDfs); // [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
console.log("-----------------------");
console.log(resultBfs); // [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
console.log("========================");

// [1]
const resultDfs2 = levelOrderDfs(arrayToBinaryTree([1]));
const resultBfs2 = levelOrderBfs(arrayToBinaryTree([1]));
console.log(resultDfs2); // [ [ 1 ] ]
console.log("-----------------------");
console.log(resultBfs2); // [ [ 1 ] ]
console.log("========================");

// []
const resultDfs3 = levelOrderDfs(arrayToBinaryTree([]));
const resultBfs3 = levelOrderBfs(arrayToBinaryTree([]));
console.log(resultDfs3); // []
console.log("-----------------------");
console.log(resultBfs3); // []
console.log("========================");
