import React, { FC, useRef } from "react";
import { Tag as CarbonTag } from "@carbon/react";

interface Props {
  title?: string;
  onClose?: () => void;
}

const TYPES = ["red", "magenta", "purple", "blue", "cyan", "teal", "green", "gray", "cool-gray", "warm-gray"];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const Tag: FC<Props> = ({ title, onClose, children }) => {
  const typeIndex = useRef(getRandomInt(0, TYPES.length));
  return (
    <CarbonTag title={title}
               type={TYPES[typeIndex.current]}
               filter={Boolean(onClose)}
               onClose={onClose}>
      {children}
    </CarbonTag>
  );
};

export default Tag;