import React, { FC, Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

import Card from "./components/Card/Card";
import Comment from "./components/Comment/Comment";
import { ProposalModel } from "../../models/ProposalModel";
import CreateComment from "./components/CreateComment/CreateComment";
import { ProposalType } from "../../types/ProposalType";
import { CommentType } from "../../types/CommentType";
import styles from "./style.module.css";

interface Props {
  proposalModel: ProposalModel;
}

const Proposal: FC<Props> = ({ proposalModel }) => {
  const { id } = useParams();
  const [selectedCommentId, selectCommentIdToReply] = useState<CommentType["id"]>();
  useEffect(() => {
    if (id) {
      proposalModel.getProposal(Number(id));
      proposalModel.getComments(Number(id));
    }
  }, [id, proposalModel]);

  function likeProposal(id: ProposalType["id"]) {
    return function() {
      proposalModel.like(id);
    };
  }

  function dislikeProposal(id: ProposalType["id"]) {
    return function() {
      proposalModel.dislike(id);
    };
  }

  function likeComment(id: CommentType["id"]) {
    return function() {
      proposalModel.likeComment(id);
    };
  }

  function dislikeComment(id: CommentType["id"]) {
    return async function() {
      proposalModel.dislikeComment(id);
    };
  }

  function onCreateComment(newComment: FormData, replyTo?: CommentType["id"]) {
    if (replyTo !== undefined) {
      newComment.set("replyTo", String(replyTo));
    }
    newComment.set("proposalId", String(id));
    proposalModel.createComment(newComment);
  }

  return (
    <div className={styles.wrapper}>
      {proposalModel.id && <Card {...proposalModel}
                                 onLike={likeProposal(proposalModel.id)}
                                 onDislike={dislikeProposal(proposalModel.id)} />}
      {proposalModel.comments.length > 0 && proposalModel.comments.map(comment => {
        return (
          <Fragment key={comment.id}>
            <Comment {...comment}
                     selectCommentIdToReply={selectCommentIdToReply}
                     onLike={likeComment(comment.id)}
                     onDislike={dislikeComment(comment.id)} />
            {comment.id === selectedCommentId &&
              <CreateComment onCreate={onCreateComment} replyTo={selectedCommentId} />}
          </Fragment>
        );
      })}
      <CreateComment onCreate={onCreateComment} />
    </div>
  );
};

export default observer(Proposal);