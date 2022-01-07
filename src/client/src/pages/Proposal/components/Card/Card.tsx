import React, { FC } from "react";

import { ProposalType } from "../../../../types/ProposalType";
import ActionButtons from "../../../../components/ActionButtons/ActionButtons";
import MetaInfo from "../../../../components/MetaInfo/MetaInfo";
import styles from "./styles.module.css";

interface Props extends ProposalType {
  onLike: () => void;
  onDislike: () => void;
}

const Card: FC<Props> = ({
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
  return (
    <div className={styles.card}>
      <MetaInfo username={author.username} avatar={author.avatar} createDatetime={createDatetime} />
      <h6>{title}</h6>
      <p>{description}</p>
      <ActionButtons likesAmount={likesAmount}
                     dislikesAmount={dislikesAmount}
                     isLiked={isLiked}
                     isDisliked={isDisliked}
                     onLike={onLike}
                     onDislike={onDislike} />
    </div>
  );
};

export default Card;