import React, { FC, MouseEvent } from "react";

import Like from "../Like/Like";
import Dislike from "../Dislike/Dislike";
import styles from "./style.module.css";

interface Props {
  likesAmount: number;
  dislikesAmount: number;
  isLiked: boolean;
  isDisliked: boolean;
  onLike: (e: MouseEvent) => void;
  onDislike: (e: MouseEvent) => void;
}

const ActionButtons: FC<Props> = ({
                                    likesAmount,
                                    dislikesAmount,
                                    isLiked,
                                    isDisliked,
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
    </div>
  );
};

export default ActionButtons;