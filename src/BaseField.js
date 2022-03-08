import React from "react";
import { Input } from "@mui/material";

import { Handle } from "react-flow-renderer";
import "./my.css";

// export default memo(({ data, isConnectable }) => {
export default function BaseField(data, isConnectable) {
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      {/* <div>
        <strong>id </strong>
        <span> Integer </span>
        <span> Primary Key </span>
      </div> */}
      <input
        className="nodrag"
        type="color"
        onChange={data.onChange}
        defaultValue={data.color}
      />
      <Input
        className="nodrag"
        type="text"
        onChange={data.onChange}
        defaultValue={data.color}
      />
      <Handle
        type="source"
        position="right"
        id="a"
        style={{
          top: "middle",
          bottom: "auto",
          background: "yellow",
          margin: "5px",
          border: "1px solid #A0A0A0",
          width: "12px",
          height: "12px"
        }}
        isConnectable={isConnectable}
      />
    </>
  );
}
