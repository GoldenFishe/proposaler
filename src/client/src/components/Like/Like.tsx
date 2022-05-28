import React, { FC, MouseEvent } from "react";
import {ThumbsUp} from "@carbon/icons-react";

import { ProposalType } from "../../types/ProposalType";
import { CommentType } from "../../types/CommentType";
import styles from "./style.module.scss";

interface Props {
  amount: ProposalType["likesAmount"] | CommentType["likesAmount"];
  liked: ProposalType["isLiked"] | CommentType["isLiked"];
  onClick: (e: MouseEvent) => void;
}

const Like: FC<Props> = ({ amount, liked, onClick }) => {
  const className = liked ? styles.liked : undefined;
  return (
    <div onClick={onClick} className={styles.like}>
      <ThumbsUp className={className}/>
      <span>{amount}</span>
    </div>
  );
};

export default Like;