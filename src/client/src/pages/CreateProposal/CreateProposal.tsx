import React, { FC, FormEvent } from "react";

import { ProposalsModel } from "../../models/ProposalsModel";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";

interface Props {
  proposalsModel: ProposalsModel;
}

const CreateProposal: FC<Props> = ({ proposalsModel }) => {
  const create = (e: FormEvent) => {
    const newProposal = new FormData((e.target) as HTMLFormElement);
    proposalsModel.create(newProposal);
  };

  return (
    <div>
      <Form onSubmit={create}>
        <Input label="Title" name="title" />
        <Textarea label="Description" name="description" />
        <Input label="Files" type="file" name="files" />
        <Button type="submit" primary>Create Proposal</Button>
      </Form>
    </div>
  );
};

export default CreateProposal;