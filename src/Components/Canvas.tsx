import { useState, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyEdgeChanges,
  addEdge,
  useNodesState,
  ReactFlowInstance,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import { nodeTypes } from "../NodeTypes/NodeTypes";
const initialNodes = [
  {
    id: "1",
    type: "textUpdater",
    data: { label: "input node" },
    position: { x: 250, y: 5 },
  },
];

const initialEdges: any[] | (() => any[]) = [];

function Flow() {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
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

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      if (!reactFlowInstance) {
        console.log("No reactFlowInstance");
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      console.log(position);
      const newNode = {
        id: Date.now().toString(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds: any) => nds.concat(newNode));
    },
    [reactFlowInstance, initialNodes]
  );

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
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
        onNodesChange={onNodesChange}
        onInit={(reactFlowInstance) => setReactFlowInstance(reactFlowInstance)}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
