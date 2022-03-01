/**
 * 广度遍历
 * 1. 新建一个队列，把根节点入队
 * 2. 把队头出队并访问
 * 3. 把对头的 children 挨个入队
 * 4. 重复2、3步，直到队列为空
 */
import treeData, {TreeDataType} from "./treeData";

const bfs = (root: TreeDataType) => {
    const q = [root];
    while (q.length) {
        const n = q.shift();
        console.log(n.val);
        n.children.forEach(child => {
            q.push(child);
        })
    }
}

bfs(treeData);
