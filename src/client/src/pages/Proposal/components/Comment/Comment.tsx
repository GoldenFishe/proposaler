import React, { FC } from "react";

import { CommentType } from "../../../../types/CommentType";
import ActionButtons from "../../../../components/ActionButtons/ActionButtons";
import MetaInfo from "../../../../components/MetaInfo/MetaInfo";
import styles from "./style.module.css";

interface Props extends CommentType {
  selectCommentIdToReply: (id: number) => void;
  onLike: () => void;
  onDislike: () => void;
}

const Comment: FC<Props> = ({
                              id,
                              comment,
                              author,
                              createDatetime,
                              likesAmount,
                              dislikesAmount,
                              isLiked,
                              isDisliked,
                              files,
                              selectCommentIdToReply,
                              onLike,
                              onDislike
                            }) => {
  return (
    <div className={styles.comment}>
      <MetaInfo userId={author.id}
                username={author.username}
                avatar={author.avatar}
                createDatetime={createDatetime} />
      {comment}
      <div className={styles.files}>
        {files.map(file => <img src={`/static/comments/${file.filename}`}
                                width={150}
                                height={150} />)}
      </div>
      <p onClick={() => selectCommentIdToReply(id)}>Reply</p>
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