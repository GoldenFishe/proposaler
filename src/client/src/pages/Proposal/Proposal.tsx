import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Http } from "../../utils/http";

const Proposal = () => {
  const {id} = useParams();
  useEffect(() => {
    if (id) {
      getProposal(id);
    }

    async function getProposal(id: string) {
      const proposal = await Http.get(`/proposal/${id}`)
      console.log(proposal);
    }
  }, [id])
  return (
    <div>
      proposal
    </div>
  );
};

export default Proposal;