import React, { FC, FormEvent } from "react";

import { UserType } from "../../../../types/UserType";
import Title from "../../../../components/Title/Title";
import Avatar from "../../../../components/Avatar/Avatar";
import Form from "../../../../components/Form/Form";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import styles from "./style.module.css";

interface Props extends UserType {
  onSaveChanges: (changes: FormData) => void;
}

const EditProfile: FC<Props> = ({ username, login, avatar, onSaveChanges }) => {
  const saveChanges = (e: FormEvent) => {
    const form = e.target as HTMLFormElement;
    const changes = new FormData();
    const avatar = form["avatar"].files[0];
    const login = form["login"].value;
    const username = form["username"].value;
    const password = form["password"].value;
    if (avatar) changes.set("avatar", avatar);
    if (login) changes.set("login", login);
    if (username) changes.set("username", username);
    if (password) changes.set("password", password);
    onSaveChanges(changes);
  };
  return (
    <div className={styles.container}>
      <Title size={5}>Edit Profile</Title>
      <Avatar src={avatar} />
      <Form onSubmit={saveChanges}>
        <Input label="Avatar" type="file" name="avatar" />
        <Input label="Login" name="login" defaultValue={login} />
        <Input label="Username" name="username" defaultValue={username} />
        <Input label="Password" type="password" name="password" />
        <Button type="submit" primary>Save Changes</Button>
      </Form>
    </div>
  );
};

export default EditProfile;