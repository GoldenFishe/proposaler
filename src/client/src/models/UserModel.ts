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
      this.user = user;
    }
  }

  async getProfile() {
    const user = await UserRequests.getProfile();
    if (user) {
      this.profile = user;
    }
  }

  async updateProfile(changes: FormData) {
    const user = await UserRequests.updateProfile(changes);
    if (user) {
      this.profile = user;
    }
  }
}

export const userModel = new UserModel();
