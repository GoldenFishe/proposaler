import { Http } from './http';
import { ProposalType, TagType } from '../types/ProposalType';

type ProposalAction = {
  proposalId: number;
};

export namespace ProposalRequests {
  export function createProposal(newProposal: FormData) {
    return Http.Instance.post<FormData, ProposalType>(
      '/proposal/create',
      newProposal,
    );
  }

  export function getProposals() {
    return Http.Instance.get<ProposalType[]>('/proposal');
  }

  export function getProposal(id: ProposalType['id']) {
    return Http.Instance.get<ProposalType>(`/proposal/${id}`);
  }

  export function like(proposalId: ProposalType['id']) {
    return Http.Instance.post<ProposalAction, ProposalType>('/proposal/like', {
      proposalId,
    });
  }

  export function dislike(proposalId: ProposalType['id']) {
    return Http.Instance.post<ProposalAction, ProposalType>(
      '/proposal/dislike',
      {
        proposalId,
      },
    );
  }

  export function getTags(tag: string) {
    return Http.Instance.get<TagType[]>(`/proposal/tags?tag=${tag}`, true);
  }
}
