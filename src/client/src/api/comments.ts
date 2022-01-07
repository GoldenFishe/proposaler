import { Http } from './http';
import { CommentType } from '../types/CommentType';
import { ProposalType } from '../types/ProposalType';

type CommentAction = {
  commentId: number;
};

export namespace CommentsRequests {
  export function createComment(newComment: FormData) {
    return Http.Instance.post<FormData, CommentType[]>(
      `/comment/create`,
      newComment,
    );
  }

  export function getComments(id: ProposalType['id']) {
    return Http.Instance.get<CommentType[]>(`/comment/${id}`);
  }

  export function getProposal(id: ProposalType['id']) {
    return Http.Instance.get<ProposalType>(`/proposal/${id}`);
  }

  export function like(commentId: CommentType['id']) {
    return Http.Instance.post<CommentAction, CommentType>('/comment/like', {
      commentId,
    });
  }

  export function dislike(commentId: CommentType['id']) {
    return Http.Instance.post<CommentAction, CommentType>('/comment/dislike', {
      commentId,
    });
  }
}
