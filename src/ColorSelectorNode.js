import React, { memo } from "react";
import { Input } from "@mui/material";

import { Handle } from "react-flow-renderer";
import "./my.css";

export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div>
        Custom Color Picker Node JJJ : <strong>{data.color}</strong>
      </div>
      <div>
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
      </div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: 10, bottom: "auto", background: "#555" }}
        isConnectable={isConnectable}
      />
    </>
  );
});
