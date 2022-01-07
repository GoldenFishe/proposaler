import React, { useEffect, FC } from "react";
import { observer } from "mobx-react";

import ProposalCard from "./components/ProposalCard/Proposal";
import { ProposalsModel } from "../../models/ProposalsModel";
import { ProposalType } from "../../types/ProposalType";
import styles from "./style.module.css";

interface Props {
  proposalsModel: ProposalsModel;
}

const Proposals: FC<Props> = ({ proposalsModel }) => {
  useEffect(() => {
    proposalsModel.getProposals();
  }, [proposalsModel]);

  function like(id: ProposalType["id"]) {
    proposalsModel.like(id);
  }

  function dislike(id: ProposalType["id"]) {
    proposalsModel.dislike(id);
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