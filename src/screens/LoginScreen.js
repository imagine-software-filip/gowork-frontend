import React from "react";
import styles from "./LoginScreen.module.css";
import LoginForm from "../components/UI/LoginForm";
import BlobAnimation from "../components/UI/BlobAnimation";


const LoginScreen = () => {
  return (
    <div className={styles.mainContainer}>
      <LoginForm />
      <BlobAnimation />
    </div>
  );
};

export default LoginScreen;
