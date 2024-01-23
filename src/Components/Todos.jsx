import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, edittodo } from "../Features/Todo/TodoSlice";
import todosstyle from "./Todos.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEditTodo = (id, newText) => {
    dispatch(edittodo({ id, newText }));
  };

  return (
    <>
      <div className={todosstyle.heading}>Todos</div>
      <ul>
        {todos.map((todo) => {
          return (
            <li className={todosstyle.box} key={todo.id}>
              <div className="text-white">{todo.text}</div>
              <div>
                <button
                  className="text-white bg-red-800 p-1 rounded mr-2"
                  onClick={() =>
                    handleEditTodo(
                      todo.id,
                      prompt("Enter new text:", todo.text)
                    )
                  }
                >
                  <EditIcon />
                </button>
                <button
                  className="text-white bg-red-800 p-1 rounded"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  <DeleteOutlineIcon />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todos;
