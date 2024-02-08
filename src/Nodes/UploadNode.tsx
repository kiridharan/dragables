import { Handle, Position } from "reactflow";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Typography } from "antd";

const { Title } = Typography;

function UploadNode({ isConnectable }: { isConnectable: boolean }) {
  return (
    <>
      <div
        style={{
          border: "1px solid #eee",
          padding: 10,
          borderRadius: 5,
          background: "white",
          height: "8rem",
        }}
      >
        <Title level={5}>Upload Excel</Title>
        <Upload>
          <Button
            icon={<UploadOutlined />}
            style={{
              fontSize: ".4rem",
              width: "11rem",
              height: "1.4rem",
            }}
          >
            Click to Upload
          </Button>
        </Upload>

        <Handle
          type="source"
          position={Position.Bottom}
          id="b"
          isConnectable={isConnectable}
          style={{
            backgroundColor: "#784be8",
            width: "2rem",
            height: ".9rem",
            borderRadius: "3px",
            bottom: "-10px",
          }}
        />
      </div>
    </>
  );
}

export default UploadNode;
