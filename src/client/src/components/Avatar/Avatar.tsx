import React, { FC } from "react";

import { UserType } from "../../types/UserType";
import styles from "./style.module.css";

interface Props {
  src: UserType["avatar"];
  size: "big" | "medium" | "small";
}

const sizes = {
  "big": 150,
  "medium": 50,
  "small": 25
};

const Avatar: FC<Props> = ({ src, size }) => {
  const fullSrc = src ? `/static/avatars/${src}` : "";

  return src ?
    <img src={fullSrc}
         className={styles.avatar}
         alt="avatar"
         width={sizes[size]}
         height={sizes[size]} /> :
    <div className={styles.avatar}
         style={{
           width: `${sizes[size]}px`,
           height: `${sizes[size]}px`
         }} />;
};

export default Avatar;