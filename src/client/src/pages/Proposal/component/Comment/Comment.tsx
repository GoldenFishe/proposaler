import React, { FC } from "react";

import { Comment as CommentType } from "../../../../types/Comment";
import ActionButtons from "../../../../components/ActionButtons/ActionButtons";
import MetaInfo from "../../../../components/MetaInfo/MetaInfo";
import styles from "./style.module.css";

interface Props extends CommentType {

}

const Comment: FC<Props> = ({
                              comment,
                              author,
                              createDatetime,
                              likesAmount,
                              dislikesAmount,
                              isLiked,
                              isDisliked
                            }) => {
  return (
    <div className={styles.comment}>
      <MetaInfo username={author.username} createDatetime={createDatetime} />
      {comment}
      <ActionButtons likesAmount={likesAmount}
                     dislikesAmount={dislikesAmount}
                     isLiked={isLiked}
                     isDisliked={isDisliked}
                     onLike={() => {
                     }}
                     onDislike={() => {
                     }} />
    </div>
  );
};

export default Comment;