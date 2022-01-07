import React, { FC, MouseEvent } from "react";

import like from "../../assets/icons/like.png";
import { ProposalType } from "../../types/ProposalType";
import { CommentType } from "../../types/CommentType";
import styles from "./style.module.css";

interface Props {
  amount: ProposalType["likesAmount"] | CommentType["likesAmount"];
  liked: ProposalType["isLiked"] | CommentType["isLiked"];
  onClick: (e: MouseEvent) => void;
}

const Like: FC<Props> = ({ amount, liked, onClick }) => {
  const style = { color: liked ? "red" : "unset" };
  return (
    <div onClick={onClick} className={styles.like}>
      <img src={like} alt="Like" className={styles.icon} />
      <span style={style}>{amount}</span>
    </div>
  );
};

export default Like;