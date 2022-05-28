import React, { FC, useContext } from "react";

import { CommentType } from "../../../../types/CommentType";
import { TreeItem } from "../../../../utils/utils";
import { CommentsContext } from "../../context";
import ActionButtons from "../../../../components/ActionButtons/ActionButtons";
import MetaInfo from "../../../../components/MetaInfo/MetaInfo";
import FileViewer from "../../../../components/FileViewer/FileViewer";
import styles from "./style.module.scss";

interface Props extends TreeItem<CommentType> {

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
                              descendants
                            }) => {
  const { selectCommentIdToReply, like, dislike } = useContext(CommentsContext);
  return (
    <div className={styles.comments}>
      <div className={styles.comment}>
        <MetaInfo userId={author.id}
                  username={author.username}
                  avatar={author.avatar}
                  createDatetime={createDatetime} />
        <p className={styles.commentText}>{comment}</p>
        <div className={styles.files}>
          <FileViewer filetype="image">
            {files.map(file => (
              <img src={`/static/comments/${file.filename}`}
                   width={150}
                   height={150}
                   key={file.id} />
            ))}
          </FileViewer>
        </div>
        <ActionButtons likesAmount={likesAmount}
                       dislikesAmount={dislikesAmount}
                       isLiked={isLiked}
                       isDisliked={isDisliked}
                       onLike={() => like(id)}
                       onDislike={() => dislike(id)}>
          {<span onClick={() => selectCommentIdToReply(id)}>Reply</span>}
        </ActionButtons>
      </div>
      {descendants.map(descendant => <Comment {...descendant} key={descendant.id} />)}
    </div>
  );
};

export default Comment;