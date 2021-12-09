import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Proposal as ProposalType } from "../../types/Proposal";
import { Comment as CommentType } from "../../types/Comment";
import Card from "./component/Card/Card";
import Comment from "./component/Comment/Comment";
import { ProposalRequests } from "../../api/proposals";
import { CommentsRequests } from "../../api/comments";
import styles from "./style.module.css";

const Proposal = () => {
  const { id } = useParams();
  const [proposal, setProposal] = useState<ProposalType>();
  const [comments, setComments] = useState<CommentType[]>();
  useEffect(() => {
    if (id) {
      getProposal(Number(id));
      getComments(Number(id));
    }

    async function getProposal(id: number) {
      const proposal = await ProposalRequests.getProposal(id);
      if (proposal) {
        setProposal(proposal);
      }
    }

    async function getComments(id: number) {
      const comments = await CommentsRequests.getComments(id);
      if (comments) {
        setComments(comments);
      }
    }
  }, [id]);

  function likeProposal(proposalId: number) {
    return async function() {
      const authorId = 1;
      const likedProposal = await ProposalRequests.like(proposalId, authorId);
      if (likedProposal) {
        setProposal(likedProposal);
      }
    };
  }

  function dislikeProposal(proposalId: number) {
    return async function() {
      const authorId = 1;
      const dislikedProposal = await ProposalRequests.dislike(proposalId, authorId);
      if (dislikedProposal) {
        setProposal(dislikedProposal);
      }
    };
  }

  function likeComment(commentId: number) {
    return async function() {
      const authorId = 1;
      const likedComment = await CommentsRequests.like(commentId, authorId);
      if (likedComment) {
        const commentsToModify = comments!.map(comment => {
          return comment.id === likedComment.id ? likedComment : comment;
        });
        setComments(commentsToModify);
      }
    };
  }

  function dislikeComment(commentId: number) {
    return async function() {
      const authorId = 1;
      const dislikedComment = await CommentsRequests.dislike(commentId, authorId);
      if (dislikedComment) {
        const commentsToModify = comments!.map(comment => {
          return comment.id === dislikedComment.id ? dislikedComment : comment;
        });
        setComments(commentsToModify);
      }
    };
  }

  return (
    <div className={styles.wrapper}>
      {proposal && <Card {...proposal}
                         onLike={likeProposal(proposal.id)}
                         onDislike={dislikeProposal(proposal.id)} />}
      {comments && comments.map(comment => <Comment key={comment.id}
                                                    {...comment}
                                                    onLike={likeComment(comment.id)}
                                                    onDislike={dislikeComment(comment.id)} />)}
    </div>
  );
};

export default Proposal;