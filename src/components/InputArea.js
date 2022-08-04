import React, { useState } from "react";
import "../styles.css";

const InputArea = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const inputHandle = (e) => {
    const newValue = e.target.value;
    setEnteredText(newValue);
  };

  return (
    <div className="form">
      <input
        type="text"
        onChange={inputHandle}
        className="input"
        placeholder="Type your note"
        value={enteredText}
      />
      <button
        className="button"
        onClick={() => {
          props.inputHandle(enteredText);
          setEnteredText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default InputArea;
