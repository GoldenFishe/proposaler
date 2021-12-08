import React, { FC, MouseEvent } from "react";

import like from "../../assets/icons/like.png";
import styles from "./style.module.css";

interface Props {
  amount: number;
  liked: boolean;
  onClick: (e: MouseEvent) => void;
}

const Like: FC<Props> = ({ amount, liked, onClick }) => {
  const style = { color: liked ? "red" : "unset" };
  return (
    <div onClick={onClick} className={styles.like}>
      <img src={like} alt="Like" className={styles.icon} />
      <span style={style}>{amount}</span>
    </div>
  );
};

export default Like;