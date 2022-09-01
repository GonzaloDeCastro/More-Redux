import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./redux/reducers/todoSlice";

const TodoApp = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todoReducers);
  console.log(todo);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), title: text };
    dispatch(addTodo(newTodo));
  };

  return (
    <div>
      <h2>TodoApp</h2>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
            <button
              onClick={() => dispatch(updateTodo({ ...todo, title: text }))}
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
