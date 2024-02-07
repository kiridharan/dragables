import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { Flex, Input, Space } from "antd";

const handleStyle = { left: 10 };

function TextUpdaterNode({ isConnectable }: { isConnectable: boolean }) {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div
      style={{
        border: "1px solid #eee",
        padding: 10,
        borderRadius: 5,
        background: "white",
        height: "40",
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <Flex vertical={true}>
          {/* <input
            type="text"
            onChange={onChange}
            style={{ border: "none", textAlign: "center" }}
          /> */}
          <h1>Kiridharan</h1>
          <Input placeholder="Basic usage" onChange={onChange} />
          <Space size={1} />
          <Input placeholder="Basic usage" onChange={onChange} />
        </Flex>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default TextUpdaterNode;
