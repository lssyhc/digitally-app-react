import React from "react";
import TodoList from "./TodoList";

const Todo = ({ todos, handleCheck, handleDelete, bgColor }) => {
  return (
    <>
      {todos.length ? (
        <TodoList
          todos={todos}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          bgColor={bgColor}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>List todo anda kosong</p>
      )}
    </>
  );
};

export default Todo;
