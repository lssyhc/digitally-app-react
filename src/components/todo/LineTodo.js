import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineTodo = ({ todo, handleCheck, handleDelete, bgColor }) => {
  return (
    <li
      className="todoList"
      style={{ border: `2.5px solid ${bgColor ? bgColor : "#0ca678"}` }}
    >
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => handleCheck(todo.id)}
      />
      <label style={todo.checked ? { textDecoration: "line-through" } : null}>
        {todo.todo}
      </label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(todo.id)}
      />
    </li>
  );
};

export default LineTodo;
