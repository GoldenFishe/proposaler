import React, { FC } from "react";

import { Proposal } from "../../../../types/Proposal";
import ActionButtons from "../../../../components/ActionButtons/ActionButtons";
import MetaInfo from "../../../../components/MetaInfo/MetaInfo";
import styles from "./styles.module.css";

interface Props extends Proposal {

}

const Card: FC<Props> = ({
                           title,
                           description,
                           author,
                           createDatetime,
                           likesAmount,
                           dislikesAmount,
                           isLiked,
                           isDisliked
                         }) => {
  return (
    <div className={styles.card}>
      <MetaInfo username={author.username} createDatetime={createDatetime} />
      <h6>{title}</h6>
      <p>{description}</p>
      <ActionButtons likesAmount={likesAmount}
                     dislikesAmount={dislikesAmount}
                     isLiked={isLiked}
                     isDisliked={isDisliked}
                     onLike={() => {
                     }}
                     onDislike={() => {
                     }} />
    </div>
  );
};

export default Card;