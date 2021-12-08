import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Http } from "../../utils/http";
import { Proposal as ProposalType } from "../../types/Proposal";
import { Comment as CommentType } from "../../types/Comment";
import Card from "./component/Card/Card";
import Comment from "./component/Comment/Comment";
import styles from "./style.module.css";

const Proposal = () => {
  const { id } = useParams();
  const [proposal, setProposal] = useState<ProposalType>();
  const [comments, setComments] = useState<CommentType[]>();
  useEffect(() => {
    if (id) {
      getProposal(id);
      getComments(id);
    }

    async function getProposal(id: string) {
      const proposal = await Http.get<ProposalType>(`/proposal/${id}`);
      if (proposal) {
        setProposal(proposal);
      }
    }

    async function getComments(id: string) {
      const comments = await Http.get<CommentType[]>(`/comment/${id}`);
      if (comments) {
        setComments(comments);
      }
    }
  }, [id]);
  return (
    <div className={styles.wrapper}>
      {proposal && <Card {...proposal} />}
      {comments && comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </div>
  );
};

export default Proposal;