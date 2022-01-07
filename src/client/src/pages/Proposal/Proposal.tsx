import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

import Card from "./components/Card/Card";
import Comment from "./components/Comment/Comment";
import { ProposalModel } from "../../models/ProposalModel";
import CreateComment from "./components/CreateComment/CreateComment";
import { ProposalType } from "../../types/ProposalType";
import styles from "./style.module.css";
import { CommentType } from "../../types/CommentType";

interface Props {
  proposalModel: ProposalModel;
}

const Proposal: FC<Props> = ({ proposalModel }) => {
  const { id } = useParams();
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

  function onCreateComment(newComment: FormData) {
    newComment.set("proposalId", String(id));
    proposalModel.createComment(newComment);
  }

  return (
    <div className={styles.wrapper}>
      {proposalModel.id && <Card {...proposalModel}
                                 onLike={likeProposal(proposalModel.id)}
                                 onDislike={dislikeProposal(proposalModel.id)} />}
      {proposalModel.comments.length > 0 && proposalModel.comments.map(comment => {
        return <Comment key={comment.id}
                        {...comment}
                        onLike={likeComment(comment.id)}
                        onDislike={dislikeComment(comment.id)} />;
      })}
      <CreateComment onCreate={onCreateComment} />
    </div>
  );
};

export default observer(Proposal);