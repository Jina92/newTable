import React from "react";
import { Handle, Position } from "react-flow-renderer";
import IconButton from "@mui/material/IconButton";
import Done from "@mui/icons-material/Done";

const customNodeStyles = {
  background: "#9CA8B3",
  color: "#FFF",
  padding: 10
};

const CustomNodeComponent = ({ data }) => {
  return (
    <div style={customNodeStyles}>
      <Handle
        type="target"
        position={Position.Left}
        style={{ borderRadius: 0 }}
      />
      <div>{data.label} </div>
      <br />
      <div>{data.text} </div>
      <div>{data.text2} </div>
      <IconButton onClick={data.onClick}>
        {/* <IconButton onClick={onClickFt}> */}
        <Done />
      </IconButton>

      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: "30%", borderRadius: 0 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: "70%", borderRadius: 0 }}
      />
    </div>
  );
};

export default CustomNodeComponent;
