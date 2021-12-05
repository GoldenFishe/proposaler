import React, { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./style.module.css";
import Like from "../../../../components/Like/Like";
import Dislike from "../../../../components/Dislike/Dislike";

interface Props {
  id: number;
  title: string;
  description: string;
  onLike: (proposalId: number) => void;
  onDislike: (proposalId: number) => void;
}

const ProposalCard: FC<Props> = ({ id, title, description, onLike, onDislike }) => {
  return (
    <li className={styles.proposalCard}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <Like amount={0} liked={true} onClick={(e) => {
            console.log("like");
            onLike(id);
          }} />
          <Dislike amount={0} disliked={true} onClick={() => {
            console.log("dislike");
            onDislike(id);
          }} />
        </div>
      </div>
    </li>
  );
};

export default ProposalCard;