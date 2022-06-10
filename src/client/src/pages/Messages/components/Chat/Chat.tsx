import React, { FC } from "react";

import Avatar from "../../../../components/Avatar/Avatar";
import { MessageType } from "../../../../types/MessageType";
import styles from "./style.module.css";

interface Props {
  messages: MessageType[];
}

const Chat: FC<Props> = ({ messages }) => {
  return (
    <div>
      <Avatar src={""} size="medium" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lacinia odio, sed accumsan justo dictum
        sed. Aenean ipsum turpis, porttitor et erat vel, euismod egestas turpis. Morbi pellentesque, justo ullamcorper
        accumsan porta, nisl elit gravida nisi, ac laoreet nisl justo eget ipsum. Proin vel eros lobortis, elementum
        sapien quis, pretium libero.
      </p>
    </div>
  );
};

export default Chat;