import React from "react";
import "./component.css";

const Title = (props) => {
  return (
    <div className="title-container">
      <h1 className="title">{props.title}</h1>
      <h4 className="sub-title">{props.subTitle}</h4>
    </div>
  );
};

export default Title;
