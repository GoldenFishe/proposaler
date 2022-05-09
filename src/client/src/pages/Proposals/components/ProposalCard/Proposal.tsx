import React, { FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Tag } from "@carbon/react";

import { ProposalType } from "../../../../types/ProposalType";
import ActionButtons from "../../../../components/ActionButtons/ActionButtons";
import MetaInfo from "../../../../components/MetaInfo/MetaInfo";
import styles from "./style.module.scss";

interface Props extends ProposalType {
  onLike: (id: ProposalType["id"]) => void;
  onDislike: (id: ProposalType["id"]) => void;
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
                                   tags,
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
        <MetaInfo userId={author.id}
                  username={author.username}
                  avatar={author.avatar}
                  createDatetime={createDatetime} />
        <article>
          <h6>{title}</h6>
          <p>{description}</p>
          <footer>
            {tags.map((tag, i) => <Tag key={i}>{tag.label}</Tag>)}
            <ActionButtons likesAmount={likesAmount}
                           dislikesAmount={dislikesAmount}
                           isLiked={isLiked}
                           isDisliked={isDisliked}
                           onLike={like}
                           onDislike={dislike} />
          </footer>
        </article>
      </Link>
    </li>
  );
};

export default ProposalCard;