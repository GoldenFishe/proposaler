import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  async function signUp() {
    const user = await AuthRequests.signUp(login, username, password);
    if (user) {
      userModel.profile = { username: user.username, id: user.id, avatar: user.avatar };
      navigate("/proposals");
    }
  }

  return (
    <div className={styles.container}>
      <Title size={5}>Sign Up</Title>
      <Form onSubmit={signUp}>
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
        <Button type="submit"
                primary>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;