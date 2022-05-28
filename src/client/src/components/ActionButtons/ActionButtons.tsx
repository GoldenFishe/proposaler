import React, { FC, MouseEvent } from "react";

import Like from "../Like/Like";
import Dislike from "../Dislike/Dislike";
import { ProposalType } from "../../types/ProposalType";
import { CommentType } from "../../types/CommentType";
import styles from "./style.module.scss";

interface Props {
  likesAmount: ProposalType["likesAmount"] | CommentType["likesAmount"];
  dislikesAmount: ProposalType["dislikesAmount"] | CommentType["dislikesAmount"];
  isLiked: ProposalType["isLiked"] | CommentType["isLiked"];
  isDisliked: ProposalType["isDisliked"] | CommentType["isDisliked"];
  onLike: (e: MouseEvent) => void;
  onDislike: (e: MouseEvent) => void;
}

const ActionButtons: FC<Props> = ({
                                    likesAmount,
                                    dislikesAmount,
                                    isLiked,
                                    isDisliked,
                                    children,
                                    onLike,
                                    onDislike
                                  }) => {
  return (
    <div className={styles.actionButtons}>
      <Like amount={likesAmount}
            liked={isLiked}
            onClick={onLike} />
      <Dislike amount={dislikesAmount}
               disliked={isDisliked}
               onClick={onDislike} />
      {children}
    </div>
  );
};

export default ActionButtons;