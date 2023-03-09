import React, { useState } from "react";
import { Button, Form, Input, Alert } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";

import styles from "./LoginScreen.module.css";
import networkImg from "../assets/networking.png";

import { LOGIN_USER } from "../GraphQL/mutations";


const LoginScreen = () => {
  const navigate = useNavigate();
  const [activeAlert, setActiveAlert] = useState(false);
  const [loginUser] = useMutation(LOGIN_USER);
  const [alert, setAlert] = useState({ type: "", desc: "", msg: "" });
  

  const AlertCard = () => {
    return (
      <Alert
        message={alert.msg}
        description={alert.desc}
        type={alert.type}
        showIcon
        closable
      />
    );
  };


  const onFinish = (values) => {
    loginUser({ variables: { email: values.username, password: values.password } })
    .then((res) => {
      console.log(res.data.tokenAuth.token)
      localStorage.setItem("authToken", res.data.tokenAuth.token)
      navigate("../", { replace: true });
      window.location.reload();
    })
    .catch((err) => {
      setActiveAlert(true);
      setAlert({error: "error", desc: "Credentials incorrect", msg: "Error"})
      console.log(err);
    });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <h2>Sign In</h2>
          <Form
            name="normal_login"
            className={styles.loginForm}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Link to="/" className={styles.loginFormForgot}>
                Forgot password
              </Link>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className={styles.loginFormButton}
              >
                Log in
              </Button>
              Or{" "}
              <Link to="/" className={styles.registerNowButt}>
                register now!
              </Link>
            </Form.Item>
            {activeAlert && (
              <AlertCard
                msg="Congrats!"
                type="error"
                desc="Lorem ipsun lorem ipuss asd  a"
              />
            )}
          </Form>
        </div>
      </div>
      <div className={styles.sideBarContainer}>
        <div className={styles.sideBarContent}>
          <h2>GoWork</h2>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with:{" "}
          </p>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with:{" "}
          </p>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with:{" "}
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={networkImg}
            alt="Freelancing"
            width="20%"
            style={{ marginBottom: 30 }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
