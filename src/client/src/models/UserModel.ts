import { makeAutoObservable } from "mobx";

import { User } from "../types/User";

export class UserModel implements User {
  id: number;
  username: string;

  constructor() {
    makeAutoObservable(this);
  }


}

export const userModel = new UserModel();