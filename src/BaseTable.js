import React from "react";
import { Divider } from "@mui/material";
import { Handle } from "react-flow-renderer";

// import { BaseField } from "./BaseField";
import "./my.css";

// export default memo(({ data, isConnectable }) => {
export default function BaseTable(data, isConnectable) {
  return (
    <>
      <div>
        <strong>TableName</strong>
        <Divider />
      </div>

      <div>
        <Handle
          type="target"
          position="left"
          id="a1"
          style={{
            // top: 40,
            background: "blue",
            margin: "5px",
            border: "1px solid #A0A0A0",
            width: "12px",
            height: "12px"
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
        />
        <span> field1 </span>
        <span> type </span>
        <span> primary key </span>
        <Handle
          type="source"
          position="right"
          id="a2"
          style={{
            // top: 40,
            background: "yellow",
            margin: "5px",
            border: "1px solid #A0A0A0",
            width: "12px",
            height: "12px"
          }}
          isConnectable={isConnectable}
        />
      </div>
      <div>
        <Handle
          type="target"
          position="left"
          id="a3"
          style={{
            // top: 60,
            background: "blue",
            margin: "5px",
            border: "1px solid #A0A0A0",
            width: "12px",
            height: "12px"
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
        />
        <span> field1 </span>
        <span> type </span>
        <span> primary key </span>
        <Handle
          type="source"
          position="right"
          id="a4"
          style={{
            // top: 60,
            background: "yellow",
            margin: "5px",
            border: "1px solid #A0A0A0",
            width: "12px",
            height: "12px"
          }}
          isConnectable={isConnectable}
        />
      </div>
    </>
  );
}
