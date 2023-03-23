import React, { useState } from "react";
import { Button, Form, Input, Alert } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { motion } from "framer-motion";
import styles from "./LoginForm.module.css";
import { LOGIN_USER } from "../../graphql/mutations";

const LoginForm = () => {
  const navigate = useNavigate();
  const [activeAlert, setActiveAlert] = useState(false);
  const [loginUser] = useMutation(LOGIN_USER);
  const [alert, setAlert] = useState({ type: "", msg: "" });

  const onFinish = (values) => {
    loginUser({
      variables: { email: values.username, password: values.password },
    })
      .then((res) => {
        setActiveAlert(false);
        localStorage.setItem("authToken", res.data.tokenAuth.token);
        navigate("../", { replace: true });
        window.location.reload();
      })
      .catch((err) => {
        setActiveAlert(true);
        setAlert({
          error: "error",
          msg: err.message,
          type: "error",
        });
      });
  };

  const AlertCard = () => {
    return <Alert message={alert.msg} type={alert.type} showIcon closable />;
  };

  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <div className={styles.headingContainerOnForm}>
            <h2>Sign In</h2>
          </div>
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
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <AlertCard msg="Congrats!" type="error" />
              </motion.div>
            )}
          </Form>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginForm;
