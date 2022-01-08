import { FileType } from "./FileType";
import { UserType } from "./UserType";

export type CommentType = {
  author: UserType;
  comment: string;
  createDatetime: string;
  dislikesAmount: number;
  likesAmount: number;
  isDisliked: boolean;
  isLiked: boolean;
  files: FileType[];
  id: number;
  replyTo: CommentType["id"] | null
};
