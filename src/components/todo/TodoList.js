import React from "react";
import LineTodo from "./LineTodo";

const TodoList = ({ todos, handleCheck, handleDelete, bgColor }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <LineTodo
          key={todo.id}
          todo={todo}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          bgColor={bgColor}
        />
      ))}
    </ul>
  );
};

export default TodoList;
