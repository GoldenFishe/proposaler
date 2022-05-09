import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';

export type Notification = {
  id: string;
  type: 'error' | 'info' | 'info-square' | 'success' | 'warning' | 'warning-alt';
  title: string;
  message: string;
};

export class NotificationsModel {
  notifications: Notification[];

  constructor() {
    makeAutoObservable(this);
    this.notifications = [];
  }

  add(notification: Omit<Notification, 'id'>) {
    this.notifications.push({ ...notification, id: nanoid() });
  }

  remove(id: Notification['id']) {
    const itemIndex = this.notifications.findIndex(
      (notification) => notification.id === id,
    );
    this.notifications.splice(itemIndex, 1);
  }
}

export const notificationsModel = new NotificationsModel();
