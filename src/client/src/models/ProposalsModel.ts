import { makeAutoObservable } from 'mobx';

import { ProposalType } from '../types/ProposalType';
import { ProposalRequests } from '../api/proposals';

export class ProposalsModel {
  proposals: ProposalType[];

  constructor() {
    makeAutoObservable(this);
    this.proposals = [];
  }

  async create(newProposal: FormData) {
    await ProposalRequests.createProposal(newProposal);
    this.getProposals();
  }

  async getProposals() {
    const proposals = await ProposalRequests.getProposals();
    if (proposals) {
      this.proposals = proposals;
    }
  }

  async like(id: ProposalType['id']) {
    const likedProposal = await ProposalRequests.like(id);
    if (likedProposal) {
      this.proposals = this.proposals.map((proposal) => {
        return proposal.id === likedProposal.id ? likedProposal : proposal;
      });
    }
  }

  async dislike(id: ProposalType['id']) {
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
