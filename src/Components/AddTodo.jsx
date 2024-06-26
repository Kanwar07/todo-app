import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Todo/TodoSlice";
import todosstyle from "./Todos.module.css";

function AddTodo() {
  const [input, setinput] = useState([]);
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setinput("");
  };

  return (
    <>
      <div className={todosstyle.main}>
        <h1>TodoMatic</h1>
      </div>
      <div className={todosstyle.main1}>
        <h2>What needs to be done?</h2>
      </div>
      <form
        onSubmit={addTodoHandler}
        className="space-x-3 flex justify-center p-4"
      >
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 text-gray-100 py-2 px-6 text-white"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    </>
  );
}

export default AddTodo;
