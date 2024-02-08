import "reactflow/dist/style.css";
import Flow from "./Components/Canvas";
import Layout from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Button, Space } from "antd";

const items = [
  {
    key: "1",
    label: "Text Updater",
  },
  {
    key: "2",
    label: "input",
  },
  {
    key: "3",
    label: "output",
  },
];

function App() {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    // <div style={{ height: "100%" }}>
    // </div>
    <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Sider collapsed={false} color="light">
        <div className="demo-logo-vertical" />

        <Space
          size={[8, 16]}
          wrap
          direction="vertical"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            padding: "2rem",
          }}
        >
          {items.map((item) => (
            <>
              <Button
                style={{
                  paddingLeft: "0.5rem",
                  width: "12rem", // Adjust width to your preference
                  height: "40px", // Adjust height to your preference
                  fontWeight: "bold",
                  color: "black",
                  border: "2px dashed black", // Adjust border thickness and color
                  borderRadius: "5px",
                  display: "flex", // Use flexbox to center text vertically and horizontally
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto", // Center
                }}
                type="dashed"
                key={item.key}
                onDragStart={(event) => onDragStart(event, item.label)}
                draggable
              >
                {item.label.toUpperCase()}
              </Button>
            </>
          ))}
        </Space>
      </Sider>
      <Layout>
        <Flow />
      </Layout>
    </Layout>
  );
}

export default App;
