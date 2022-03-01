/**
 * 数据结构 - 树
 */

export interface TreeDataType {
    val: string | number;
    children: TreeDataType[];
}

const treeData: TreeDataType = {
    val: "a",
    children: [
        {
            val: "b",
            children: [
                {
                    val: "d",
                    children: [],
                },
                {
                    val: "e",
                    children: [],
                },
            ],
        },
        {
            val: "c",
            children: [
                {
                    val: "f",
                    children: [],
                },
                {
                    val: "g",
                    children: [],
                },
            ],
        },
    ]
}

export default treeData;
