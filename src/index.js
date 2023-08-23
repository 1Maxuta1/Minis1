import reportWebVitals from "./reportWebVitals";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./States/redux-store";
import { Provider } from "react-redux";
import { AuthProvider } from "./auth/useAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </AuthProvider>
  </BrowserRouter>
);

reportWebVitals();

// addPost={store.addPost.bind(store)}
// updateNewPostText={store.updateNewPostText.bind(store)}
