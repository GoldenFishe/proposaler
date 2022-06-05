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
  tags: TagType[];
  isLiked: boolean;
  isDisliked: boolean;
};

export type TagType = {
  label: string;
  id: number;
};
