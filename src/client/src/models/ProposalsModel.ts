import { makeAutoObservable } from 'mobx';
import { Proposal } from '../types/Proposal';
import { ProposalRequests } from '../api/proposals';

export class ProposalsModel {
  proposals: Proposal[];

  constructor() {
    makeAutoObservable(this);
    this.proposals = [];
  }

  async like(id: number) {
    const likedProposal = await ProposalRequests.like(id);
    if (likedProposal) {
      this.proposals = this.proposals.map((proposal) => {
        return proposal.id === likedProposal.id ? likedProposal : proposal;
      });
    }
  }

  async dislike(id: number) {
    const dislikedProposal = await ProposalRequests.dislike(id);
    if (dislikedProposal) {
      this.proposals = this.proposals.map((proposal) => {
        return proposal.id === dislikedProposal.id
          ? dislikedProposal
          : proposal;
      });
    }
  }
}

export const proposalsModel = new ProposalsModel();
