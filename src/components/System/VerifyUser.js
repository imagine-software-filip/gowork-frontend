import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Input } from "antd";
import { VERIFY_USER } from "../../graphql/mutations";

import styles from "./VerifyUser.module.css";

const VerifyUser = () => {
  const user_id = localStorage.getItem("user-id");
  const navigate = useNavigate();
  const [verify_login] = useMutation(VERIFY_USER);
  const [verToken, setVerToken] = useState("");
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  
  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length < 7) {
        setVerToken(value);
    }
  };

  const onFinish = () => {
    verify_login({
      variables: { userId: user_id, verifyCode: verToken },
    })
      .then((res) => {
        navigate("../", { replace: true });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <div className={styles.mainContainer}>
      <form className={styles.formContainer}>
        <h2>Verify your Email</h2>
        <Input size="medium" prefix={<span>GW-</span>} onChange={handleChange} value={verToken}/>
        <button className={styles.button} onClick={onFinish}>Verify</button>
        <button className={styles.logoutBtn} onClick={logOut}>Log Out</button>
      </form>
    </div>
  );
};

export default VerifyUser;
