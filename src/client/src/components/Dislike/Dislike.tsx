import React, { FC, MouseEvent } from "react";

import dislike from "../../assets/icons/dislike.png";
import styles from "./style.module.css";

interface Props {
  amount: number;
  disliked: boolean;
  onClick: (e: MouseEvent) => void;
}

const Dislike: FC<Props> = ({ amount, disliked, onClick }) => {
  const style = { color: disliked ? "red" : "unset" };
  return (
    <div onClick={onClick} className={styles.dislike}>
      <img src={dislike} alt="Dislike" className={styles.icon} />
      <span style={style}>{amount}</span>
    </div>
  );
};

export default Dislike;