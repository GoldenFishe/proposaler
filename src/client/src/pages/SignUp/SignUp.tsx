import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {ButtonSet} from "@carbon/react";

import { AuthRequests } from "../../api/auth";
import { UserModel } from "../../models/UserModel";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./style.module.scss";

interface Props {
  userModel: UserModel;
}

const SignUp: FC<Props> = ({ userModel }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  async function signUp() {
    const user = await AuthRequests.signUp(login, username, password);
    if (user) {
      userModel.setProfile(user);
      navigate("/proposals");
    }
  }

  return (
    <div className={styles.container}>
      <Title size={4}>Sign Up To Enigma</Title>
      <p className={styles.subtitle}>Already have an account? <Link to="/sign-in" className="cds--link">Sign In</Link>.</p>
      <Form onSubmit={signUp} className={styles.form}>
        <Input type="text"
               label="Login"
               value={login}
               id="login"
               onChange={setLogin} />
        <Input type="text"
               label="Username"
               value={username}
               id="username"
               onChange={setUsername} />
        <Input label="Password"
               type="password"
               value={password}
               id="password"
               onChange={setPassword} />
        <Input label="Confirm password"
               type="password"
               value={passwordConfirmation}
               id="password"
               onChange={setPasswordConfirmation} />
        <Button type="submit" size="xl" className={styles.submitButton}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;