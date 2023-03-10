import React from "react";
import styles from "./LoginScreen.module.css";
import networkImg from "../assets/networking.png";
import LoginForm from "../components/UI/LoginForm";


const LoginScreen = () => {
  return (
    <div className={styles.mainContainer}>
      <LoginForm />
      <div className={styles.sideBarContainer}>
        <div className={styles.sideBarContent}>
          <h2>GoWork</h2>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with:
          </p>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with:
          </p>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book. It usually begins with:
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
