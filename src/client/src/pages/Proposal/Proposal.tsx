import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

import { CommentsContext } from "./context";
import Card from "./components/Card/Card";
import Comment from "./components/Comment/Comment";
import { toTree } from "../../utils/utils";
import { ProposalModel } from "../../models/ProposalModel";
import CreateComment from "./components/CreateComment/CreateComment";
import { CommentType } from "../../types/CommentType";
import styles from "./style.module.css";

interface Props {
  proposalModel: ProposalModel;
}

const Proposal: FC<Props> = ({ proposalModel }) => {
  const { id } = useParams();
  const [selectedCommentIdToReply, selectCommentIdToReply] = useState<CommentType["id"] | null>(null);

  const comments = toTree(proposalModel.comments, { parent: "id", child: "replyTo" });

  useEffect(() => {
    if (id) {
      proposalModel.getProposal(Number(id));
      proposalModel.getComments(Number(id));
    }
  }, [id, proposalModel]);

  function like(id: CommentType["id"]) {
    proposalModel.likeComment(id);
  }

  function dislike(id: CommentType["id"]) {
    proposalModel.dislikeComment(id);
  }

  function createComment(newComment: FormData, replyTo?: CommentType["id"]) {
    if (replyTo !== undefined) {
      newComment.set("replyTo", String(replyTo));
    }
    newComment.set("proposalId", String(id));
    proposalModel.createComment(newComment);
  }

  return (
    <div className={styles.wrapper}>
      {proposalModel.id && <Card {...proposalModel}
                                 onLike={() => proposalModel.like(proposalModel.id)}
                                 onDislike={() => proposalModel.dislike(proposalModel.id)} />}
      <div className={styles.comments}>
        <CommentsContext.Provider
          value={{ like, dislike, selectedCommentIdToReply, selectCommentIdToReply, createComment }}>
          {comments.map(comment => <Comment {...comment} key={comment.id} />)}
        </CommentsContext.Provider>
      </div>
      <CreateComment />
    </div>
  );
};

export default observer(Proposal);