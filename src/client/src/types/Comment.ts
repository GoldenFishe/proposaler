import { File } from './File';
import { User } from './User';

export type Comment = {
  author: User;
  comment: string;
  createDatetime: string;
  dislikesAmount: number;
  likesAmount: number;
  isDisliked: boolean;
  isLiked: boolean;
  files: File[];
  id: number;
};
