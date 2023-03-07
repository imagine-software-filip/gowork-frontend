import React, { useState } from "react";
import { Button, Form, Input, Alert } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./LoginScreen.module.css";

const LoginScreen = () => {
  const [activeAlert, setActiveAlert] = useState(false);  
  const [alert, setAlert] = useState({type: "", desc: "", msg: ""});

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
    localStorage.setItem("authToken", "");
    console.log()
    if (values) {
      console.log("Received values of form: ", values);
      localStorage.setItem("authToken", "asdas");
    }

    if (localStorage.getItem("authToken") !== "") {
        setAlert({
            type: 'error',
            desc: 'User with the provided info does not exists',
            msg: 'Failed'
        });
        setActiveAlert(true);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <h1>Sign In</h1>
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
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
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
                className={styles.loginFormButton}
              >
                Log in
              </Button>
              Or{" "}
              <Link to="/" className={styles.registerNowButt}>
                register now!
              </Link>
            </Form.Item>
            {activeAlert && <AlertCard msg="Congrats!" type="error" desc="Lorem ipsun lorem ipuss asd  a" />}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
