import React from "react";

const Colorfull = (props) => {
  console.log(props);
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{props.children}</p>;
};

export default Colorfull;
