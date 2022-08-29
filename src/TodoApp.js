import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProducts, deleteProducts, updateProducts } from "./redux/actions";

const TodoApp = () => {
  const todo = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), title: text };
    dispatch(addProducts(newTodo));
  };

  return (
    <div>
      <h2>TodoApp</h2>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch(deleteProducts(todo.id))}>
              Delete
            </button>
            <button
              onClick={() => dispatch(updateProducts({ ...todo, title: text }))}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          placeholder="Todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoApp;
