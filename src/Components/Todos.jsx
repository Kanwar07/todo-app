import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Features/Todo/TodoSlice";
import todosstyle from "./Todos.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className={todosstyle.heading}>Todos</div>
      <ul>
        {todos.map((todo) => {
          return (
            <li className={todosstyle.box} key={todo.id}>
              <div className="text-white">{todo.text}</div>
              <button
                className="text-white bg-red-800 p-1 rounded"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <DeleteOutlineIcon />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todos;
