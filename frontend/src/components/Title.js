import React from "react";

const Title = (props) => {
  return (
    <div className="title">
      <div>{props.text}</div>
      <div className="shadow-1">{props.text}</div>
      <div className="shadow-2">{props.text}</div>
    </div>
  );
};

export default Title;
