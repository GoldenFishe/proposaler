import { makeAutoObservable } from 'mobx';

import { ProposalType, TagType } from "../types/ProposalType";
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
      this.setProposals(proposals);
    }
  }

  async like(id: ProposalType['id']) {
    const likedProposal = await ProposalRequests.like(id);
    if (likedProposal) {
      const proposals = this.proposals.map((proposal) => {
        return proposal.id === likedProposal.id ? likedProposal : proposal;
      });
      this.setProposals(proposals);
    }
  }

  async dislike(id: ProposalType['id']) {
    const dislikedProposal = await ProposalRequests.dislike(id);
    if (dislikedProposal) {
      const proposals = this.proposals.map((proposal) => {
        return proposal.id === dislikedProposal.id
          ? dislikedProposal
          : proposal;
      });
      this.setProposals(proposals);
    }
  }

  private setProposals(proposals: ProposalType[]) {
    this.proposals = proposals;
  }
}

export const proposalsModel = new ProposalsModel();
