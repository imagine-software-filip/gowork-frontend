import React from "react";
import { Button, Form, Input, Alert } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// import { useMutation } from "@apollo/client";
import styles from "./LoginForm.module.css";
// import { LOGIN_USER } from "../../GraphQL/Mutations";

const LoginForm = () => {
  // const navigate = useNavigate();
  // const [activeAlert, setActiveAlert] = useState(false);
  // const [loginUser] = useMutation(LOGIN_USER);
  // const [alert, setAlert] = useState({ type: "", desc: "", msg: "" });
  const alert="Error";
  const activeAlert = true;

  const onFinish = (values) => {
    // loginUser({
    //   variables: { email: values.username, password: values.password },
    // })
    //   .then((res) => {
    //     localStorage.setItem("authToken", res.data.tokenAuth.token);
    //     navigate("../", { replace: true });
    //     window.location.reload();
    //   })
    //   .catch((err) => {
    //     setActiveAlert(true);
    //     setAlert({
    //       error: "error",
    //       desc: "Credentials incorrect",
    //       msg: "Error",
    //     });
    //   });
    console.log("Uncomment me")
  };

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

  return (
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
  );
};

export default LoginForm;
