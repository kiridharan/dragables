import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { Input } from "antd";
import { HandleStyle } from "../Constant/StyleConstant";

function TextStartNode({ isConnectable }: { isConnectable: boolean }) {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      {/* <NodeResizer maxHeight={60} maxWidth={180} /> */}
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
          style={HandleStyle}
        />
      </div>
    </>
  );
}

export default TextStartNode;
