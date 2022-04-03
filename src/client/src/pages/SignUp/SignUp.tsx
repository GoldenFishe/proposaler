import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthRequests } from "../../api/auth";
import { UserModel } from "../../models/UserModel";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./style.module.css";

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
      <Title size={5}>Sign up to Proposaler</Title>
      <Form onSubmit={signUp}>
        <Input label="Login"
               value={login}
               autoFocus
               minLength={4}
               maxLength={20}
               required
               onChange={setLogin} />
        <Input label="Username"
               value={username}
               minLength={4}
               maxLength={20}
               required
               onChange={setUsername} />
        <Input type="password"
               label="Password"
               value={password}
               minLength={4}
               maxLength={20}
               required
               onChange={setPassword} />
        <Input type="password"
               label="Confirm password"
               value={passwordConfirmation}
               minLength={4}
               maxLength={20}
               required
               invalid={password !== passwordConfirmation}
               invalidMessage="Please ensure that your password and your confirm password are the same"
               onChange={setPasswordConfirmation} />
        <Button type="submit"
                primary>
          Sign Up
        </Button>
      </Form>
      <p>Already have an account? <Link to="/sign-in">Sign in</Link>.</p>
    </div>
  );
};

export default SignUp;