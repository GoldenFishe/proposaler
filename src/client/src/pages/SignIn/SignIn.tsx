import React, { FC, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { AuthRequests } from "../../api/auth";
import { UserModel } from "../../models/UserModel";
import styles from "./style.module.css";

interface Props {
  userModel: UserModel;
}

const SignIn: FC<Props> = ({ userModel }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  async function signIn(e: FormEvent) {
    e.preventDefault();
    const user = await AuthRequests.signIn(login, password);
    if (user) {
      userModel.self = { username: user.username, id: user.id };
      navigate("/proposals");
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={signIn} className={styles.form}>
        <Input label="Login"
               value={login}
               onChange={setLogin} />
        <Input type="password"
               label="Password"
               value={password}
               onChange={setPassword} />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;