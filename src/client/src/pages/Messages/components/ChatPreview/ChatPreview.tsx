import React, { FC } from "react";

import Avatar from "../../../../components/Avatar/Avatar";
import { MessageType } from "../../../../types/MessageType";
import styles from "./style.module.css";

interface Props extends MessageType {
  onSelect: () => void;
}

const ChatPreview: FC<Props> = ({ sender, text, onSelect }) => {
  return (
    <div onClick={onSelect}>
      <Avatar src={sender.avatar} size="medium" />
      <p>{text}</p>
    </div>
  );
};

export default ChatPreview;