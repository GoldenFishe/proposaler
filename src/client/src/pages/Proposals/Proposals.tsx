import React, { useEffect, useState } from "react";

import { Proposal } from "../../types/Proposal";
import ProposalCard from "./components/ProposalCard/Proposal";
import { ProposalRequests } from "../../api/proposals";
import styles from "./style.module.css";

const Proposals = () => {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  useEffect(() => {
    getProposals();

    async function getProposals() {
      const proposals = await ProposalRequests.getProposals();
      if (proposals) {
        setProposals(proposals);
      }
    }
  }, []);

  async function like(proposalId: number) {
    const likedProposal = await ProposalRequests.like(proposalId);
    if (likedProposal) {
      const proposalToModify = proposals.map(proposal => {
        return proposal.id === likedProposal.id ? likedProposal : proposal;
      });
      setProposals(proposalToModify);
    }
  }

  async function dislike(proposalId: number) {
    const authorId = 1;
    const dislikedProposal = await ProposalRequests.dislike(proposalId, authorId);
    if (dislikedProposal) {
      const proposalToModify = proposals.map(proposal => {
        return proposal.id === dislikedProposal.id ? dislikedProposal : proposal;
      });
      setProposals(proposalToModify);
    }
  }

  return (
    <ul className={styles.proposals}>
      {proposals.map(proposal => <ProposalCard key={proposal.id}
                                               {...proposal}
                                               onLike={like}
                                               onDislike={dislike} />)}
    </ul>
  );
};

export default Proposals;