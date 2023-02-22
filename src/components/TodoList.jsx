import React from "react";
import { useState } from "react";
import "../App.css";

function TodoList(props) {
  const [agreement, setAgreement] = useState(false);
  const handleChange = (event) => {
    setAgreement({ ...agreement, [event.target.name]: event.target.checked });
  };

  return (
    <div className="list">
      <li className="list_li">
        <input
          type="checkbox"
          name="checkbox"
          value={agreement.checkbox}
          onChange={handleChange}
        />
        <p className={`${agreement.checkbox === true ? "line-through" : ""}`}>
          {props.item}
        </p>
        <span className="icons">
          <i
            className="fa-solid fa-trash-can"
            onClick={(e) => {
              props.deleteItem(props.index);
            }}
          ></i>
        </span>
      </li>
    </div>
  );
}

export default TodoList;
