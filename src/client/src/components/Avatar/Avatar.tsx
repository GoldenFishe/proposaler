import React, { FC } from "react";

import styles from "./style.module.css";
import { UserType } from "../../types/UserType";

interface Props {
  src: UserType["avatar"];
}

const Avatar: FC<Props> = ({ src }) => {
  return (
    <div className={styles.avatar}>
      <img src={src || ""} alt="avatar" />
    </div>
  );
};

export default Avatar;