import React from "react";
import "./App.css";
import MainPage from "./MainPage";
import { Provider } from "react-redux";
import { store } from "./App/Store";

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
