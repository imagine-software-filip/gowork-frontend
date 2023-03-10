import React from "react";
import { Spin } from "antd";
import { useQuery } from "@apollo/client";
import { Navigate, useLocation } from "react-router-dom";
import { CHECK_LOGIN } from "./../../GraphQL/Queries";

import styles from "./RequireAuth.module.css";
import VerifyUser from "./VerifyUser";

const RequireAuth = (props) => {
  const authed = props.user;
  const location = useLocation();

  // * GraphQL
  const check_login = useQuery(CHECK_LOGIN, {
    variables: {
      token: authed,
    },
  });

  if (!check_login.loading && !check_login.error) {
    console.log(check_login.data.currentUser.isVerified)
  }
  
  if (check_login.loading) {
    return (
      <Spin tip="Loading" size="large" className={styles.loading}>
        <div className="content" />
      </Spin>
    );
  } else {
    if (check_login.error) {
      return (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
      );
    }
    if (check_login.data.currentUser.id) {
      localStorage.setItem("user-id", check_login.data.currentUser.id);
      if (check_login.data.currentUser.isVerified) {
        return props.children;
      } else {
        return <VerifyUser />
      }
    }
  }
};

export default RequireAuth;
