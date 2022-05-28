import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthRequests } from "../../api/auth";
import { UserModel } from "../../models/UserModel";
import Form from "../../components/Form/Form";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./style.module.scss";

interface Props {
  userModel: UserModel;
}

const SignIn: FC<Props> = ({ userModel }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    const user = await AuthRequests.signIn(login, password);
    if (user) {
      userModel.setProfile(user);
      navigate("/proposals");
    }
  }

  return (
    <div className={styles.container}>
      <Title size={4}>Sign In To Enigma</Title>
      <p className={styles.subtitle}>New to Enigma? <Link to="/sign-up" className="cds--link">Create an account</Link>.</p>
      <Form onSubmit={signIn} className={styles.form}>
        <Input type="text"
               label="Login"
               value={login}
               id="login"
               onChange={setLogin} />
        <Input label="Password"
               type="password"
               value={password}
               id="password"
               onChange={setPassword} />
        <Button type="submit" size="xl" className={styles.submitButton}>
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;