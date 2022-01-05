import React, { FC, FormEvent, useState } from "react";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./style.module.css";
import { AuthRequests } from "../../api/auth";

interface Props {

}

const SignUp: FC<Props> = () => {
  const [login, setLogin] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function signUp(e: FormEvent) {
    e.preventDefault();
    const user = await AuthRequests.signUp(login, username, password);
    console.log(user);
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