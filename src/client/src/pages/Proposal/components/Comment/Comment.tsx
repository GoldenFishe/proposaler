import React, { FC } from "react";

import { Comment as CommentType } from "../../../../types/Comment";
import ActionButtons from "../../../../components/ActionButtons/ActionButtons";
import MetaInfo from "../../../../components/MetaInfo/MetaInfo";
import styles from "./style.module.css";

interface Props extends CommentType {
  onLike: () => void;
  onDislike: () => void;
}

const Comment: FC<Props> = ({
                              comment,
                              author,
                              createDatetime,
                              likesAmount,
                              dislikesAmount,
                              isLiked,
                              isDisliked,
                              onLike,
                              onDislike
                            }) => {
  return (
    <div className={styles.comment}>
      <MetaInfo username={author.username} createDatetime={createDatetime} />
      {comment}
      <ActionButtons likesAmount={likesAmount}
                     dislikesAmount={dislikesAmount}
                     isLiked={isLiked}
                     isDisliked={isDisliked}
                     onLike={onLike}
                     onDislike={onDislike} />
    </div>
  );
};

export default Comment;