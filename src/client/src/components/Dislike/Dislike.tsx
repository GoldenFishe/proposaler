import React, { FC, MouseEvent } from "react";

import dislike from "../../assets/icons/dislike.png";
import dislikeActive from "../../assets/icons/dislike_active.png";
import { ProposalType } from "../../types/ProposalType";
import { CommentType } from "../../types/CommentType";
import styles from "./style.module.css";

interface Props {
  amount: ProposalType["dislikesAmount"] | CommentType["dislikesAmount"];
  disliked: ProposalType["isDisliked"] | CommentType["isDisliked"];
  onClick: (e: MouseEvent) => void;
}

const Dislike: FC<Props> = ({ amount, disliked, onClick }) => {
  const src = disliked ? dislikeActive : dislike;
  return (
    <div onClick={onClick} className={styles.dislike}>
      <img src={src} alt="Dislike" className={styles.icon} />
      <span>{amount}</span>
    </div>
  );
};

export default Dislike;