/**
 * 深度优先遍历
 */
import treeData, {TreeDataType} from "./treeData";

const dfs = (root: TreeDataType): void => {
    console.log(root.val);
    root.children.forEach(dfs);
}

dfs(treeData);
