import React, { FC, MouseEvent } from "react";

interface Props {
  amount: number;
  disliked: boolean;
  onClick: (e: MouseEvent) => void;
}

const Dislike: FC<Props> = ({amount, disliked, onClick}) => {
  return (
    <div onClick={onClick}>
      {amount} likes. isLiked: {disliked}
    </div>
  );
};

export default Dislike;