import React from "react";
import Todo from "./todo/Todo";
import AddTodo from "./todo/AddTodo";
import SearchTodo from "./todo/SearchTodo";
import apiRequest from "../api/apiRequest";
import { useState, useEffect } from "react";

const Freedom = ({ bgColor }) => {
  const API_URL = `https://digitally-react-app.herokuapp.com/todos`;
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data tidak ditemukan");
        const listTodos = await response.json();
        setTodos(listTodos);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await fetchTodos())();
    }, 2000);
  }, []);

  const addTodo = async (todo) => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const myNewTodo = { id, checked: false, todo };
    const listTodos = [...todos, myNewTodo];
    setTodos(listTodos);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewTodo),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    addTodo(newTodo);
    setNewTodo("");
  };

  const handleCheck = async (id) => {
    const listTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(listTodos);

    const myTodo = listTodos.find((todo) => todo.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myTodo.checked }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listTodos = todos.filter((todo) => todo.id !== id);
    setTodos(listTodos);

    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  };
  return (
    <main className="todo">
      <AddTodo
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleSubmit={handleSubmit}
        bgColor={bgColor}
      />
      <SearchTodo search={search} setSearch={setSearch} />
      <div className="mainTodo">
        {fetchError ? (
          <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>
        ) : isLoading ? (
          <p>Loading todos...</p>
        ) : (
          <Todo
            todos={todos.filter((todo) =>
              todo.todo.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            bgColor={bgColor}
          />
        )}
      </div>
    </main>
  );
};

export default Freedom;
