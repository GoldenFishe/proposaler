import React, { FC, MouseEvent } from "react";
import {ThumbsDown} from "@carbon/icons-react";

import { ProposalType } from "../../types/ProposalType";
import { CommentType } from "../../types/CommentType";
import styles from "./style.module.scss";

interface Props {
  amount: ProposalType["dislikesAmount"] | CommentType["dislikesAmount"];
  disliked: ProposalType["isDisliked"] | CommentType["isDisliked"];
  onClick: (e: MouseEvent) => void;
}

const Dislike: FC<Props> = ({ amount, disliked, onClick }) => {
  const className = disliked ? styles.dislikeActive : undefined;
  return (
    <div onClick={onClick} className={styles.dislike}>
      <ThumbsDown className={className}/>
      <span>{amount}</span>
    </div>
  );
};

export default Dislike;