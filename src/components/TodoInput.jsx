import { useState } from "react";
import "../App.css";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };
  return (
    <div className="input_container">
      <input
        type="text"
        className="input_box"
        placeholder="Ne yapıcaksın?"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      />
      <button
        className="input_button"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
