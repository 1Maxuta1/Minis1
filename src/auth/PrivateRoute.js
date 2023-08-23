import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./useAuth.js"; // Импортируйте ваш контекст аутентификации

const PrivateRoute = ({ element, fallbackPath }) => {
  const { currentUser } = useAuth(); // Получите текущего пользователя из вашего контекста аутентификации

  if (currentUser) {
    return element;
  } else {
    return <Navigate to={fallbackPath} />;
  }
};

export default PrivateRoute;