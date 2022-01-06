import React, { FC, FormEvent } from "react";

import { ProposalsModel } from "../../models/ProposalsModel";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

interface Props {
  proposalsModel: ProposalsModel;
}

const CreateProposal: FC<Props> = ({ proposalsModel }) => {
  const create = (e: FormEvent) => {
    e.preventDefault();
    const newProposal = new FormData((e.target) as HTMLFormElement);
    proposalsModel.create(newProposal);
  };

  return (
    <div>
      <form onSubmit={create}>
        <Input label="Title" name="title" />
        <Input label="Description" name="description" />
        <Input label="Files"
               type="file"
               name="files"
               onChange={e => {
                 //@ts-ignore
                 console.log(e.target.files);
                 //@ts-ignore
                 console.log(e.target.files[0]);
               }} />
        <Button type="submit">Create Proposal</Button>
      </form>
    </div>
  );
};

export default CreateProposal;