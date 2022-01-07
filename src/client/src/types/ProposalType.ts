import { UserType } from './UserType';
import { FileType } from './FileType';

export type ProposalType = {
  id: number;
  title: string;
  description: string;
  author: UserType;
  createDatetime: string;
  files: FileType[];
  dislikesAmount: number;
  likesAmount: number;
  isLiked: boolean;
  isDisliked: boolean;
};
