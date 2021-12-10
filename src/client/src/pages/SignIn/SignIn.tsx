import React, { FC, useState, FormEvent } from "react";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./style.module.css";
import { AuthRequests } from "../../api/auth";

interface Props {

}

const SignIn: FC<Props> = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  async function signIn(e: FormEvent) {
    e.preventDefault();
    const user = await AuthRequests.signIn(login, password);
    console.log(user);
  }

  return (
    <div>
      <form onSubmit={signIn}>
        <label>Login <Input value={login}
                            onChange={setLogin} />
        </label>
        <label>Password <Input type="password"
                               value={password}
                               onChange={setPassword} />
        </label>
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;