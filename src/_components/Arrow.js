//API URL
// https://eliav2.github.io/react-xarrows/
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import Xarrow from "react-xarrows";
import Draggable from "react-draggable";

const boxStyle = {
  position: "absolute",
  background: "white",
  border: "1px #999 solid",
  borderRadius: "10px",
  textAlign: "center",
  width: "100px",
  height: "30px",
  color: "black",
};

const canvasStyle = {
  width: "100%",
  height: "40vh",
  background: "white",
  overflow: "auto",
  display: "flex",
  position: "relative",
  color: "black",
};

const Box = (props) => {
  return (
    <Draggable onDrag={props.forceRerender} onStop={props.forceRerender}>
      <div
        ref={props.box.ref}
        id={props.box.id}
        style={{ ...boxStyle, left: props.box.x, top: props.box.y }}
      >
        {props.box.id}
      </div>
    </Draggable>
  );
};

const Example2 = () => {
  const [, setRender] = useState({});
  const forceRerender = () => setRender({});

  const box = {
    id: "box1",
    x: 20,
    y: 20,
    ref: useRef(null),
  };

  const box2 = {
    id: "box2",
    x: 320,
    y: 120,
    ref: useRef(null),
  };

  const [color, setColor] = useState("red");
  const [lineColor, setLineColor] = useState(null);
  const [headColor, setHeadColor] = useState("null");
  const [curveness, setCurveness] = useState(0.8);
  const [strokeWidth, setStrokeWidth] = useState(3);
  const [headSize, setHeadSize] = useState(6);
  const [startAnchor, setStartAnchor] = useState(["auto"]);
  const [endAnchor, setEndAnchor] = useState(["auto"]);
  const [dashed, setDashed] = useState(true);
  const [animation, setAnimation] = useState(2);
  const [pathGrid, setPathGrid] = useState("smooth");

  // this is the importent part of the example! play with the props to undestand better the API options
  var props = {
    start: "box1", //  can be string
    end: box2.ref, //  or reference
    startAnchor: startAnchor,
    endAnchor: endAnchor,
    curveness: Number(curveness),
    color: color,
    lineColor: lineColor,
    headColor: headColor,
    strokeWidth: Number(strokeWidth),
    headSize: Number(headSize),
    dashness: dashed ? { animation: Number(animation) } : false,
    path: pathGrid,
    // extendSVGcanvas: 500,
  };

  return (
    <div>
        <div>
          <div style={canvasStyle} id="canvas">
            <Box box={box} forceRerender={forceRerender} />
            <Box box={box2} forceRerender={forceRerender} />
            <Xarrow {...props} />
          </div>
          {/*what will happen if you will move Xarrow here? try!*/}
        </div>
    </div>
  );
};

export default Example2;
