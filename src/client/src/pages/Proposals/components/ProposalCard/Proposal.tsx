import React, { FC, MouseEvent } from "react";
import { Link } from "react-router-dom";

import { Proposal } from "../../../../types/Proposal";
import ActionButtons from "../../../../components/ActionButtons/ActionButtons";
import styles from "./style.module.css";
import MetaInfo from "../../../../components/MetaInfo/MetaInfo";

interface Props extends Proposal {
  onLike: (proposalId: number) => void;
  onDislike: (proposalId: number) => void;
}

const ProposalCard: FC<Props> = ({
                                   id,
                                   title,
                                   description,
                                   author,
                                   createDatetime,
                                   likesAmount,
                                   dislikesAmount,
                                   isLiked,
                                   isDisliked,
                                   onLike,
                                   onDislike
                                 }) => {
  const like = (e: MouseEvent) => {
    e.preventDefault();
    onLike(id);
  };
  const dislike = (e: MouseEvent) => {
    e.preventDefault();
    onDislike(id);
  };
  return (
    <li className={styles.proposalCard}>
      <Link to={`${id}`} className={styles.proposalCardLink}>
        <MetaInfo username={author.username} createDatetime={createDatetime} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div>
            <ActionButtons likesAmount={likesAmount}
                           dislikesAmount={dislikesAmount}
                           isLiked={isLiked}
                           isDisliked={isDisliked}
                           onLike={like}
                           onDislike={dislike} />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProposalCard;