import React, { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { AuthRequests } from "../../api/auth";
import { UserModel } from "../../models/UserModel";
import styles from "./style.module.css";

interface Props {
  userModel: UserModel;
}

const SignUp: FC<Props> = ({ userModel }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function signUp(e: FormEvent) {
    e.preventDefault();
    const user = await AuthRequests.signUp(login, username, password);
    if (user) {
      userModel.self = { username: user.username, id: user.id };
      navigate("/proposals");
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={signUp} className={styles.form}>
        <Input label="Login"
               value={login}
               onChange={setLogin} />
        <Input
          label="Username" value={username}
          onChange={setUsername} />
        <Input type="password"
               label="Password"
               value={password}
               onChange={setPassword} />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;