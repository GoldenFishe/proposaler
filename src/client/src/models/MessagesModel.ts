import { makeAutoObservable } from 'mobx';

import { MessageType } from '../types/MessageType';
import { MessagesRequests, NewMessage } from '../api/messages';

export class MessagesModel {
  messages: MessageType[];

  constructor() {
    makeAutoObservable(this);
    this.messages = [];
  }

  async getMessages() {
    try {
      const messages = await MessagesRequests.getMessages();
      if (messages) {
        this.messages = messages;
      }
      return messages;
    } catch (e) {
      console.error(e);
    }
  }

  async sendMessage(newMessage: NewMessage) {
    try {
      const messages = await MessagesRequests.sendMessage(newMessage);
      if (messages) {
        this.messages = messages;
      }
    } catch (e) {
      console.error(e);
    }
  }
}

export const messagesModel = new MessagesModel();
