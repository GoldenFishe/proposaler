import { File } from './File';
import { Author } from './Author';

export type Comment = {
  author: Author;
  comment: string;
  createDatetime: string;
  dislikesAmount: number;
  likesAmount: number;
  isDisliked: boolean;
  isLiked: boolean;
  files: File[];
  id: number;
};
