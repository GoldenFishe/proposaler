import React, { FC } from "react";

import Avatar from "../Avatar/Avatar";
import styles from "./style.module.css";

interface Props {
  username: string;
  createDatetime: string;
}

type DateTimeFormatOptions = {
  year: "numeric";
  month: "numeric";
  day: "numeric";
  hour: "numeric";
  minute: "numeric";
}

const MetaInfo: FC<Props> = ({ username, createDatetime }) => {
  const options: DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  };
  const datetime = Intl.DateTimeFormat(undefined, options).format(new Date(createDatetime));
  return (
    <div className={styles.metaInfo}>
      <Avatar />
      <span className={styles.username}>{username}</span>
      <span className={styles.datetime}>{datetime}</span>
    </div>
  );
};

export default MetaInfo;