import { UserType } from './UserType';

export type MessageType = {
  id: number;
  createDatetime: string;
  recipient: UserType;
  sender: UserType;
  text: string;
};
