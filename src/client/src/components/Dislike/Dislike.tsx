import React, { FC, MouseEvent } from "react";
import { ThumbsDown } from "@carbon/icons-react";
import clsx from "clsx";

import Button from "../Button/Button";
import { ProposalType } from "../../types/ProposalType";
import { CommentType } from "../../types/CommentType";
import styles from "./style.module.scss";

interface Props {
  amount: ProposalType["dislikesAmount"] | CommentType["dislikesAmount"];
  disliked: ProposalType["isDisliked"] | CommentType["isDisliked"];
  onClick: (e: MouseEvent) => void;
}

const Dislike: FC<Props> = ({ amount, disliked, onClick }) => {
  const className = clsx({ [styles.dislikeActive]: disliked });

  return (
    <Button size="sm"
            kind="ghost"
            onClick={onClick}
            className={styles.dislike}>
      <ThumbsDown className={className} />
      <span>{amount}</span>
    </Button>
  );
};

export default Dislike;