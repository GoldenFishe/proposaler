import React, { useEffect, useState } from 'react';

import styles from './style.module.css';
import { Http } from '../../utils/http';
import { Proposal } from '../../types/Proposal';
import ProposalCard from './components/ProposalCard/Proposal';

const Proposals = () => {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  useEffect(() => {
    getProposals();

    async function getProposals() {
      const proposals = await Http.get<Proposal[]>('/proposal');
      if (proposals) {
        setProposals(proposals);
      }
    }
  }, []);

  function like(proposalId: number) {
    const authorId = 1;
    Http.post('/proposal/like', { proposalId, authorId });
  }

  function dislike(proposalId: number) {
    const authorId = 1;
    Http.post('/proposal/dislike', { proposalId, authorId });
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