import { Http } from './http';
import { Comment as CommentType } from '../types/Comment';
import { Proposal as ProposalType } from '../types/Proposal';

type CommentAction = {
  commentId: number;
};

export namespace CommentsRequests {
  export function createComment(newComment: FormData) {
    return Http.post<FormData, CommentType[]>(`/comment/create`, newComment);
  }

  export function getComments(id: number) {
    return Http.get<CommentType[]>(`/comment/${id}`);
  }

  export function getProposal(id: string) {
    return Http.get<ProposalType>(`/proposal/${id}`);
  }

  export function like(commentId: number) {
    return Http.post<CommentAction, CommentType>('/comment/like', {
      commentId,
    });
  }

  export function dislike(commentId: number) {
    return Http.post<CommentAction, CommentType>('/comment/dislike', {
      commentId,
    });
  }
}
