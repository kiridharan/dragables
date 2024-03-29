import { useCallback } from "react";
import { Handle, NodeResizer, Position } from "reactflow";
import { Input } from "antd";

function TextUpdaterNode({ isConnectable }: { isConnectable: boolean }) {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <NodeResizer maxHeight={60} maxWidth={180} />
      <div
        style={{
          border: "1px solid #eee",
          padding: 10,
          borderRadius: 5,
          background: "white",
          minWidth: 100,
          minHeight: 40,
        }}
      >
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
          style={{
            backgroundColor: "#784be8",
            width: "30px",
            height: "14px",
            borderRadius: "3px",
            bottom: "-10px",
          }}
        />

        <Input
          placeholder="Text"
          onChange={onChange}
          style={{
            border: "none",
            textAlign: "center",
            width: "100%",
            fontWeight: "bold",
            color: "black",
          }}
        />

        <Handle
          type="source"
          position={Position.Bottom}
          id="b"
          isConnectable={isConnectable}
          style={{
            backgroundColor: "#784be8",
            width: "30px",
            height: "14px",
            borderRadius: "3px",
            bottom: "-10px",
          }}
        />
      </div>
    </>
  );
}

export default TextUpdaterNode;
