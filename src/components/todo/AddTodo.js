import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddTodo = ({ newTodo, setNewTodo, handleSubmit, bgColor }) => {
  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Tambah Todo"
        autoFocus
        autoComplete="off"
        required
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Todo"
        style={{ background: bgColor ? bgColor : "#0ca678" }}
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus style={{ fill: "#fff" }} />
      </button>
    </form>
  );
};

export default AddTodo;
