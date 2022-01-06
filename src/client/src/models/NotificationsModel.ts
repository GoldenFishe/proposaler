import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";

export type Notification = {
  id: string;
  type: "message" | "error";
  message: string;
}

export class NotificationsModel {
  notifications: Notification[];

  constructor() {
    makeAutoObservable(this);
    this.notifications = [];
  }

  add(notification: Omit<Notification, "id">) {
    this.notifications.push({ ...notification, id: nanoid() });
  }

  remove(id: string) {
    const itemIndex = this.notifications.findIndex(notification => notification.id === id);
    this.notifications.splice(itemIndex, 1);
  }
}

export const notificationsModel = new NotificationsModel();