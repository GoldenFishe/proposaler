import React, { FC, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./style.module.css";
import { AuthRequests } from "../../api/auth";

interface Props {

}

const SignIn: FC<Props> = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  async function signIn(e: FormEvent) {
    e.preventDefault();
    await AuthRequests.signIn(login, password);
    navigate("/proposals");
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