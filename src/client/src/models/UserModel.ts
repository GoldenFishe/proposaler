import { makeAutoObservable } from 'mobx';

import { User } from '../types/User';
import { UserRequests } from '../api/user';

export class UserModel {
  self: User | undefined;
  user: User | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  async getUserById(id: number) {
    const user = await UserRequests.getUserById(id);
    if (user) {
      this.user = user;
    }
  }
}

export const userModel = new UserModel();
