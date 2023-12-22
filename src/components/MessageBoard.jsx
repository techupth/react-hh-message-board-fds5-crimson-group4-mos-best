import { useState } from "react";

function MessageBoard() {
  const [todo, setTodo] = useState([]);
  const [todoText, setTodoText] = useState("");
  const handleTodoTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const addtodo = (event) => {
    event.preventDefault();
    const newTodo = [...todo];
    newTodo.push(todoText);
    setTodo(newTodo);
  };

  const deleteTodo = (todoIndex) => {
    const newTodo = [...todo];
    newTodo.splice(todoIndex, 1);
    setTodo(newTodo);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleTodoTextChange}
            value={todoText}
          />
        </label>
        <button className="submit-message-button" onClick={addtodo}>
          Submit
        </button>
      </div>
      <div class="board">
        {todo.map((item, index) => {
          return (
            <li className="message">
              {item}
              <button
                className="delete-button"
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                x
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
