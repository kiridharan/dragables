import "reactflow/dist/style.css";
import Flow from "./Components/Canvas";
import Layout from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Button, Space } from "antd";
import ButtonDrag from "./Components/Button";

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
              <ButtonDrag item={item} onDragStart={onDragStart} />
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
