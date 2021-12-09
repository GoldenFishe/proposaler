import { Http } from './http';
import { Comment as CommentType } from '../types/Comment';
import { Proposal as ProposalType } from '../types/Proposal';

type CommentAction = {
  commentId: number;
  authorId: number;
};

export namespace CommentsRequests {
  export function getComments(id: number) {
    return Http.get<CommentType[]>(`/comment/${id}`);
  }

  export function getProposal(id: string) {
    return Http.get<ProposalType>(`/proposal/${id}`);
  }

  export function like(commentId: number, authorId: number) {
    return Http.post<CommentAction, CommentType>('/comment/like', {
      commentId,
      authorId,
    });
  }

  export function dislike(commentId: number, authorId: number) {
    return Http.post<CommentAction, CommentType>('/comment/dislike', {
      commentId,
      authorId,
    });
  }
}
