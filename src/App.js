import "./App.css";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState(["react öğren"]);

  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListtTodo = [...listTodo];
    newListtTodo.splice(key, 1);
    setListTodo([...newListtTodo]);
  };
  return (
    <div className="App">
      <div>
        <TodoInput addList={addList} />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
