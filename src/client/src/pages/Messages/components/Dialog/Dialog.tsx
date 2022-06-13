import React, { FC, FormEvent } from "react";
import clsx from "clsx";

import Avatar from "../../../../components/Avatar/Avatar";
import Form from "../../../../components/Form/Form";
import Textarea from "../../../../components/Textarea/Textarea";
import Button from "../../../../components/Button/Button";
import { UserType } from "../../../../types/UserType";
import { MessageType } from "../../../../types/MessageType";
import styles from "./style.module.scss";

interface Props {
  companion: UserType["id"] | -1;
  messages: MessageType[] | undefined;
  onSendMessage: (recipient: UserType["id"], text: string) => void;
}

const Dialog: FC<Props> = ({ messages, companion, onSendMessage }) => {
  const handleSubmit = (e: FormEvent) => {
    onSendMessage(companion, (e.target as HTMLFormElement)["text"].value);
  };

  return (
    <div className={styles.container}>
      {messages ? [
        <div className={styles.messages} key="messages">
          {messages.map(message => {
            return (
              <div className={clsx(styles.message, { [styles.own]: message.sender.id !== companion })}
                   key={message.id}>
                <Avatar src={message.sender.avatar} size="medium" />
                <p className={styles.text}>{message.text}</p>
              </div>
            );
          })}
        </div>,
        <Form className={styles.form} onSubmit={handleSubmit} key="form">
          <Textarea label="Message" name="text" />
          <Button type="submit" kind="primary">Send</Button>
        </Form>
      ] : <h4 className={styles.emptyState}>Select dialog</h4>}
    </div>
  );
};

export default Dialog;