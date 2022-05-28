import React, { FC } from "react";

import { ProposalType } from "../../../../types/ProposalType";
import ActionButtons from "../../../../components/ActionButtons/ActionButtons";
import MetaInfo from "../../../../components/MetaInfo/MetaInfo";
import styles from "./styles.module.scss";

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
                           files,
                           onLike,
                           onDislike
                         }) => {
  return (
    <div className={styles.card}>
      <MetaInfo username={author.username}
                userId={author.id}
                avatar={author.avatar}
                createDatetime={createDatetime} />
      <h6>{title}</h6>
      <p>{description}</p>
      <div className={styles.files}>
        {files.map(file => <img src={`/static/proposals/${file.filename}`}
                                key={file.id}
                                width={150}
                                height={150} />)}
      </div>
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