import binaryTree, {BinaryTreeType} from "./index";

/**
 * 后序遍历二叉树
 * 1. 对根节点的左子树进行后序遍历
 * 2. 对根节点的右子树进行后序遍历
 * 3. 访问根节点
 * @param root
 */
const postorder = (root: BinaryTreeType): void => {
    if (!root) return;

    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}

// postorder(binaryTree);

// 后序遍历二叉树 - 非递归
const postorderNotRecursive = (root: BinaryTreeType): void => {
    if (!root) return;
    const stack: BinaryTreeType[] = [];
    let p = root;
    while (p) {
        stack.push(p);
        p = p.left;
    }
    console.log(stack);
}
postorderNotRecursive(binaryTree);
