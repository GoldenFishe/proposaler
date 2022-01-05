import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

import Card from "./components/Card/Card";
import Comment from "./components/Comment/Comment";
import { ProposalModel } from "../../models/ProposalModel";
import styles from "./style.module.css";

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

  function likeProposal(proposalId: number) {
    return function() {
      proposalModel.like(proposalId);
    };
  }

  function dislikeProposal(proposalId: number) {
    return function() {
      proposalModel.dislike(proposalId);
    };
  }

  function likeComment(commentId: number) {
    return function() {
      proposalModel.likeComment(commentId);
    };
  }

  function dislikeComment(commentId: number) {
    return async function() {
      proposalModel.dislikeComment(commentId);
    };
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
    </div>
  );
};

export default observer(Proposal);