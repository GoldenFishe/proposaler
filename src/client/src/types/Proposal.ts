import { Author } from './Author';
import { File } from './File';

export type Proposal = {
  id: number;
  title: string;
  description: string;
  author: Author;
  createDatetime: string;
  files: File[];
  dislikesAmount: number;
  likesAmount: number;
  isLiked: boolean;
  isDisliked: boolean;
};
