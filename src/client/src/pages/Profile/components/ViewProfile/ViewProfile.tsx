import React, { FC } from "react";

import styles from "./style.module.css";
import { UserType } from "../../../../types/UserType";
import Avatar from "../../../../components/Avatar/Avatar";
import Title from "../../../../components/Title/Title";

interface Props extends Partial<UserType> {

}

const ViewProfile: FC<Props> = ({ username, avatar }) => {
  if (username === undefined || avatar === undefined) return <p>loading'</p>;
  return (
    <div className={styles.container}>
      <Title size={5}>View Profile</Title>
      <Avatar src={avatar} size="big" />
      <p>Username</p>
      <p>{username}</p>
    </div>
  );
};

export default ViewProfile;