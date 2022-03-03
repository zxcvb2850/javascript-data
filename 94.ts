/**
 * 二叉树的中序遍历
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
 * @return {number[]}
 */
// 递归
const inorderTraversalRecursive = (root: BinaryTreeType): number[] => {
    const res: number[] = [];
    const inorder = (root: BinaryTreeType): void => {
        if (!root) return;
        inorder(root.left);
        res.push(Number(root.val));
        inorder(root.right);
    }
    inorder(root);
    return res;
};
// 非递归
const inorderTraversalNotRecursive = (root: BinaryTreeType): number[] => {
    const res: number[] = [];
    let p: BinaryTreeType = root;
    const stack: BinaryTreeType[] = [];

    while (stack.length || p) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        res.push(Number(n.val));
        p = n.right;
    }
    return res;
};

// [1, null, 2, 3]
const resultRecursive = inorderTraversalRecursive(arrayToBinaryTree([1, null, 2, 3]));
const result5NotRecursive = inorderTraversalNotRecursive(arrayToBinaryTree([1, null, 2, 3]));
console.log(resultRecursive); // [ 1, 3, 2 ]
console.log("-----------------------");
console.log(result5NotRecursive); // [ 2, 1 ]
console.log("========================");
//
// []
const result2Recursive = inorderTraversalRecursive(arrayToBinaryTree([]));
const result2NotRecursive = inorderTraversalRecursive(arrayToBinaryTree([]));
console.log(result2Recursive); // []
console.log("-----------------------");
console.log(result2NotRecursive); // []
console.log("========================");
//
// [1]
const result3Recursive = inorderTraversalRecursive(arrayToBinaryTree([1]));
const result3NotRecursive = inorderTraversalRecursive(arrayToBinaryTree([1]));
console.log(result3Recursive); // [ 1 ]
console.log("-----------------------");
console.log(result3NotRecursive); // [ 1 ]
console.log("========================");
//
// [1, 2]
const result4Recursive = inorderTraversalRecursive(arrayToBinaryTree([1, 2]));
const result4NotRecursive = inorderTraversalRecursive(arrayToBinaryTree([1, 2]));
console.log(result4Recursive); // [ 2, 1 ]
console.log("-----------------------");
console.log(result4NotRecursive); // [ 2, 1 ]
console.log("========================");
