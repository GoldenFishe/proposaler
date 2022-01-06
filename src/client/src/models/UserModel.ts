import { makeAutoObservable } from 'mobx';

import { User } from '../types/User';
import { UserRequests } from '../api/user';

export class UserModel implements User {
  id: number;
  username: string;

  constructor() {
    makeAutoObservable(this);
  }

  async getUserById(id: number) {
    const user = await UserRequests.getUserById(id);
    if (user) {
      this.id = user.id;
      this.username = user.username;
    }
  }
}

export const userModel = new UserModel();
