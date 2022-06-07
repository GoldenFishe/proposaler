import { Http } from "./http";
import { UserType } from "../types/UserType";
import { MessageType } from "../types/MessageType";

export type NewMessage = {
  recipient: UserType["id"],
  text: string
}

export namespace MessagesRequests {
  export function getMessages() {
    return Http.Instance.get<MessageType>(`/message`);
  }

  export function sendMessage(newMessage: NewMessage) {
    return Http.Instance.post<NewMessage, MessageType>(`/message`, newMessage);
  }
}
