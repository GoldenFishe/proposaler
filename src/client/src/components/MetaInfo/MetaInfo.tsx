import React, { FC } from "react";
import { Link } from "react-router-dom";

import Avatar from "../Avatar/Avatar";
import { UserType } from "../../types/UserType";
import { ProposalType } from "../../types/ProposalType";
import { CommentType } from "../../types/CommentType";
import styles from "./style.module.css";

interface Props {
  userId: UserType["id"];
  username: UserType["username"];
  avatar: UserType["avatar"];
  createDatetime: ProposalType["createDatetime"] | CommentType["createDatetime"];
}

type DateTimeFormatOptions = {
  year: "numeric";
  month: "numeric";
  day: "numeric";
  hour: "numeric";
  minute: "numeric";
}

const MetaInfo: FC<Props> = ({ userId, username, createDatetime, avatar }) => {
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
      <Avatar src={avatar}
              size="medium"/>
      <Link to={`/profile/${userId}`}
            className={styles.username}>
        {username}
      </Link>
      <span className={styles.datetime}>
        {datetime}
      </span>
    </div>
  );
};

export default MetaInfo;