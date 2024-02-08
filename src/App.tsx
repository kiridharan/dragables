import "reactflow/dist/style.css";
import Flow from "./Components/Canvas";
import Layout from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

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

        {items.map((item) => (
          <div
            style={{
              padding: "16px",
              fontSize: "14px",
              fontWeight: "bold",
              color: "white",
              borderBottom: "1px solid #f0f0f0",
            }}
            key={item.key}
            onDragStart={(event) => onDragStart(event, item.label)}
            draggable
          >
            {item.label.toUpperCase()}
          </div>
        ))}
      </Sider>
      <Layout>
        <Flow />
      </Layout>
    </Layout>
  );
}

export default App;
