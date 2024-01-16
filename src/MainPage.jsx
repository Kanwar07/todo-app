import React from "react";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";

function MainPage() {
  return (
    <React.Fragment>
      <AddTodo />
      <Todos />
    </React.Fragment>
  );
}

export default MainPage;
