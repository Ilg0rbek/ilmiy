import React from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const user = localStorage.getItem("user");
  return <div>{user ? <Outlet /> : <Navigate to={"/login"} />}</div>;
};

export default PrivateRoute;
