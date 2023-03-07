import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = (props) => {
  const authed = props.user;
  const location = useLocation();

  return authed ? (
    props.children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};

export default RequireAuth;
