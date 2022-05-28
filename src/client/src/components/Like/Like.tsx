import React, { FC, MouseEvent } from "react";
import { ThumbsUp } from "@carbon/icons-react";
import clsx from "clsx";

import { ProposalType } from "../../types/ProposalType";
import { CommentType } from "../../types/CommentType";
import styles from "./style.module.scss";
import Button from "../Button/Button";

interface Props {
  amount: ProposalType["likesAmount"] | CommentType["likesAmount"];
  liked: ProposalType["isLiked"] | CommentType["isLiked"];
  onClick: (e: MouseEvent) => void;
}

const Like: FC<Props> = ({ amount, liked, onClick }) => {
  const className = clsx({ [styles.liked]: liked });

  return (
    <Button size="sm"
            kind="ghost"
            onClick={onClick}
            className={styles.like}>
      <ThumbsUp className={className} />
      <span>{amount}</span>
    </Button>
  );
};

export default Like;