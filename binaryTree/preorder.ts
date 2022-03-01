import binaryTree, {BinaryTreeType} from "./index";

/**
 * 先序遍历二叉树
 * 1. 访问根节点
 * 2. 对根节点的左子树进行先序遍历
 * 3. 对根节点的右子树进行先序遍历
 * @param root {BinaryTreeType}
 * @return void
 */
const preorder = (root: BinaryTreeType): void => {
    if (!root) return;
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}

preorder(binaryTree);

console.log("-----------------------------------");

// 先序遍历二叉树 - 非递归
const preorderNotRecursive = (root: BinaryTreeType): void => {
    if(!root) return;
    const stack = [root];
    while (stack.length) {
        const n = stack.pop();
        console.log(n.val);
        n.right && stack.push(n.right);
        n.left && stack.push(n.left);
    }
};
preorderNotRecursive(binaryTree);
