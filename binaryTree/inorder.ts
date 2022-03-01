import binaryTree, {BinaryTreeType} from "./index";

/**
 * 中序遍历二叉树
 * 1. 对根节点的左子树进行中序遍历
 * 2. 访问根节点
 * 3. 对根节点的右子树进行中序遍历
 * @param root
 */
const inorder = (root: BinaryTreeType) => {
    if (!root) return;
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}

inorder(binaryTree);

const inorderNotRecursive = (root: BinaryTreeType) => {
    if(!root) return;
    const stack: BinaryTreeType[] = [];
    let p = root;
    while (stack.length || p) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        console.log(n.val);
        p = n.right;
    }
};
inorderNotRecursive(binaryTree);
