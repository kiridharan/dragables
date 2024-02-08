import { Button } from "antd";
import React from "react";

interface ButtonDragProps {
  item: any;
  onDragStart: (event: any, nodeType: any) => void;
}

const ButtonDrag: React.FC<ButtonDragProps> = ({ item, onDragStart }) => {
  return (
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
  );
};

export default ButtonDrag;
