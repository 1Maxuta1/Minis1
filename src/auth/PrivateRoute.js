// import React, { useContext } from "react";
// import { Route, Navigate } from "react-router-dom";
// import { AuthContextProvider } from "./authContext"; // Replace with the actual path to your AuthContext

// const PrivateRoute = ({ element, ...rest }) => {
//   const { currentUser } = useContext(AuthContextProvider);

//   return (
//     !!currentUser ? (
//       React.createElement(element, { ...rest })
//     ) : (
//       <Navigate to="/login" />
//     )
//   );
// };

// export default PrivateRoute;