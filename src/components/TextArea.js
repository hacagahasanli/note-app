import React from "react";
import "../styles.css";
const TextArea = (props) => {
  return (
    <div
      className="listContainer"
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
};

export default TextArea;
