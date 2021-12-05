import React, { FC, MouseEvent } from "react";

interface Props {
  amount: number;
  liked: boolean;
  onClick: (e: MouseEvent) => void;
}

const Like: FC<Props> = ({ amount, liked, onClick }) => {
  return (
    <div onClick={onClick}>
      {amount} likes. isLiked: {liked}
    </div>
  );
};

export default Like;