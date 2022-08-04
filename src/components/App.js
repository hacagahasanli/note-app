import "../styles.css";
import React, { useState } from "react";
import InputArea from "./InputArea";
import TextArea from "./TextArea";

export default function App() {
  const [inputText, setInputText] = useState([]);

  const enteredTextHandle = (newText) => {
    setInputText((prevText) => {
      return [...prevText, newText];
    });
  };

  const deleteItem = (id) => {
    setInputText((prevText) => {
      return prevText.filter((text, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="delisov">
        <h2>Delisov</h2>
      </div>
      <InputArea inputHandle={enteredTextHandle} />
      <div>
        <ul>
          {inputText.map((toDoText, index) => (
            <TextArea
              id={index}
              key={index}
              text={toDoText}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
