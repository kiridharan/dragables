import { useState, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  //   applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  useNodesState,
  ControlButton,
} from "reactflow";
import "reactflow/dist/style.css";
import { nodeTypes } from "../NodeTypes/NodeTypes";
import { SunIcon } from "@radix-ui/react-icons";
const initialNodes = [
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
];

const initialEdges: any[] | (() => any[]) = [];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      console.log(type);
      const position = { x: event.clientX, y: event.clientY }; // Adjust position as needed
      const newNode = {
        id: `node-${initialNodes.length + 1}`, // Generate unique ID
        type,
        position,
        data: { value: 123 },
      };
      console.log(newNode);
      setNodes((nds: any) => nds.concat(newNode));
      onNodesChange;
    },
    [initialNodes]
  );

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
  }, []);
  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        // onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        fitView
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <Background />
        <Controls>
          <ControlButton
            onClick={() => alert("Something magical just happened. ✨")}
          >
            <SunIcon />
          </ControlButton>
        </Controls>
      </ReactFlow>
    </div>
  );
}

export default Flow;
