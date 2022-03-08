import React, { useState, useEffect, useCallback } from "react";

import ReactFlow, {
  isEdge,
  removeElements,
  addEdge,
  Controls
} from "react-flow-renderer";

import ColorSelectorNode from "./ColorSelectorNode";
import CustomNodeExample from "./CustomNodeExample";
import AppDialog from "./AppDialog";

import "./index.css";
//import { FlashAutoRounded } from "@mui/icons-material";

const onNodeDragStop = (event, node) => console.log("drag stop", node);

function onElementClick(event, element) {
  console.log("click", element);
  //setDialogOpen(true);
}

const initBgColor = "#1A192B";

const connectionLineStyle = { stroke: "#fff" };
const snapGrid = [20, 20];
const nodeTypes = {
  selectorNode: ColorSelectorNode,
  customNode: CustomNodeExample
};

const CustomNodeFlow = () => {
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const [elements, setElements] = useState([]);
  const [bgColor, setBgColor] = useState(initBgColor);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const onChange = (event) => {
      setElements((els) =>
        els.map((e) => {
          if (isEdge(e) || e.id !== "2") {
            return e;
          }
          const color = event.target.value;
          setBgColor(color);
          return { ...e, data: { ...e.data, color } };
        })
      );
    };

    const onClickFt = (event) => {
      console.log("onClick");
      setDialogOpen(true);
      setElements();
    };

    setElements([
      {
        id: "1",
        type: "input",
        data: { label: "An input node" },
        position: { x: 0, y: 50 },
        sourcePosition: "right"
      },
      {
        id: "2",
        type: "selectorNode",
        data: { onChange: onChange, color: initBgColor },
        style: { border: "1px solid #777", padding: 10 },
        position: { x: 300, y: 50 }
      },
      {
        id: "3",
        type: "customNode",
        position: { x: 650, y: -100 },
        data: {
          onClick: onClickFt,
          text: "A custom node",
          label: "Output AAA",
          text2: "This is my text"
        },
        targetPosition: "left"
      },
      {
        id: "4",
        type: "output",
        data: { label: "Output B" },
        position: { x: 650, y: 100 },
        targetPosition: "left"
      },

      {
        id: "13",
        type: "output",
        data: { label: "test" },
        position: { x: 750, y: 200 },
        targetPosition: "left",
        style: { stroke: "#fff" }
      },
      {
        id: "e1-22",
        source: "2",
        target: "13",
        sourceHandle: "a",
        animated: true,
        style: { stroke: "#fff" }
      },
      {
        id: "e2a-3",
        source: "2",
        target: "3",
        sourceHandle: "a",
        animated: true,
        style: { stroke: "#fff" }
      },
      {
        id: "e2b-4",
        source: "2",
        target: "4",
        sourceHandle: "b",
        animated: true,
        style: { stroke: "#fff" }
      }
    ]);
  }, []);

  useEffect(() => {
    if (reactflowInstance && elements.length > 0) {
      reactflowInstance.fitView();
    }
  }, [reactflowInstance, elements.length]);

  const onElementsRemove = useCallback(
    (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els)),
    []
  );

  //called only when it is called by clicking
  const onConnect = useCallback(
    (params) =>
      setElements((els) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, els)
      ),
    []
  );

  // called when reactflowInstance changes
  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi);
        console.log("flow loaded:", rfi);
      }
    },
    [reactflowInstance]
  );

  // const onClickElementDelete = useCallback(() => {
  //   // Get all edges for the flow
  //     const edges = elements.filter((element) => isEdge(element));
  //     // Get edges connected to selected node
  //     const edgesToRemove = getConnectedEdges(state.clickedElement, edges);

  //     onElementsRemove([...state.clickedElement, ...edgesToRemove]);
  //   }, [elements, onElementsRemove, state.clickedElement]);

  return (
    <ReactFlow
      elements={elements}
      onElementClick={onElementClick}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onNodeDragStop={onNodeDragStop}
      style={{ background: bgColor }}
      onLoad={onLoad}
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      snapGrid={snapGrid}
      defaultZoom={1.5}
    >
      <Controls>
        {/* <Controls showInteractive={false}> */}
        {/* <ControlButton onClick={onElementsRemove}>
          <DeleteIcon />
        </ControlButton> */}
        <AppDialog open={dialogOpen} />
      </Controls>
    </ReactFlow>
  );
};

export default CustomNodeFlow;
