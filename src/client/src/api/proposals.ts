import { Http } from './http';
import { Proposal as ProposalType, Proposal } from '../types/Proposal';

type ProposalAction = {
  proposalId: number;
  authorId: number;
};

export namespace ProposalRequests {
  export function getProposals() {
    return Http.get<Proposal[]>('/proposal');
  }

  export function getProposal(id: number) {
    return Http.get<ProposalType>(`/proposal/${id}`);
  }

  export function like(proposalId: number, authorId: number) {
    return Http.post<ProposalAction, ProposalType>('/proposal/like', {
      proposalId,
      authorId,
    });
  }

  export function dislike(proposalId: number, authorId: number) {
    return Http.post<ProposalAction, ProposalType>('/proposal/dislike', {
      proposalId,
      authorId,
    });
  }
}
