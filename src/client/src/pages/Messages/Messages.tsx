import React, { FC, useEffect, useState } from "react";

import ChatPreview from "./components/ChatPreview/ChatPreview";
import Chat from "./components/Chat/Chat";
import { MessagesModel } from "../../models/MessagesModel";
import { MessageGroupBySenderId } from "./types";
import { MessageType } from "../../types/MessageType";

interface Props {
  messagesModel: MessagesModel;
}

const Messages: FC<Props> = ({ messagesModel }) => {
  const [messagesBySender, setMessagesBySender] = useState<MessageGroupBySenderId>({});
  const [selectedChat, setSelectedChat] = useState<MessageType[] | null>(null);

  useEffect(() => {
    messagesModel.getMessages().then(messages => {
      if (messages) {
        const messageGroup = messages.reduce<MessageGroupBySenderId>((acc, message) => {
          acc[message.sender.id] = [...acc[message.sender.id] || [], message];
          return acc;
        }, {});
        setMessagesBySender(messageGroup);
      }
    });
  }, [messagesModel]);

  return (
    <div>
      {selectedChat === null ?
        Object.values(messagesBySender).map(messageGroup => {
          const [firstMessage] = messageGroup;
          return <ChatPreview {...firstMessage}
                              onSelect={() => setSelectedChat(messageGroup)}
                              key={firstMessage.id} />;
        }) : (
          <Chat messages={selectedChat} />
        )}
    </div>
  );
};

export default Messages;