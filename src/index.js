import reportWebVitals from "./reportWebVitals";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./States/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderTree = (state) => {
  root.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
      />
    </BrowserRouter>
  );
};

rerenderTree(store.getState());
store.subcribe(rerenderTree);

reportWebVitals();
