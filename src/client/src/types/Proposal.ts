import { User } from './User';
import { File } from './File';

export type Proposal = {
  id: number;
  title: string;
  description: string;
  author: User;
  createDatetime: string;
  files: File[];
  dislikesAmount: number;
  likesAmount: number;
  isLiked: boolean;
  isDisliked: boolean;
};
