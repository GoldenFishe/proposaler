import { makeAutoObservable } from 'mobx';

import { UserType } from '../types/UserType';
import { UserRequests } from '../api/user';

export class UserModel {
  profile: UserType | undefined;
  user: UserType | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  async getUserById(id: UserType['id']) {
    const user = await UserRequests.getUserById(id);
    if (user) {
      this.setUser(user);
    }
  }

  async getProfile() {
    const user = await UserRequests.getProfile();
    if (user) {
      this.setProfile(user);
    }
  }

  async updateProfile(changes: FormData) {
    const user = await UserRequests.updateProfile(changes);
    if (user) {
      this.setProfile(user);
    }
  }

  setProfile(user: UserType) {
    this.profile = {
      username: user.username,
      id: user.id,
      avatar: user.avatar,
      login: user.login,
    };
  }

  setUser(user: UserType) {
    this.user = {
      username: user.username,
      id: user.id,
      avatar: user.avatar,
    };
  }
}

export const userModel = new UserModel();
