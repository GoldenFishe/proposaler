import React, { FC, useEffect, useState } from "react";
import { observer } from "mobx-react";

import Dialogs from "./components/Dialogs/Dialogs";
import Dialog from "./components/Dialog/Dialog";
import { MessagesModel } from "../../models/MessagesModel";
import { DialogType } from "./types";
import { MessageType } from "../../types/MessageType";
import { UserModel } from "../../models/UserModel";
import { UserType } from "../../types/UserType";
import styles from "./style.module.scss";

interface Props {
  userModel: UserModel;
  messagesModel: MessagesModel;
}

const Messages: FC<Props> = ({ userModel, messagesModel }) => {
  const [dialogs, setDialogs] = useState<DialogType>({});
  const [selectedCompanion, setSelectedCompanion] = useState<UserType["id"] | -1>(-1);

  useEffect(() => {
    if (userModel.profile) {
      messagesModel.getMessages();
    }
  }, [messagesModel, userModel.profile]);

  useEffect(() => {
    const dialogs = buildDialog(messagesModel.messages);
    setDialogs(dialogs);

    function buildDialog(messages: MessageType[]) {
      let currentMessage: MessageType | null = null;
      const dialog: DialogType = {};
      while (messages.length) {
        [currentMessage] = messages;
        const companion = currentMessage.recipient.id === userModel.profile!.id ?
          currentMessage.sender :
          currentMessage.recipient;
        messages
          .filter(m => m.sender.id === companion.id || m.recipient.id === companion.id)
          .forEach(i => {
            const dialogItemIndex = messages.findIndex(m => m.id === i.id);
            const [dialogItem] = messages.splice(dialogItemIndex, 1);
            dialog[companion.id] = [...dialog[companion.id] || [], dialogItem];
          });
      }
      return dialog;
    }
  }, [messagesModel.messages, userModel.profile]);

  const sendMessage = (recipient: UserType["id"], text: string) => {
    messagesModel.sendMessage({ recipient, text });
  };
  return (
    <div className={styles.container}>
      <Dialogs dialogs={dialogs}
               selectedCompanion={selectedCompanion}
               onSelect={setSelectedCompanion} />
      <Dialog messages={dialogs[selectedCompanion]}
              companion={selectedCompanion}
              onSendMessage={sendMessage} />
    </div>
  );
};

export default observer(Messages);