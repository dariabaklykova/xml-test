import { CustomNode } from '.'
import { useState } from 'react'
import {
    Tree,
    getBackendOptions,
    MultiBackend,
} from "@minoru/react-dnd-treeview";
import { DndProvider } from "react-dnd";

export const NodeList = ({ nodes = [] }) => {
    const [treeData, setTreeData] = useState(nodes);
    const handleDrop = (newTreeData) => setTreeData(newTreeData)

    return <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <Tree
            tree={treeData}
            rootId={0}
            onDrop={handleDrop}
            render={(node, { depth, isOpen, onToggle }) =>
                <CustomNode node={node} depth={depth} onToggle={onToggle} isOpen={isOpen} />
            }
        />
    </DndProvider>
}