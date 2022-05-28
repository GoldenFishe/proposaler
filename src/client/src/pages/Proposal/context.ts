import { createContext } from "react";

import { CommentType } from "../../types/CommentType";

type CommentsContextType = {
  selectedCommentIdToReply: CommentType["id"] | null;
  selectCommentIdToReply: (id: CommentType["id"] | null) => void;
  createComment: (newComment: FormData, replyTo?: CommentType["id"]) => void;
  like: (id: CommentType["id"]) => void;
  dislike: (id: CommentType["id"]) => void;
}
const defaultCommentsContext: CommentsContextType = {
  selectedCommentIdToReply: null,
  selectCommentIdToReply: () => {
  },
  createComment: () => {
  },
  like: () => {
  },
  dislike: () => {
  }
};

export const CommentsContext = createContext<CommentsContextType>(defaultCommentsContext);