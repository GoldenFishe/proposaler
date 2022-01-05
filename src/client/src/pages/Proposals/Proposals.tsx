import React, { useEffect, FC } from "react";
import { observer } from "mobx-react";

import ProposalCard from "./components/ProposalCard/Proposal";
import { ProposalRequests } from "../../api/proposals";
import { ProposalsModel } from "../../models/ProposalsModel";
import styles from "./style.module.css";

interface Props {
  proposalsModel: ProposalsModel;
}

const Proposals: FC<Props> = ({ proposalsModel }) => {
  useEffect(() => {
    getProposals();

    async function getProposals() {
      const data = await ProposalRequests.getProposals();
      if (data) {
        proposalsModel.proposals = data;
      }
    }
  }, [proposalsModel]);

  function like(proposalId: number) {
    proposalsModel.like(proposalId);
  }

  function dislike(proposalId: number) {
    proposalsModel.dislike(proposalId);
  }

  return (
    <ul className={styles.proposals}>
      {proposalsModel.proposals.map(proposal => <ProposalCard key={proposal.id}
                                                              {...proposal}
                                                              onLike={like}
                                                              onDislike={dislike} />)}
    </ul>
  );
};

export default observer(Proposals);