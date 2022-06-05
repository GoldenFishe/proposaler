import { createContext } from 'react';

import { CommentType } from '../../types/CommentType';

type CommentsContextType = {
  selectCommentIdToReply: (id: CommentType['id'] | null) => void;
  like: (id: CommentType['id']) => void;
  dislike: (id: CommentType['id']) => void;
};
const defaultCommentsContext: CommentsContextType = {
  selectCommentIdToReply: () => {},
  like: () => {},
  dislike: () => {},
};

export const CommentsContext = createContext<CommentsContextType>(
  defaultCommentsContext,
);
